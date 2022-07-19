var yearSelect, monthSelect, daySelect, retireSelect;

//year option
var yearVar = document.querySelector(".year");

for (i = 1972; i <= 2006; i++) {
  optionVar = document.createElement("option");
  optionVar.innerText = i;
  yearVar.appendChild(optionVar);
}
var monthVar = document.querySelector(".month");
// select year valu when you change
yearVar.addEventListener("change", function () {
  yearSelect = yearVar.value;
  
// monthVar.click()
if ("createEvent" in document) {
  var evt = document.createEvent("HTMLEvents");
  evt.initEvent("change", false, true);
  monthVar.dispatchEvent(evt);
}
else
monthVar.fireEvent("onchange");
});

//month option

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
    var days = 31;
  } else if (
    monthVar.value == "apr" ||
    monthVar.value == "sep" ||
    monthVar.value == "june" ||
    monthVar.value == "nov"
  ) {
    days = 30;
  } else if (yearVar.value % 4 == 0) {
    days = 29;
  } else {
    days = 28;
  }

  var dayVar = document.querySelector(".days");
  dayVar.innerHTML = "";

  for (j = 1; j <= days; j++) {
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

//submit btn action function
var submitBtnVar = document.querySelector(".submitBtn");
submitBtnVar.addEventListener("click", function () {

  var currentYear = (new Date().getFullYear());
  var yearOfRetire = (~~yearSelect) + (~~retireSelect);
  console.log(yearOfRetire)
  var future = (~~yearOfRetire) - currentYear;  
  var past = currentYear-(~~yearSelect);
  console.log(future,'f');
  console.log(past,'p');

  var redBox = document.querySelector('.pastBox');
// var para;
redBox.innerHTML = '';
  for (i=1;i<=past;i++){
    
    var para = document.createElement('p');
    para.setAttribute('class','redBOxp');
    redBox.appendChild(para);
  }

  for (i=1;i<=future;i++){
     
    para = document.createElement('p');
    para.setAttribute('class','greenBoxp');
    redBox.appendChild(para);
  }
  
});



