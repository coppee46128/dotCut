
//グローバル変数
var m =3;
//グローバル変数



// 新規outlookを起動
var ol = WScript.CreateObject("Outlook.Application");

// ???
var sess = ol.Session

//// 二つ目のアカウント取得
var acc = sess.Accounts.Item(2);

//受信フォルダ
var fld = acc.DeliveryStore.GetDefaultFolder(6);

//メール列挙(iデクリメント)
for(i=fld.items.count;i>fld.items.count-m;i--){
	
	var itm=fld.Items(i);
	
	//添付ファイル列挙(iiインクリメント)
	for(ii=0;ii<itm.Attachments.Count;ii++ ){
		//配列0に値がない？？？
		//WScript.Echo(  itm.Attachments.Item(ii+1).FileName  );
		//SaveAsFileはデフォでdocumentへ,
		//以下でデスクトップへ
		itm.Attachments.Item(ii+1).SaveAsFile('../Desktop/'+'テスト用3'+ii+'.txt');
		
		
	}
	
	//件名取得
	WScript.Echo( itm.subject  );
	
	//fld.Items(i).Attachments
	
}





//WScript.Echo( fld.Items(1)  );
//WScript.Echo( folder.Items(1).Body );
//C:\Users\win10_4\Desktop
/*
for(i=fld.items.count;i>fld.items.count-3;i--){
WScript.Echo( fld.Items(i)  );
}
if( fld.Items(i).Attachments.Count != 0 ){
		WScript.Echo( fld.Items(i).Attachments.Count );
	}

*/






