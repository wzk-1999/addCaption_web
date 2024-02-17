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
    console.log("addYourSubtitle");
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
  subtitle.input.type = "text";
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

  subtitle.deleteCurrent = document.createElement("button");
  subtitle.deleteCurrent.innerText = "×";
  subtitle.deleteCurrent.setAttribute("class", "close");
  subtitle.deleteCurrent.setAttribute("data-dismiss", "modal");
  subtitle.deleteCurrent.setAttribute("aria-hidden", "true");
  subtitle.deleteCurrent.setAttribute(
    "style",
    "right:2px;top:-2px;cursor:pointer;display:none;"
  );

  document.body.appendChild(subtitle.inputoverall);
  subtitle.inputoverall.appendChild(subtitle.input);
  subtitle.inputoverall.appendChild(subtitle.deleteCurrent);
  document.body.appendChild(subtitle.submit);
  document.body.appendChild(subtitle.giveUp);

  subtitle.giveUp.addEventListener("click", confirmAndGiveup);
  subtitle.submit.addEventListener("click", submitAndStore);

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

function appendToStorage(name, data) {
  var old = localStorage.getItem(name);
  if (old === null) old = "";
  localStorage.setItem(name, old + data);
}

function submitAndStore() {
  adjustBeginAndEndTime();
  console.log("submitAndStore has go");
  let caption = document.getElementById("inputCaption").value;
  // localStorage.setItem("caption", caption);
  appendToStorage("caption", caption);
}

function adjustBeginAndEndTime() {
  // let startTime = document.createElement("input");
  // startTime.setAttribute("type", "time");
  // startTime.setAttribute("id", "startTime");
  // startTime.setAttribute("step", ".01");

  // startTime.setAttribute("style", "position:relative;margin-top:3rem;");

  // let endTime = document.createElement("input");
  // endTime.setAttribute("type", "time");
  // endTime.setAttribute("id", "endTime");
  // endTime.setAttribute("step", ".01");

  // endTime.setAttribute("style", "position:relative;margin-top:3rem;");

  // document.body.appendChild(startTime);
  // document.body.appendChild(endTime);

  var currentVideo = document.getElementsByTagName("video")[0];

  let startTime = prompt(
    "Please enter start time:\n (format:mi:ss.sss)",
    currentVideo.currentTime - 2
  );
  currentVideo.currentTime = currentTime - 2;
  currentVideo.pause();
  if (startTime != null) {
    appendToStorage("caption", startTime);
  }

  let endTime = prompt(
    "Please enter end time:\n (format:mi:ss.sss)",
    currentVideo.currentTime
  );

  currentVideo.currentTime = currentTime;
  currentVideo.pause();

  if (endTime != null) {
    appendToStorage("caption", endTime);
  }
}
