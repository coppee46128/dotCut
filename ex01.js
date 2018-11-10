// Windows Script HostによるExcel操作
 
// オートメーション オブジェクトへの参照を有効化
var excel = new ActiveXObject("Excel.Application"); 
// 実行中にExcelを表示する
excel.Visible = true;
//######################################

//ファイル
var fs = new ActiveXObject( "Scripting.FileSystemObject" );
//カレントdir
var curDir = fs.GetFolder(".").path;
//  Folderオブジェクトを取得
var em = new Enumerator( fs.GetFolder( curDir ).Files );
//#############
for( em.moveFirst(); !em.atEnd(); em.moveNext() ){
//①ファイル名6桁のエクセル
if((em.item().Name).match(/\d{6}\.xlsx/)){
	//ふるぱす完成
	var fname=curDir + "\\" + em.item().Name;
	
	var book = excel.Workbooks.Open(fname);
	//②リストというシート
	for ( var i = 1; i <= book.Sheets.Count; i++ ) {
		if( book.Sheets(i).Name == "リスト" ){
			//---------------------------------
			var sheet = book.Worksheets("リスト");
			WScript.Echo( sheet.Range("A1").Value );
			sheet.Range("B1").Value = em.item().Name;
			//---------------------------------
		}
	}
	/*
	if( book.Worksheets("リスト") ){
		
		
		
	}
	//WScript.Echo( curDir + "\\" + em.item().Name );
	*/
}



/*
// 新規ブック追加
var book = excel.Workbooks.Open();
// 1個目のワクシート
var sheet = book.Worksheets(1);
// セルB2に現在日時を表示
sheet.Range( "B2" ).Value = "??";
// FileSystemObject を使用し、カレントディレクトリ取得
var fso = new ActiveXObject("Scripting.FileSystemObject");
var curDir = fso.GetFolder(".").path;
// 保存先のフルパスファイル名を設定
var filename = curDir + "\\test.xlsx";
// Excelブックを保存
book.SaveAs(filename);
// メッセージ表示
WScript.Echo(filename + "\nに保存しました。");
// ブックを閉じる
book.Close();
*/
}
//#############

//######################################
// Excelを終了
excel.Quit();