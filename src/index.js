import "./styles/index.scss";

const inputFirst = document.getElementById("inputFirst");
const inputLast = document.getElementById("inputLast");
const inputEmail = document.getElementById("inputEmail");
const inputPass = document.getElementById("inputPass");
const buttonEl = document.getElementById("login");
const alertFirst = document.getElementById("alert-first");
const alertLast = document.getElementById("alert-last");
const alertEmail = document.getElementById("alert-email");
const alertPass = document.getElementById("alert-pass");
const svgFirst = document.getElementById("svgFirst");
const svgLast = document.getElementById("svgLast");
const svgEmail = document.getElementById("svgEmail");
const svgPass = document.getElementById("svgPass");
const divFirst = document.getElementById("alertFirst");
const divLast = document.getElementById("alertLast");
const divEmail = document.getElementById("alertEmail");
const divPass = document.getElementById("alertPass");

const inputs = [inputFirst, inputLast, inputPass];
const alerts = [alertFirst, alertLast, alertPass];
const svgs = [svgFirst, svgLast, svgPass];
const divs = [divFirst, divLast, divPass];

function manageClassnames(el, operator, classname) {
    el.classList[operator](classname);
}

function validateInput(input, alert, svg, div) {
    let inputEl = input.value;
    if (!inputEl) {
        alert.classList.add('show');
        svg.classList.add('show');
        div.classList.add('error');
    } else {
        alert.classList.remove('show');
        svg.classList.remove('show');
        div.classList.remove('error');
    }

    /* const hasInput = input.value;
    manageClassnames(alert, hasInput ? 'remove' : 'add', 'show')
    manageClassnames(svg, hasInput ? 'remove' : 'add', 'show')
    manageClassnames(div, hasInput ? 'remove' : 'add', 'show') */
}

function validateEmail(email) {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function verificationRender() {
    for (let i = 0; i < 3; i++) {
        validateInput(inputs[i], alerts[i], svgs[i], divs[i]);
    }
    if (validateEmail(inputEmail.value)) {
        alertEmail.classList.remove('show');
        svgEmail.classList.remove('show');
        divEmail.classList.remove('error');
    } else {
        alertEmail.classList.add('show');
        svgEmail.classList.add('show');
        divEmail.classList.add('error');
    }
}

buttonEl.addEventListener("click", verificationRender);