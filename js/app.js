let body = document.querySelector('body');



createForm();
let form = document.querySelector('form');
for (let i = 0; i < 5; i++) {
    form.appendChild(createInput());
}
createSubmit();

// в контексте этой функции я не знаю как по другому вставить элемент submit
let submit = document.querySelector('.submit');

form.addEventListener("submit", function(event) {
    event.preventDefault();
    form.insertBefore(createInput(), submit);


});

// Зачем вешать "onclik" на каждую кнопку, если я могу его отловить по событию ?
// Если появиться еще одна кнопка я ее просто добавлю в функцию и не надо будет придумывать еще функцию

form.addEventListener("click", function(event) {
    let target = event.targrt
    console.log(event.target.className);
    if (event.target.className === "edit") {
        console.log("edit")
        event.target.previousElementSibling.value = prompt("введите имя");
    }
    if (event.target.className === "delete") {

        let res = confirm("вы уверены ?");
        if (res != true) {
            return event.target
        }
        if (res == true) {
            event.target.parentNode.remove();
        }

    }

});