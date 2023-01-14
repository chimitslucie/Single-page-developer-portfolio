const data = {
    'name': /^[a-zA-Z-]+$/,
    'message': /^[a-zA-Z-]+$/,
    'email': /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
};

const button = document.querySelector(".request__btn");

const validateInput = (fieldName) => {
    const input = document.querySelector(`#${fieldName}`);
    const iconFieldName = document.querySelector(`.icon-${fieldName}`);
    const messageFieldName = document.querySelector(`.error-${fieldName}`);
    const regex = data[fieldName];

    if (!input.value.match(regex)) {
        iconFieldName.style.display = "block";
        messageFieldName.style.display = "block";
        input.style.borderBottom = "1px solid var(--red)";
        input.classList.add("active");
    } else {
        iconFieldName.style.display = "none";
        messageFieldName.style.display = "none";
        input.style.borderBottom = "1px solid var(--green)";
        input.classList.remove("active");
    }
}

button.addEventListener("click", (e) => {
    for (const [key] of Object.entries(data)) {
        validateInput(key);
    }
});
