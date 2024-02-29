<?php
//include 'createVtt.js';
//var_dump($_POST);
//var_dump($_GET);
//
//echo $_POST["functionname"];
//echo $_POST["arguments"];
//
//echo $_GET["functionname"];
//echo $_GET["arguments"];
//var_dump($_GET);
//var_dump($_FILES);
//include 'addCaption_video.php';

//if( isset($_POST['arguments']) )
//{
//    global $content;

    include 'addCaption_video.php';
    $content= $_POST["arguments"];
    $FileName=$_POST["filename"];
//    echo $FileName;
    var_dump($_POST);
//    echo $vttFileName;
//    echo isset($content) and isset($vttFileName);
    if (isset($content) and isset($FileName))
    {writeVttFile($content,$FileName);};
//    echo $content;
//    echo $vttFileName;

//    echo $content;
//    echo $vttFileName;
//
//
//    switch($_POST["functionname"]){
//
//        case 'writeVttFile':
//            writeVttFile($content);
//        break;
//    }
//}

?>
