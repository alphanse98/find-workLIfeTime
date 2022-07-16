var yearSelect, monthSelect, daySelect, retireSelect;

//year option
var yearVar = document.querySelector(".year");

for (i = 1972; i <= 2006; i++) {
  optionVar = document.createElement("option");
  optionVar.innerText = i;
  yearVar.appendChild(optionVar);
}

// select year valu when you change
yearVar.addEventListener("change", function () {
  yearSelect = yearVar.value;
});

//month option
var monthVar = document.querySelector(".month");
monthVar.addEventListener("change", function () {
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
  } else if (
    monthVar.value == "apr" ||
    monthVar.value == "sep" ||
    monthVar.value == "june" ||
    monthVar.value == "nov"
  ) {
    a = 30;
  } else if (yearVar.value % 4 == 0) {
    a = 29;
  } else {
    console.log(yearVar.value);
    a = 28;
  }

  var dayVar = document.querySelector(".days");
  dayVar.innerHTML = "";

  for (j = 1; j <= a; j++) {
    var dayOption = document.createElement("option");
    dayOption.innerText = j;
    dayVar.appendChild(dayOption);
  }

  dayVar.addEventListener("change", function () {
    daySelect = dayVar.value;
  });
  monthSelect = monthVar.value;
});

var retirementVar = document.querySelector(".Retirement");

for (i = 45; i <= 65; i++) {
  var retirementOptionVar = document.createElement("option");
  retirementOptionVar.innerText = i;
  retirementVar.appendChild(retirementOptionVar);
}

retirementVar.addEventListener("change", function () {
  retireSelect = retirementVar.value;
});

var submitBtnVar = document.querySelector(".submitBtn");
submitBtnVar.addEventListener("click", function () {
  // console.log(retireSelect);
  console.log(yearSelect);
  console.log(monthSelect);
  console.log(daySelect);
});
