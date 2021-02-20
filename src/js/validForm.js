var inputs = document.querySelectorAll("input");
var button = document.querySelector("#add_task");

inputs.forEach((input) => {
  input.addEventListener("keyup", () => {
    let isAllFilled = [...inputs].every((input) => input.value);
    button.disabled = !isAllFilled;
  });
});
