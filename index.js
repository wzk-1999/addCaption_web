// $(document).ready (function(){
//   console.log("has go");
//   $("#alert_caption_success").hide();
//   // $("#myWish").click(function showAlert() {
//   //   $("#success-alert").alert();
//   //   window.setTimeout(function () {
//   //     $("#success-alert").alert('close');
//   //   }, 2000);
//   // });
// });

// function removeDownloadSuccessAlert() {
//   $("#downloadSuccessAlert").remove();
// }
// $(document).ready (function(){
//   // console.log("has go");
//   // $("#alert_caption_success").hide();
//   $("#link").click()
// });

$(document).ready(function () {
  // $(".guide").hide();
  // $(".step[steps=1]").show();
  var currentStep = 1;
  var totalSteps = $(".step").length;

  hideOrShow(currentStep);


  document.getElementById("total_page").innerText=totalSteps;

  // console.log(typeof $(".step"));  //object
  // console.log($(".step").attr('steps'));

  function hideOrShow(step) {
    if (step == 1) {
      $("#previous-step").hide();
    } else if (step == totalSteps) {
      $("#next-step").hide();
    } else if (step == 2) {
      $("#previous-step").show();
      $("#next-step").show();
    }
    $.each($(".step"), function (propName, propVal) {
      if (step != $(propVal).attr("steps")) {
        // console.log(propVal+$(propVal).attr('steps')+"should be hide")
        $(propVal).hide();
      } else if (step == $(propVal).attr("steps")) {
        $(propVal).show();
      }
      // console.log( propName);
      document.getElementById("current_page").innerText=currentStep;
    });
  }

  $("#next-step").click(function () {
    // if (currentStep < totalSteps) {
    //   $('.step[steps="' + currentStep + '"]').hide();
    //   currentStep++;
    //   $('.step[steps="' + currentStep + '"]').show();
    // } else {
    //   $(".guide").hide();
    // }
    currentStep++;

    hideOrShow(currentStep);
  });

  $("#previous-step").click(function () {
    currentStep--;
    hideOrShow(currentStep);
  });

  $("#skip-all").click(function () {
    // console.log("has go")
    $(".guide").hide();
  });
});

const addSubtitle = document.getElementById("add");
// const video = document.getElementById("inputGroupFile04");
const edit = document.getElementById("edit");

var subtitle = {};
subtitle.entire_form=document.getElementsByTagName("form")[0];
subtitle.vttFile=document.getElementById("demo");

subtitle.guide=$(".guide");
// console.log(subtitle.guide)

subtitle.input=document.getElementById("inputCaption");
subtitle.submit=document.getElementById("submit");
subtitle.completeOrTemporarySave=document.getElementById("save");
subtitle.giveUp=document.getElementById("giveUp");
subtitle.startTime=document.getElementById("start_time");
subtitle.endTime=document.getElementById("end_time");
subtitle.startTimeTag=document.getElementById("label_startTime");
subtitle.endTimeTag=document.getElementById("label_endTime");
subtitle.alertTimeInputTag=document.getElementById("alert_time_input");
subtitle.alertCaptionInputTag=document.getElementById("alert_caption_input");
subtitle.alertSaveSuccessTag=document.getElementById("alert_caption_success");

subtitle.downloadSuccessTag=$("#downloadSuccessAlert");

subtitle.script_index=document.getElementById("script_index");
// subtitle.script_completeButton=document.getElementById("script_completeButton");

// console.log(subtitle.script_index);
// console.log(typeof subtitle.script_index);
// console.log(typeof subtitle.alertSaveSuccessTag);
// console.log(subtitle);

let alert_time_close_button=document.getElementById("alert_time_close");
let alert_caption_close_button=document.getElementById("alert_caption_close");

let showVttContent_button=document.getElementById("showVttContent");
let VttContent=document.querySelector("#demo p");



  subtitle.giveUp.addEventListener("click", confirmAndGiveup);
  subtitle.submit.addEventListener("click", submitAndStore);
  subtitle.completeOrTemporarySave.addEventListener(
    "click",
    completeOrTempSave
  );



function show_VttContent() {
  VttContent.innerText=localStorage.getItem("caption");
}

showVttContent_button.addEventListener("click", show_VttContent);


subtitle.startTime.addEventListener("input", jumpAndPauseStartTime);


subtitle.endTime.addEventListener("input", jumpAndPauseEndTime);

alert_time_close_button.addEventListener("click",function (){
  subtitle.alertTimeInputTag.classList.add("d-none");
})
alert_caption_close_button.addEventListener("click",function (){
  subtitle.alertCaptionInputTag.classList.add("d-none");
})

var currentVideo = document.getElementsByTagName("video")[0];

  function convertDecimal(timeInput) {
    // console.log("convertDecimal has go")
   var timeArray=timeInput.split(":");
    // console.log(timeArray)
    // console.log(parseFloat(timeArray[0]),parseFloat(timeArray[1]),parseFloat(timeArray[2]))
    // console.log((parseFloat(timeArray[0])*3600+parseFloat(timeArray[1])*60+parseFloat(timeArray[2])).toFixed(3))
  return (parseFloat(timeArray[0])*3600+parseFloat(timeArray[1])*60+parseFloat(timeArray[2])).toFixed(3);
}

function timeInputValid(value) {
    let result=false;
    if (/^[0-9]{2}:[0-9]{2}:[0-9]{2}\.[0-9]{3}$/.test(value)){
      // console.log("format valid");
      let valueToDecimal=convertDecimal(value)
      if(valueToDecimal<=Math.floor(currentVideo.duration*1000)/1000) {
        // console.log("time valid");
        result=true;
      }
    }
  return result;
}

function jumpAndPauseStartTime() {
  // console.log("timeInput has go");
  // console.log(timeInputValid(subtitle.startTime.value));
    if(timeInputValid(subtitle.startTime.value)){

      // let timeInput=event.target.value;
      let timeInput=subtitle.startTime.value;
      // console.log(timeInput);
      // console.log(convertDecimal(timeInput));
      currentVideo.currentTime = convertDecimal(timeInput);
      currentVideo.pause();

      // if (!subtitle.alertTimeInputTag.classList.contains("d-none")){
      //   subtitle.alertTimeInputTag.classList.add("d-none");
      // }

    }
    // else {
    //   // subtitle.alertTimeInputTag.style.display="block";
    //   subtitle.alertTimeInputTag.classList.remove("d-none");
    // }

}

function jumpAndPauseEndTime() {

  // console.log("timeInput has go");
  // console.log(timeInputValid(subtitle.startTime.value));
  if(timeInputValid(subtitle.endTime.value)){

    // let timeInput=event.target.value;
    let timeInput=subtitle.endTime.value;
    // console.log(timeInput);
    // console.log(convertDecimal(timeInput));
    currentVideo.currentTime = convertDecimal(timeInput);
    currentVideo.pause();

    // if (!subtitle.alertTimeInputTag.classList.contains("d-none")){
    //   subtitle.alertTimeInputTag.classList.add("d-none");
    // }

  }
  // else {
  //   // subtitle.alertTimeInputTag.style.display="block";
  //   subtitle.alertTimeInputTag.classList.remove("d-none");
  // }

}

// console.log(subtitle);
function confirmAndGiveup() {
  // console.log("confirmAndGiveup has go");
  let text =
    "once confirm giveUp, will truncate all substitles you have added and exit, are you sure?";
  if (confirm(text) === true) {
    // delete all elements we have added to this html
    Object.entries(subtitle).map((entry) => {
      let value = entry[1];
      // console.log(entry[1]);
      value.remove();
    });

    // subtitle.remove();
    localStorage.removeItem("caption");
    //delete the local storage
  }
}

function completeOrTempSave() {
  // console.log("completeOrTempSave has go");

  if ( subtitle.input== null || subtitle.input.value.trim().length===0) {
    // alert("you haven't submit any captions, save is senseless");

    subtitle.alertCaptionInputTag.classList.remove("d-none");
    return false;
  }else if(!timeInputValid(subtitle.startTime.value)||!timeInputValid(subtitle.endTime.value)){
    subtitle.alertTimeInputTag.classList.remove("d-none");

    if (!subtitle.alertCaptionInputTag.classList.contains("d-none")){
      subtitle.alertCaptionInputTag.classList.add("d-none");
    }

    return false;
  }else {
    // timeArray[0]=document.getElementById("start_time");
    // timeArray[1]=document.getElementById("end_time");
    if (!subtitle.alertCaptionInputTag.classList.contains("d-none")){
      subtitle.alertCaptionInputTag.classList.add("d-none");
    }

    if (!subtitle.alertTimeInputTag.classList.contains("d-none")){
      subtitle.alertTimeInputTag.classList.add("d-none");
    }


      appendToStorage("caption", "\r\n");
      appendToStorage("caption", subtitle.startTime.value);
      appendToStorage("caption", " --> ");
      appendToStorage("caption", subtitle.endTime.value);
      appendToStorage("caption", "\r\n");


      // localStorage.setItem("caption", caption);
      appendToStorage("caption", subtitle.input.value);
      appendToStorage("caption", "\r\n");

    $("#alert_caption_success").removeClass("d-none");
    setTimeout(function() {
      // $("#alert_caption_success").alert('close');
      $("#alert_caption_success").addClass("d-none");
    }, 2000);

  }

  // judge it's first complete (need add WEBVTT prefix) or save at the previous save basis (do not need to add prefix)

  if (localStorage.getItem("caption").substring(0, 6) !== "WEBVTT") {
    localStorage.setItem(
      "caption",
      "WEBVTT\r\n" + localStorage.getItem("caption")
    );
  }

  // saveFunction();
}



function appendToStorage(name, data) {
  var old = localStorage.getItem(name);
  if (old === null) old = "";
  localStorage.setItem(name, old + data);
}

// var timeArray = [];

function submitAndStore() {

  if (currentVideo.currentTime<2){
    subtitle.startTime.value=convertTimestamp(0.0);
  }else{
    subtitle.startTime.value=convertTimestamp(currentVideo.currentTime - 2);
  }

  jumpAndPauseStartTime();

  if (currentVideo.currentTime+2>Math.floor(currentVideo.duration*1000)/1000){
    subtitle.endTime.value=Math.floor(currentVideo.duration*1000)/1000;
  }else{
    subtitle.endTime.value=convertTimestamp(currentVideo.currentTime + 2);
  }

  jumpAndPauseEndTime();
  // appendToStorage("caption", "\r\n");

  // if (timeArray[0] != null) {
  //   appendToStorage("caption", timeArray[0]);
  // }

  // timeArray[1] = prompt(
  //   "Please enter end time:\n (format:mi:ss.sss)",
  //   convertTimestamp(submitTime)
  // );

  // currentVideo.currentTime = submitTime;
  // currentVideo.pause();

  // appendToStorage("caption", " --> ");

  // if (timeArray[1] != null) {
  //   appendToStorage("caption", timeArray[1]);
  // }

  // appendToStorage("caption", "\r\n");
  // after confirm the start and end time of subtitle, start the video again
  // currentVideo.play();
}

// convert the decimal timestamp to hh:mm:ss.sss format
function convertTimestamp(num) {
  var hours = Math.floor(num / 3600);
  var minutes = Math.floor((num - 3600 * hours) / 60);
  var seconds = Math.floor(num - 3600 * hours - minutes * 60);
  var milliseconds = Math.floor(
    (num - 3600 * hours - minutes * 60 - seconds) * 1000
  );

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (milliseconds < 100 && milliseconds > 9) {
    milliseconds = "0" + milliseconds;
  }
  if (milliseconds < 10) {
    milliseconds = "00" + milliseconds;
  }

  return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
}

// var i = 1;                  //  set your counter to 1

// function createEleAfterExists() {         //  create a loop function
//   var vttQuote=document.getElementsByTagName("track")[0];
//
//   setTimeout(function() {   //  call a 3s setTimeout when the loop is called
//     console.log(i);   //  your code here
//     if (i > 5) {           //  if the counter < 10, call the loop function
//       // createEleAfterExists();             //  ..  again which will trigger another
//       console.log("tried too much, still unavailable");
//       vttQuote.removeAttribute("onerror");
//       return false;
//     }
//     i++;
//     console.log(i);
//     console.log(vttQuote);
//     currentVideo.appendChild(vttQuote);
//     //  increment the counter
//     //  ..  setTimeout()
//   }, 2000)
// }



