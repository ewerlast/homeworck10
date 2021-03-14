let body = document.querySelector('body');



createForm();
let form = document.querySelector('form');
for (let i = 0; i < 5; i++) {
    createInput()
}
createSubmit();
let submit = document.querySelector('.submit');

form.addEventListener("submit", function(event) {
    event.preventDefault();
    form.insertBefore(createInput(), submit);


});
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


})