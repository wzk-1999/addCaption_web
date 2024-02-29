$("#alert_caption_success").addClass("d-none");

if (typeof complete_button === 'undefined'){

    var complete_button=document.getElementById("complete");
}else{
    complete_button=document.getElementById("complete");
}


complete_button.addEventListener("click", completeFunction);

function completeFunction() {
    // console.log("completeFunction has go");

    //remove the subtitle edit elements that add just now

    Object.entries(subtitle).map((entry) => {
        let value = entry[1];

        value.remove();
    });

    // let videoOriginalName = window.location.pathname.split("/").pop();


    // videoOriginalName = videoOriginalName.substring(
    //     0,
    //     videoOriginalName.lastIndexOf(".")
    // );
    // let curDate = new Date();
    //
    // var fileSuffix =
    //     "_" +
    //     curDate.toLocaleDateString("es-CL") +
    //     "_" +
    //     curDate.toTimeString().substring(0, 8).replace(/:/g,"_");
    //
    //
    // let vttFileName = videoOriginalName + fileSuffix;

    // add the vtt file quote

    var vttQuote = document.createElement("track");
    vttQuote.setAttribute("label", "English");
    vttQuote.setAttribute("kind", "subtitles");
    vttQuote.setAttribute("srclang", "en");

    // <?php
    // echo "var vttFileName ='$vttFileName';";
    // ?>

    var vttFileName = '<?=$vttFileName?>';



    var content=localStorage.getItem("caption")
    // console.log(content);

    $.post("createVtt.php",{
            // functionname: "writeVttFile",
            filename:vttFileName,
            arguments: content
            // arguments: "bbb"
        }
        // ,function(data,status){
        //     alert("Data: " + data + "\nStatus: " + status);
        // }
        )

    // var xmlhttp = new XMLHttpRequest();
    // // xmlhttp.onreadystatechange = function() {
    // //     if (this.readyState == 4 && this.status == 200) {
    // //         document.getElementById("txtHint").innerHTML = this.responseText;
    // //     }
    // // };
    // xmlhttp.open("GET", "addCaption_video.php?q=" + localStorage.getItem("caption"), true);
    // xmlhttp.send();


    // $.post("createVtt.php",{
    //        filename:vttFileName
    //     }
    //     ,function(data,status){
    //         // alert("filename successfully conveyed");
    //         alert("Data: " + data + "\nStatus: " + status);
    //     })
    // console.log(vttFileName);
    //
    // console.log(vttFileName);
    //
    // $.get(vttFileName)
    //     .done(function() {
    //         // exists code
    //         console.log("exists");
    //     }).fail(function() {
    //     // not exists code
    //     console.log("not exists");
    // })

    vttQuote.setAttribute("src", `${vttFileName}`);

    vttQuote.default = true;

    // $('.offcanvas-backdrop').remove();

    // $("#video").removeAttr("width height");
    $("#video").removeAttr("height");
    $("#video").attr("width","100%");

    // vttQuote.setAttribute("onerror", `createEleAfterExists()`);
    // vttQuote.onerror="createEleAfterExists()";

    setTimeout(function() {
        currentVideo.appendChild(vttQuote);


        var htmlContent=document.getElementById("container").innerHTML;

        //add head to make it full screen
        htmlContent=`<head>
            <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <link rel="icon" type="image/ico" href="/addcaption/image/favicon_io/favicon.ico">
                        <title>${vttFileName.split(/[/.]+/)[1]}</title>
        </head>\n`+htmlContent;
        // console.log(typeof htmlContent);
        // console.log(htmlContent);

        $("#downloadSuccessLink").load("downloadResult.php",{
                // functionname: "writeVttFile",
                filename:"result/"+vttFileName.split(/[/.]+/)[1]+".html",
                html: htmlContent

                // arguments: "bbb"
            }
            ,function(){
                // alert("download successful, check if explorer has block redirect if can't automatic jump");


                $("#downloadSuccessAlert").removeClass("d-none");

                $("#link").click(
                    function removeDownloadSuccessAlert() {
                        $("#downloadSuccessAlert").remove();
                })

                // document.getElementById("link").click();
            }
        );



        // console.log($("#downloadSuccessAlert a"));
        // $("#link").click();
    }, 2000)







    // var content=localStorage.getItem("caption");
    // window.location.href=`addCaption_video.php?content=${content}`;
    // console.log()




    // localStorage.getItem("caption");

    // var htmlContent = document.body.innerHTML;
    // var bl = new Blob([htmlContent], { type: "text/html" });
    // var a = document.createElement("a");

    //how to add address an url contains chinese characters like "朴树%20-%20清白之年%20(Live特别版)_哔哩哔哩_bilibili.mp4" ?
    // which will cause garbled characters

    // console.log(videoOriginalName);

    // a.href = URL.createObjectURL(bl);
    // a.download = `${videoOriginalName}.html`;
    // a.hidden = true;
    // document.body.appendChild(a);
    // a.innerHTML = "completeOrTempSave";
    // a.click();

    // save the .vtt file
    // chrome.downloads api can't be used in content-script
    // chrome.downloads.download(
    //   {
    //     url: "data:text/vtt," + localStorage.getItem("caption"),
    //     filename: "data.vtt",
    //     conflictAction: "uniquify", // or "overwrite" / "prompt"
    //     saveAs: false, // true gives save-as dialogue
    //   },
    //   function (downloadId) {
    //     console.log("Downloaded item with ID", downloadId);
    //   }
    // );

    // can't use download vtt file? error:
    // Unsafe attempt to load URL file:///C:/add_caption/subtitle.vtt from frame with URL
    // file:///C:/add_caption/add_caption.html. 'file:' URLs are treated as unique security origins.

    // var bl = new Blob([localStorage.getItem("caption")], { type: "text/vtt" });

    // let videoOriginalName = window.location.pathname.split("/").pop();
    // videoOriginalName = videoOriginalName.substring(
    //   0,
    //   videoOriginalName.lastIndexOf(".")
    // );
    // let curDate = new Date();

    // videoOriginalName =
    //   videoOriginalName +
    //   "_" +
    //   curDate.toLocaleDateString() +
    //   "_" +
    //   curDate.toTimeString().substring(0, 8);
    // console.log(videoOriginalName);
    // a.href = URL.createObjectURL(bl);
    //
    // a.download = `${vttFileName}.vtt`;
    // a.hidden = true;

    // a.innerHTML = "saveVttFile";
    // a.target = "_blank";
    // document.body.appendChild(a);
    // a.click();
    localStorage.removeItem("caption");
    // console.log("still go");
}