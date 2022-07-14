var selectionVar = document.createElement("select");
for (i = 1972; i <= 2006; i++) {
  optionVar = document.createElement("option");
  optionVar.innerText = i;
  selectionVar.appendChild(optionVar);
}
// console.log(selectionVar)
var yearVar = document.querySelector(".year");
yearVar.appendChild(selectionVar);

// select month
var monthVar = document.querySelector(".month");

monthFuc = () => {
  if (
    monthVar.value == "mar" ||
    monthVar.value == "aug" ||
    monthVar.value == "jan" ||
    monthVar.value == "may" ||
    monthVar.value == "july" ||
    monthVar.value == "oct" ||
    monthVar.value == "dec"
  ) {
    var a = 31;
    // console.log(monthVar.value);
  } else if (monthVar.value == "feb") {
    a = 28;
  } else if (
    monthVar.value == "apr" ||
    monthVar.value == "sep" ||
    monthVar.value == "june" ||
    monthVar.value == "nov"
  ) {
    a = 30;
  }
  for (j = 1; j <= a; j++) {
    var dayOption = document.createElement("option");
    var dayVar = document.querySelector(".days");
    dayOption.innerText = j;
    dayVar.appendChild(dayOption);
  }
};

// console.log(monthFUC())

// monthVar.addEventListener('click',function(){
//     console.log(monthVar.innerText)
// })
