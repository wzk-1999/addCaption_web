const addSubtitle = document.getElementById("add");
// const video = document.getElementById("inputGroupFile04");
const edit = document.getElementById("edit");

// console.log(edit);
// console.log(input);
// console.log(addSubtitle);
// console.log("index.js go");

// edit.addEventListener("click", function () {
//   console.log("extension go");
//   // localStorage.setItem("video", video);
//   input.placeholder = "Type customized subtitle";
//   input.type = "text";
// });

//create a switch button
// let choose = document.createElement("label");

// // choose.class = "switch"; can't set class by this way, I don't know why?

// choose.setAttribute("class", "switch");

// let switchButton = document.createElement("input");
// switchButton.type = "checkbox";
// // console.log(choose.getAttribute("class"));
// // console.log(switchButton.getAttribute("type"));

// let span = document.createElement("span");
// span.innerText = "edit or close";
// span.setAttribute("class", "slider round");

// choose.appendChild(switchButton);
// choose.appendChild(span);
// document.body.appendChild(choose);

// const selector1 = document.querySelector(".switch");
// selector1.style.cssText += `position: relative;
//                             display: inline-block;
//                             width: 100px;
//                             height: 34px;`;

// const selector2 = document.querySelector(".slider");
// selector2.style.cssText += `position: absolute;
//                             cursor: pointer;
//                             top: 0;
//                             left: 0;
//                             right: 0;
//                             bottom: 0;
//                             background-color: #ccc;
//                             -webkit-transition: 0.4s;
//                             transition: 0.4s;
//                             color:write
//                             display: flex;
//                             justify-content: center;
//                             align-items: center;`;

// // const selector3 = document.querySelector(".slider:before");
// // selector3.style.cssText += `position: absolute;
// //                           content: "";
// //                           height: 26px;
// //                           width: 26px;
// //                           left: 4px;
// //                           bottom: 4px;
// //                           background-color: white;
// //                           -webkit-transition: 0.4s;
// //                           transition: 0.4s;`;

// const selector4 = document.querySelector(".slider.round");
// selector4.style.cssText += `border-radius: 34px;`;

// // const selector5 = document.querySelector(".slider.round:before");
// // selector5.style.cssText += `border-radius: 50%;`;

// const selector6 = document.querySelector(".switch input");
// selector6.style.cssText += `opacity: 0;
//   width: 0;
//   height: 0;`;

// const selector7 = document.querySelector("input:checked + .slider");
// selector7.style.cssText += `background-color: #2196f3;`;

// const selector8 = document.querySelector("input:focus + .slider");
// selector8.style.cssText += `box-shadow: 0 0 1px #2196f3;`;

// const selector9 = document.querySelector("input:checked + .slider:before");
// selector9.style.cssText += `-webkit-transform: translateX(26px);
//   -ms-transform: translateX(26px);
//   transform: translateX(26px);`;

// Create new link Element
let link = document.createElement("link");

let scrBootstrap = document.createElement("script");
let scrPopper = document.createElement("script");

// set the attributes for link element
link.rel = "stylesheet";
link.href =
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css";

scrBootstrap.src = "bootstrap.js";
scrPopper.src = "popper.js";

// Get HTML head element to append
// link element to it
document.getElementsByTagName("HEAD")[0].appendChild(link);
document.getElementsByTagName("HEAD")[0].appendChild(scrPopper);
document.getElementsByTagName("HEAD")[0].appendChild(scrBootstrap);

let div = document.createElement("div");
let switchButton = document.createElement("input");
let label = document.createElement("label");

div.setAttribute("class", "form-check form-switch");

switchButton.setAttribute("class", "form-check-input");
switchButton.setAttribute("type", "checkbox");
switchButton.setAttribute("role", "switch");
switchButton.setAttribute("id", "flexSwitchCheckDefault");

label.innerText = "edit or close";
label.setAttribute("class", "form-check-label");
label.setAttribute("for", "flexSwitchCheckDefault");

div.appendChild(switchButton);
div.appendChild(label);
document.body.appendChild(div);

const butPosition = document.querySelector(".form-check");
butPosition.style.cssText += `position: fixed;
                          top:0;
                          left: 4px;`;

// make the hint phrase visable in any background color?

//get the specific fixed area's backgroundcolor?
//let myDivObjBgColor = window.getComputedStyle(myDivObj).backgroundColor;

//select a obvious different color with background color as the hint phrase
//what's the match relation, how to accomplish these background color and front color mapping?

const labelColor = document.querySelector(".form-check-label");
labelColor.style.cssText += `text-shadow:
                              0.07em 0 black;
                              0 0.07em black;
                              -0.07em 0 black;
                              0 -0.07em black;`;

// why in some website, the click or change event didn't trigger even I have clicked the checked button
// like https://www.bilibili.com/
switchButton.addEventListener("change", switchBtn);

function closeThisFunction() {
  div.remove();
  console.log(div);
  console.log(subtitle.input);
  subtitle.input.remove();
}

function switchBtn() {
  if (switchButton.checked) {
    addYourSubtitle();
    // console.log("addYourSubtitle");
  } else {
    closeThisFunction();
    console.log("closeThisFunction");
  }
}

var subtitle = {};

function addYourSubtitle() {
  div.remove();

  subtitle.inputoverall = document.createElement("div");
  subtitle.inputoverall.setAttribute(
    "style",
    "display:inline-block;position:relative;"
  );

  subtitle.input = document.createElement("input");
  subtitle.input.placeholder = "Type customized subtitle";
  subtitle.input.type = "search";
  subtitle.input.id = "inputCaption";
  subtitle.input.setAttribute(
    "style",
    "padding: 10px 10px 10px 10px;width: 100%;box-sizing: border-box;border: 1px solid rgb(32, 239, 32);position:fixed;top:0;left: 4px;"
  );

  subtitle.submit = document.createElement("button");
  subtitle.submit.innerText = "submit";
  subtitle.submit.setAttribute(
    "style",
    "position:relative;margin-top:3.5rem;margin-left:4px;color:white;background-color:green;border-radius: 12px;"
  );

  subtitle.giveUp = document.createElement("button");
  subtitle.giveUp.innerText = "give up";
  subtitle.giveUp.setAttribute(
    "style",
    "position:relative;margin-top:3.5rem;margin-left:3rem;color:red;background-color:Aquamarine;border-radius: 12px;"
  );

  // why I can't set the clear small button in the right of the input box?
  // just use the search input type instead

  //   subtitle.deleteCurrent = document.createElement("button");
  //   // subtitle.deleteCurrent.innerText = "×";
  //   subtitle.deleteCurrent.innerHtml = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
  //   <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
  // </svg>`;
  //   subtitle.deleteCurrent.setAttribute("class", "close");
  //   subtitle.deleteCurrent.setAttribute("data-dismiss", "modal");
  //   subtitle.deleteCurrent.setAttribute("aria-hidden", "true");
  //   subtitle.deleteCurrent.setAttribute(
  //     "style",
  //     "right:2px;top:-2px;cursor:pointer;display:none;"
  //   );

  subtitle.completeOrTemporarySave = document.createElement("button");
  subtitle.completeOrTemporarySave.innerText = "save";
  subtitle.completeOrTemporarySave.setAttribute(
    "style",
    "position:relative;margin-top:3.5rem;margin-left:3rem;color:black;background-color:azure;border-radius: 12px;"
  );

  document.body.appendChild(subtitle.inputoverall);
  subtitle.inputoverall.appendChild(subtitle.input);
  // subtitle.inputoverall.appendChild(subtitle.deleteCurrent);
  document.body.appendChild(subtitle.submit);
  document.body.appendChild(subtitle.giveUp);
  document.body.appendChild(subtitle.completeOrTemporarySave);

  subtitle.giveUp.addEventListener("click", confirmAndGiveup);
  subtitle.submit.addEventListener("click", submitAndStore);
  subtitle.completeOrTemporarySave.addEventListener(
    "click",
    completeOrTempSave
  );

  // console.log(typeof subtitle); object
  // console.log(subtitle);

  //try to use z-index to make all elements in subtitle always in greater stack order before original html
  Object.entries(subtitle).map((entry) => {
    // let key = entry[0];
    let value = entry[1];
    // console.log(key);
    // console.log(typeof key);
    // console.log(typeof value);
    // console.log(typeof `${key}`);

    value.style["z-index"] = "999";
    // value.style.cssText += `position: fixed;`;
    // value.style.cssText += `z-index:999;`;
  });
  // for (elt of subtitle) {
  //   elt.style["z-index"] = "999";
  // }
}

function confirmAndGiveup() {
  // console.log("confirmAndGiveup has go");
  let text =
    "once confirm giveUp, will truncate all substitles you have added and exit, are you sure?";
  if (confirm(text) == true) {
    // delete all elements we have added to this html

    Object.entries(subtitle).map((entry) => {
      let value = entry[1];

      value.remove();
    });

    // subtitle.remove();
    localStorage.removeItem("caption");
    //delete the local storage
  } else {
  }
}

function completeOrTempSave() {
  // console.log("completeOrTempSave has go");

  if (localStorage.getItem("caption") === null) {
    alert("you haven't submit any captions, save is senseless");
    return false;
  }

  // judge it's first complete (need add WEBVTT prefix) or save at the previous save basis (do not need add prefix)

  if (localStorage.getItem("caption").substring(0, 6) != "WEBVTT") {
    localStorage.setItem(
      "caption",
      "WEBVTT\r\n" + localStorage.getItem("caption")
    );
  }

  saveFunction();
}

function saveFunction() {
  // console.log("saveFunction has go");

  //remove the subtitle edit elements that add just now

  Object.entries(subtitle).map((entry) => {
    let value = entry[1];

    value.remove();
  });

  let videoOriginalName = window.location.pathname.split("/").pop();
  videoOriginalName = videoOriginalName.substring(
    0,
    videoOriginalName.lastIndexOf(".")
  );
  let curDate = new Date();

  var fileSuffix =
    "_" +
    curDate.toLocaleDateString("es-CL") +
    "_" +
    curDate.toTimeString().substring(0, 8);

  videoOriginalName = videoOriginalName + fileSuffix;

  let vttFileName = "caption" + fileSuffix;

  // add the vtt file quote

  let vttQuote = document.createElement("track");
  vttQuote.setAttribute("label", "English");
  vttQuote.setAttribute("kind", "subtitles");
  vttQuote.setAttribute("srclang", "en");

  vttQuote.setAttribute("src", `${vttFileName}.vtt`);

  vttQuote;
  vttQuote.default = true;

  document.getElementsByTagName("video")[0].appendChild(vttQuote);

  localStorage.getItem("caption");

  var htmlContent = document.body.innerHTML;
  var bl = new Blob([htmlContent], { type: "text/html" });
  var a = document.createElement("a");

  //how to add address a url contains chinese characters like "朴树%20-%20清白之年%20(Live特别版)_哔哩哔哩_bilibili.mp4" ?
  // which will cause garbled characters

  // console.log(videoOriginalName);
  a.href = URL.createObjectURL(bl);
  a.download = `${videoOriginalName}.html`;
  a.hidden = true;
  document.body.appendChild(a);
  a.innerHTML = "completeOrTempSave";
  a.click();

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

  bl = new Blob([localStorage.getItem("caption")], { type: "text/vtt" });

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
  a.href = URL.createObjectURL(bl);

  a.download = `${vttFileName}.vtt`;

  a.innerHTML = "saveVttFile";
  // a.target = "_blank";
  a.click();

  localStorage.removeItem("caption");
}

function appendToStorage(name, data) {
  var old = localStorage.getItem(name);
  if (old === null) old = "";
  localStorage.setItem(name, old + data);
}

var timeArray = [];

function submitAndStore() {
  // only start time and end time both been set , then can add the caption content and the "-->" mark

  // set begin time and end time in to time array
  adjustBeginAndEndtime();
  if (timeArray[0] != null && timeArray[1] != null) {
    appendToStorage("caption", "\r\n");
    appendToStorage("caption", timeArray[0]);
    appendToStorage("caption", " --> ");
    appendToStorage("caption", timeArray[1]);
    appendToStorage("caption", "\r\n");

    let caption = document.getElementById("inputCaption").value;
    // localStorage.setItem("caption", caption);
    appendToStorage("caption", caption);
    appendToStorage("caption", "\r\n");
  }

  // console.log("submitAndStore has go");
}

function adjustBeginAndEndtime() {
  // let timeArray[0] = document.createElement("input");
  // timeArray[0].setAttribute("type", "time");
  // timeArray[0].setAttribute("id", "timeArray[0]");
  // timeArray[0].setAttribute("step", ".01");

  // timeArray[0].setAttribute("style", "position:relative;margin-top:3rem;");

  // let timeArray[1] = document.createElement("input");
  // timeArray[1].setAttribute("type", "time");
  // timeArray[1].setAttribute("id", "timeArray[1]");
  // timeArray[1].setAttribute("step", ".01");

  // timeArray[1].setAttribute("style", "position:relative;margin-top:3rem;");

  // document.body.appendChild(timeArray[0]);
  // document.body.appendChild(timeArray[1]);

  var currentVideo = document.getElementsByTagName("video")[0];

  timeArray[0] = prompt(
    "Please enter start time:\n (format:mi:ss.sss)",
    convertTimestamp(currentVideo.currentTime - 2)
  );

  // console.log(currentVideo.currentTime);
  // console.log(currentVideo.currentTime - 2);

  // record the currentTime :
  var submitTime = currentVideo.currentTime;

  currentVideo.currentTime = currentVideo.currentTime - 2;
  currentVideo.pause();

  // appendToStorage("caption", "\r\n");

  // if (timeArray[0] != null) {
  //   appendToStorage("caption", timeArray[0]);
  // }

  timeArray[1] = prompt(
    "Please enter end time:\n (format:mi:ss.sss)",
    convertTimestamp(submitTime)
  );

  currentVideo.currentTime = submitTime;
  currentVideo.pause();

  // appendToStorage("caption", " --> ");

  // if (timeArray[1] != null) {
  //   appendToStorage("caption", timeArray[1]);
  // }

  // appendToStorage("caption", "\r\n");
  // after confirm the start and end time of subtitle, start the video again
  currentVideo.play();
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
