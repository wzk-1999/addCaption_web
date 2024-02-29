<?php
//include 'index.js';
$htmlname=$_POST['filename'];
$htmlcontent=$_POST['html'];

// add absolute address prefix /addcaption/
$htmlcontent=str_replace('src="','src="/addcaption/',$htmlcontent);

$writeHtml = fopen($htmlname, 'w+');
fwrite($writeHtml, $htmlcontent);
fclose($writeHtml);

//echo "<a href='{$htmlname}' hidden target='_blank'></a>";


//onclick='removeDownloadSuccessAlert()

//echo $htmlname;
echo "<a href={$htmlname}  target='_blank' id='link' class='alert-link'><strong>here</strong></a>";
