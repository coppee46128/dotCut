
//�O���[�o���ϐ�
var m =3;
//�O���[�o���ϐ�



// �V�Koutlook���N��
var ol = WScript.CreateObject("Outlook.Application");

// ???
var sess = ol.Session

//// ��ڂ̃A�J�E���g�擾
var acc = sess.Accounts.Item(2);

//��M�t�H���_
var fld = acc.DeliveryStore.GetDefaultFolder(6);

//���[����(i�f�N�������g)
for(i=fld.items.count;i>fld.items.count-m;i--){
	
	var itm=fld.Items(i);
	
	//�Y�t�t�@�C����(ii�C���N�������g)
	for(ii=0;ii<itm.Attachments.Count;ii++ ){
		//�z��0�ɒl���Ȃ��H�H�H
		//WScript.Echo(  itm.Attachments.Item(ii+1).FileName  );
		//SaveAsFile�̓f�t�H��document��,
		//�ȉ��Ńf�X�N�g�b�v��
		itm.Attachments.Item(ii+1).SaveAsFile('../Desktop/'+'�e�X�g�p3'+ii+'.txt');
		
		
	}
	
	//�����擾
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






