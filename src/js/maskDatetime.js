
let dateInput = document.querySelector("#date_input"); //IMPEDIR ENTRADA DE QUALQUER COISA Q NÃO SEJA NÙMERO
dateInput.addEventListener('input', (evt) => {
  if(evt.data) {
    dateInput.value = dateInput.value.replace(/^(\d{2})$/,'$1/');
    dateInput.value = dateInput.value.replace(/^(\d{2})\/(\d{2})$/,'$1/$2/');
  }
})

let timeInput = document.querySelector("#time_input"); //IMPEDIR ENTRADA DE QUALQUER COISA Q NÃO SEJA NÙMERO
timeInput.addEventListener('input', (evt) => {
  if(evt.data) {
    timeInput.value = timeInput.value.replace(/^(\d{2})$/,'$1:');
  }
})