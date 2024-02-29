
<!--include 'createVtt.php';-->
<!--echo "aa";-->
<!--if (isset($content))-->
<!--{writeVttFile($content);};-->


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/ico" href="image/favicon_io/favicon.ico"/>
<!--    <link-->
<!--            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"-->
<!--            rel="stylesheet"-->
<!--            integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"-->
<!--            crossorigin="anonymous"-->
<!--    />-->

    <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
    />

<!--    <link rel="stylesheet" href="addCaption_video.css">-->

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>

    <title>add your customized subtitle</title>
</head>
<body class="position-relative">
<div class="guide position-absolute bg-light w-50 rounded px-3 top-50 start-50 translate-middle" style="z-index: 2;list-style-type: none;">
    <div id="button-control">
        <button id="next-step" class="btn btn-primary btn-sm mx-3">
            <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="currentColor"
                    class="bi bi-arrow-right-circle-fill"
                    viewBox="0 0 22 22"
            >
                <path
                        d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
                /></svg
            ><small class="ml-5">Next</small>
        </button>
        <button id="previous-step" class="btn btn-secondary btn-sm mx-3">
            <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="currentColor"
                    class="bi bi-arrow-left-circle-fill"
                    viewBox="0 0 22 22"
            >
                <path
                        d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
                /></svg
            ><small class="ml-5">Last</small>
        </button>
        <button id="skip-all" class="btn btn-success btn-sm mx-3">skip</button>
        <span class="pl-3 fs-3 pt-2 text-warning"><em>beginner wizard</em></span>
        <div class="float-end pt-2 mr-3"><span id="current_page"></span>/ <span id="total_page"></span></div>

    </div>
    <ul id="outerList" class="pt-3">
        <li class="step" steps="1">
            <h3>
                <strong class="text-primary fw-bold">submit</strong>
                <span class="fw-light">
              will help you autofill start and end time
            </span>
            </h3>
            <br />
            <p class="fst-italic">
                start time: <code>current time - 2 seconds</code>
            </p>
            <p class="fst-italic">end time: <code>current time</code></p>
        </li>
        <li class="step" steps="2">
            <h3>
                <span class="fw-light"> when fill in the </span>

                <strong class="text-primary fw-bold">right fromat</strong>

                <span class="fw-light"> and </span>
                <strong class="text-primary fw-bold">valid value</strong>
            </h3>
            <br />
            <p class="fst-italic text-info fs-5 fw-bold">
                video will auto jump into that timestamp and pause
            </p>
            <p class="fst-italic">
                right fromat: <code><strong>hh:mi:ss.sss</strong></code>
            </p>
            <p class="fst-italic">
                valid value: <span class="fw-light"> not exceed video length </span>
            </p>
        </li>

        <li class="step" steps="3">
            <h3>
                <span class="fw-light"> only after click </span>
                <strong class="text-success fw-bold">save</strong>
                <span class="fw-light">
              button, then stored your current subtitle
            </span>
            </h3>
            <br />
            <ul style="list-style-type: square !important">
                <li class="fw-light">
                    start time better not greater than end time
                </li>
                <li class="fw-light" id="hint2">
                    multiple subtitles not to overlap each other
                    <br />
                </li>
                <label for="hint2"
                ><small
                    >you can check it by click
                        <strong class="text-primary fw-bold">open caption file</strong>
                        button</small
                    ></label
                >
            </ul>
            <!-- <p class="fst-italic">

            </p> -->
            <!-- <p class="fst-italic">

            </p> -->
        </li>
    </ul>

</div>

<div class="alert alert-info d-none" role="alert" id="downloadSuccessAlert">
    <h3>download successful!</h3>
    <br>
    click <span id="downloadSuccessLink"></span> to your download result
    <br>
    <small>check if explorer has block redirect if can't automatic jump</small>
</div>
<div
        class="alert alert-warning d-flex align-items-center d-none"
        role="alert"
        id="alert_time_input"
>
    <svg
            width="24"
            height="24"
            fill="currentColor"
            class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
            viewBox="0 0 16 16"
            role="img"
            aria-label="Warning:"
    >
        <path
                d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
        />
    </svg>
    <div class="me-5 pe-5">
        time input should be <code><strong>hh:mi:ss.sss</strong></code> and not
        exceed the video length
    </div>
    <button type="button" class="ms-5 ps-5 bt btn-warning border-0" style="background-color: transparent" id="alert_time_close">&times;</button>
</div>

<div
        class="alert alert-danger d-flex align-items-center d-none"
        role="alert"
        id="alert_caption_input"
>
    <svg
            width="24"
            height="24"
            fill="currentColor"
            class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
            viewBox="0 0 16 16"
            role="img"
            aria-label="danger:"
    >
        <path
                d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
        />
    </svg>
    <div class="me-5 pe-5">
        you haven't submit any captions, save is senseless
    </div>
    <button type="button" class="ms-5 ps-5 bt btn-danger border-0" style="background-color: transparent" id="alert_caption_close">&times;</button>
</div>

<div class="alert alert-success d-flex align-items-center" role="alert" id="alert_caption_success">
    <svg
            class="bi flex-shrink-0 me-2"
            width="24"
            height="24"
            role="img"
            aria-label="Success:"
            viewBox="0 0 16 16"
            fill="currentColor"
    >
        <path
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
        />
    </svg>
    <div>this subtitle has been successfully saved</div>
</div>

<div class="position-relative" id="container">
<form class="position-absolute top-0" style="z-index: 1; width: 80%">
    <div class="form-group">
        <input
                type="search"
                class="form-control mb-2"
                id="inputCaption"
                placeholder="Type customized subtitle"
        />
    </div>

    <div class="form-row row">
        <div class="form-group col-sm-1">
            <button type="button" class="btn btn-primary btn-sm mx-2 px-2" id="submit">
                submit
            </button>
        </div>
        <div class="form-group col-sm-1">
            <button type="button" class="btn btn-success btn-sm mx-2 px-2" id="save">
                save
            </button>
        </div>
        <div class="form-group col-sm-1">
            <button type="button" class="btn btn-danger btn-sm mx-2 px-2" id="giveUp">
                give up
            </button>
        </div>
        <div class="form-group col-sm-2">
        <button
                class="btn btn-primary btn-sm"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#demo"
                id="showVttContent"
        >
            open caption file
        </button>
        </div>

        <div class="form-group col-sm-1">
            <label
                    for="start_time"
                    class="small bg-info text-dark rounded-3 shadow"
                    id="label_startTime"
            ><i>start time:</i>
            </label>
        </div>
        <div class="form-group col-sm-2 mr-3 pr-3">
            <input type="text" class="form-control" id="start_time" />
        </div>
        <div class="form-group col-sm-1 ml-3 pl-3">
            <label
                    for="end_time"
                    class="small bg-info text-dark rounded-3 shadow"
                    id="label_endTime"
            ><i>end time:</i></label
            >
        </div>
        <div class="form-group col-sm-2">
            <input type="text" class="form-control" id="end_time" />
        </div>
    </div>
</form>

<?php
$uploaddir = 'upload/video/';
$uploadfile = $uploaddir . basename($_FILES['video']['name']);

$position= strpos(basename($_FILES['video']['name']), ".");

$fileextension = substr(basename($_FILES['video']['name']), $position + 1);

// echo '<pre>';
if (move_uploaded_file($_FILES['video']['tmp_name'], $uploadfile)) {
    // echo "File is valid, and was successfully uploaded.\n";

    // echo 'src="'.$uploadfile.'"';
    echo '<video width="80%" height="80%" id="video" class="d-block" controls>
        <source src=' . $uploadfile . ' type="video/' . $fileextension . '">
        <p>Your user agent does not support the HTML5 Video element.</p>
        </video>
        </div>';
}
// else {
//     echo "Possible file upload attack!\n";
// }

// echo 'Here is some more debugging info:';
// print_r($_FILES);
global $position;

global $videoOriginalName;

global $vttFileName;

date_default_timezone_set("America/New_York");
$videoOriginalName = substr(basename($_FILES['video']['name']), 0,$position).date("_d_m_Y_H_i_s");
$vttFileName='vtt/'.$videoOriginalName.'.vtt';

//var_dump($_FILES);
//echo $vttFileName;
// print "</pre>";
function writeVttFile($content,$vttFileName)
{


    $writeFile = fopen($vttFileName, 'w+');
    fwrite($writeFile, $content);
    fclose($writeFile);

//    return $vttFileName;

}



//        echo $vttFileName;

//        writeVttFile();


//if( isset($_POST['arguments']) )
//{
//
//    $content= $_POST["arguments"];
//
////    echo $content;
////    echo $vttFileName;
////
////
////    switch($_POST["functionname"]){
////
////        case 'writeVttFile':
////            writeVttFile($content);
////        break;
////    }
//}


?>

    <div class="offcanvas offcanvas-end" id="demo">
        <div class="offcanvas-header">
            <h2 class="offcanvas-title">your caption</h2>
            <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="offcanvas"
            ></button>
        </div>
        <div class="offcanvas-body">
            <p></p>

            <button class="btn btn-success mb-3" type="button" id="complete">
                complete
            </button>
        </div>
    </div>


    <script src="index.js" id="script_index"></script>
<!--    <script src="createVtt.js"></script>-->
<!--    <script src="completeButton.js"></script>-->

    <script id="script_completeButton">
        <?php
        include 'completeButton.js';
        ?>
    </script>



<!--//echo writeVttFile(1,2);-->
<!--//echo $vttFileName;-->
<!--//include 'completeButton.js';-->
<!--//writeVttFile($echo "<script>document.writeln(content);</script>";);-->
<!--//$content=$_GET["content"];-->
<!--//echo $content;-->
<!---->
<!---->
<!--//if( isset($_POST['arguments']) )-->
<!--//{-->
<!--//    $content = $_POST["arguments"];-->
<!--//-->
<!--//    echo $content;-->
<!--//    echo $vttFileName;-->
<!--//-->
<!--//-->
<!--//    switch($_POST["functionname"]){-->
<!--//-->
<!--//        case 'writeVttFile':-->
<!--//            writeVttFile($content);-->
<!--//        break;-->
<!--//    }-->
<!--//}-->
<!---->
<!--//    writeVttFile("shide");-->
<!---->
<!--// get the q parameter from URL-->
<!---->
<!--//var_dump($_FILES);-->
<!--//var_dump($_REQUEST);-->
<!--//var_dump($_POST);-->
<!---->
<!--//$content = $_REQUEST["q"];-->
<!--//-->
<!--//writeVttFile($content);-->






</body>
</html>