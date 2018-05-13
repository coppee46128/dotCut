<?php
if(!empty($_POST["add"])){
	$str="";
	$lines=file(__FILE__);
	foreach($lines as $line){
		if($line == '<!--????-->'.PHP_EOL){
			$str=$str."<b>".$_POST["add"]."</b><br>".PHP_EOL;
			$str=$str.'<!--????-->'.PHP_EOL;
		}
		else{
			$str=$str.$line;
		}
	}
	
	$f=fopen(__FILE__,"w");
	flock($f,LOCK_EX);
	fwrite($f,$str);
	flock($f,LOCK_UN);
	fclose($f);
	
	echo __FILE__;
}

?>

<html>
<head>
<meta charset="utf-8">
<meta http-equiv="Pragma" content="no-cache">
<meta http-equiv="Cache-Control" content="no-cache">

<style>
body{
background-color:lightyellow;
}
</style>

</head>
<body>

<div class="c ww r" ><!--いちばん外-->
<hr><!------------------------------------------------------->
<form action="" method="post">
<input type="text" name="add" size="40" id="text">
<input type="submit" value="送信"><br>
<?php echo '<a href="">self</a>'; ?>
</form>



<hr><!------------------------------------------------------->
<!---->
ts1<br>
tes2<br>
tes3<br>
<b>tes4</b><br>
<!--????-->
<!---->
<hr><!------------------------------------------------------->
<?php echo '<a href="">self</a>'; ?>
</div><!--いちばん外-->
</body>
</html>
