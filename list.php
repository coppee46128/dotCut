<?php 



$getdir = isset($_GET["dir"]) ? $_GET["dir"] : NULL;


echo "<br>";

$dir=scandir("./" . $getdir);

foreach($dir as $key => $file){
	
	if(!(($file == ".")||($file == ".."))){
		if(is_file("./" . $getdir . $file)){
			
			$link="http://localhost:60" . "/" . $getdir . $file;
			
			echo '<a href="'. $link .'">'.$file.'</a><br>';
		}
		else if(is_dir("./" . $getdir . $file)){
			
			$link="list.php?dir=" . $getdir . $file . "/";
			
			echo '<a href="'. $link .'"><b>'.$file.'</b></a><br>';
		}
	}
}



