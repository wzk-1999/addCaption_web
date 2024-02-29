
$(document).ready(function () {
      // console.log("has go");
    // $("#alert_caption_success").css("background-color", "yellow");

  // $("#alert_caption_success").hide();
  //   The only reason for display: none (jquery hide()); not to be working is, if it's overwritten by other CSS with higher precedence.
  //   Check if you are using a CSS library like Bootstrap or TailwindCSS that could be overwriting your display: none; rule.

  //   $("#alert_caption_success").css("display","none !important")

   $("#alert_caption_success").addClass("d-none");



  // $("#inputCaption").hide();
    // $("#complete").css("background-color", "yellow");
    $("#complete").click(function () {
        // console.log("createVtt click has go");
        // $.ajax({
        //     method: "POST",
        //     // url: "createVtt.php",
        //     url: "addCaption_video.php",
        //     // data: { content:localStorage.getItem("caption")}
        //     data: {
        //         functionname: "writeVttFile",
        //         arguments: localStorage.getItem("caption")
        //         // arguments: 1
        //     }
        //     ,
        //     success: function(response) {
        //         console.log(response);
        //         // alert ('Response from PHP script: ');
        //     },error: function(xhr) {
        //
        //         alert( 'Query failed, php script returned this status: ');
        //
        //     }
        //
        // });
        var content=localStorage.getItem("caption")
        // console.log(content);

        $.post("createVtt.php",{
                    functionname: "writeVttFile",
                    arguments: content
                    // arguments: "bbb"
                }
                ,function(data,status){
            alert("Data: " + data + "\nStatus: " + status);
        })

        // var xmlhttp = new XMLHttpRequest();
        // // xmlhttp.onreadystatechange = function() {
        // //     if (this.readyState == 4 && this.status == 200) {
        // //         document.getElementById("txtHint").innerHTML = this.responseText;
        // //     }
        // // };
        // xmlhttp.open("GET", "addCaption_video.php?q=" + localStorage.getItem("caption"), true);
        // xmlhttp.send();

        localStorage.removeItem("caption");

    });
});
