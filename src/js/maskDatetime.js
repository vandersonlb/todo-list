let dateInput = document.querySelector("#date_input");
dateInput.addEventListener("input", (evt) => {
  //if (Number.isNaN(parseInt(evt.data))) dateInput.value = dateInput.value.slice(0, -1);
  if (/\D/.test(evt.data) && evt.data)
    dateInput.value = dateInput.value.slice(0, -1);
  if (evt.data) {
    dateInput.value = dateInput.value.replace(/^(\d{2})$/, "$1/");
    dateInput.value = dateInput.value.replace(/^(\d{2})(?:\/)?(\d{2})$/, "$1/$2/");
  }
});

let timeInput = document.querySelector("#time_input");
timeInput.addEventListener("input", (evt) => {
  // if (Number.isNaN(parseInt(evt.data))) timeInput.value = timeInput.value.slice(0, -1);
  if (/\D/.test(evt.data) && evt.data) 
    timeInput.value = timeInput.value.slice(0, -1);
  if (evt.data)
    timeInput.value = timeInput.value.replace(/^(\d{2})$/, "$1:");
});

/** 
 * PS.: Não tem validação se data e/ou hora é válido
 * **/ 