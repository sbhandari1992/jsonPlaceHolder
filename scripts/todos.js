let inputElement = document.getElementById("inputElement");
let btnElement = document.getElementById("clickBtn");
let outputDiv = document.getElementById("outputDiv");
btnElement.addEventListener("click", myFunction);

function myFunction() {
  let inputId = inputElement.value;
  fetch(`https://jsonplaceholder.typicode.com/todos/${inputId}`)
    .then((response) => response.json())

    .then((data) => {
        let answer = data.completed == true ? 'completed' : 'not completed';
      outputDiv.innerHTML = `ID ${data.id} with title name "${data.title}" is ${answer}.`;
    });
}
