// Windows Script Host�ɂ��Excel����
 
// �I�[�g���[�V���� �I�u�W�F�N�g�ւ̎Q�Ƃ�L����
var excel = new ActiveXObject("Excel.Application"); 
// ���s����Excel��\������
excel.Visible = true;
//######################################

//�t�@�C��
var fs = new ActiveXObject( "Scripting.FileSystemObject" );
//�J�����gdir
var curDir = fs.GetFolder(".").path;
//  Folder�I�u�W�F�N�g���擾
var em = new Enumerator( fs.GetFolder( curDir ).Files );
//#############
for( em.moveFirst(); !em.atEnd(); em.moveNext() ){
//�@�t�@�C����6���̃G�N�Z��
if((em.item().Name).match(/\d{6}\.xlsx/)){
	//�ӂ�ς�����
	var fname=curDir + "\\" + em.item().Name;
	
	var book = excel.Workbooks.Open(fname);
	//�A���X�g�Ƃ����V�[�g
	for ( var i = 1; i <= book.Sheets.Count; i++ ) {
		if( book.Sheets(i).Name == "���X�g" ){
			//---------------------------------
			var sheet = book.Worksheets("���X�g");
			WScript.Echo( sheet.Range("A1").Value );
			sheet.Range("B1").Value = em.item().Name;
			//---------------------------------
		}
	}
	/*
	if( book.Worksheets("���X�g") ){
		
		
		
	}
	//WScript.Echo( curDir + "\\" + em.item().Name );
	*/
}



/*
// �V�K�u�b�N�ǉ�
var book = excel.Workbooks.Open();
// 1�ڂ̃��N�V�[�g
var sheet = book.Worksheets(1);
// �Z��B2�Ɍ��ݓ�����\��
sheet.Range( "B2" ).Value = "??";
// FileSystemObject ���g�p���A�J�����g�f�B���N�g���擾
var fso = new ActiveXObject("Scripting.FileSystemObject");
var curDir = fso.GetFolder(".").path;
// �ۑ���̃t���p�X�t�@�C������ݒ�
var filename = curDir + "\\test.xlsx";
// Excel�u�b�N��ۑ�
book.SaveAs(filename);
// ���b�Z�[�W�\��
WScript.Echo(filename + "\n�ɕۑ����܂����B");
// �u�b�N�����
book.Close();
*/
}
//#############

//######################################
// Excel���I��
excel.Quit();