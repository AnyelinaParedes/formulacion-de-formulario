let paymentForm = document.querySelector("#paymentForm");
console.log(paymentForm);
paymentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let todoBien = true;
    const form = e.target;

    let soloNumeros = /^[0-9]+$/;
    let checkCvc = /^[0-9]{3,5}$/;
    let soloLetra = /^[a-zA-Z]+$/;

    if (form.card.value === "" || !soloNumeros.test(form.card.value)) {
        todoBien = false;
        form.card.classList.add("is-invalid")
    }
    if (form.cvc.value === "" || !checkCvc.test(form.Cvc.value)) {
        todoBien = false;
        form.cvc.classList.add("is-invalid")
    }
    if (form.amount.value === "" || !soloNumeros.test(form.amount.value)) {
        todoBien = false;
        form.amount.classList.add("is-invalid")
    }

    if (form.firstname.value === "" || !soloLetra.test(form.name.value)) {
        todoBien = false;
        form.firstname.classList.add("is-invalid")
    }
    if (form.lastname.value === "" || !soloLetra.test(form.lastname.value)) {
        todoBien = false;
        form.lastname.classList.add("is-invalid")
    }
    if (form.city.value === "" || !soloLetra.test(form.city.value)) {
        todoBien = false;
        form.city.classList.add("is-invalid")
    }
    if (form.state.value === "" || !soloLetra.test(form.state.value)) {
        todoBien = false;
        form.state.classList.add("is-invalid")
    }
    if (form.postalcode.value === "" || !soloLetra.test(form.postalcode.value)) {
        todoBien = false;
        form.postalcode.classList.add("is-invalid")
    }
    if (form.menssage.value === "" || !soloLetra.test(form.menssage.value)) {
        todoBien = false;
        form.menssage.classList.add("is-invalid")
    }


})