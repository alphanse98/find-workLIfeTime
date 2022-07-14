var yearVar = document.querySelector(".year");

for (i = 1972; i <= 2006; i++) {
  optionVar = document.createElement("option");
  optionVar.innerText = i;
  yearVar.appendChild(optionVar);
}

var monthVar = document.querySelector(".month");
monthVar.addEventListener('change',function(){
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
  }
  if (yearVar.value % 4 == 0) {
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
    console.log(j);
  }
})

// year not change