modeToggleFlag = false;

const modeToggle = () => {
    if (modeToggleFlag === false) {
        enableDarkMode();
        modeToggleFlag = true;
    } else {
        enableLightMode();
        modeToggleFlag = false;
    }
};

const enableLightMode = () => {
    let background = document.querySelector("body").classList;
    background.remove("bg-black");
    background.remove("text-white");
    background.add("text-black");
    let buttons = document.querySelectorAll("button");
    buttons[0].textContent = "Dark Mode";
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("bg-white");
        buttons[i].classList.remove("text-gray-800");
        buttons[i].classList.add("bg-black");
    }

    let cart = document.querySelectorAll(".cart-box");
    for (let i = 0; i < cart.length; i++) {
        let childDiv = cart[i].querySelector('div');
        let childH2 = cart[i].querySelector('h2');
        childH2.classList.add("text-indigo-500");
        childH2.classList.remove("text-amber-300");
        childDiv.classList.add("bg-white");
        childDiv.classList.remove("bg-gray-800");
    }
};

const enableDarkMode = () => {
    let background = document.querySelector("body").classList;
    background.add("bg-black");
    background.add("text-white");
    background.remove("text-black");
    let buttons = document.querySelectorAll("button");
    buttons[0].textContent = "Light Mode";
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.add("bg-white");
        buttons[i].classList.add("text-gray-800");
        buttons[i].classList.remove("bg-black");
    }

    let cart = document.querySelectorAll(".cart-box");
    for (let i = 0; i < cart.length; i++) {
        let childDiv = cart[i].querySelector('div');
        let childH2 = cart[i].querySelector('h2');
        childH2.classList.remove("text-indigo-500");
        childH2.classList.add("text-amber-300");
        childDiv.classList.remove("bg-white");
        childDiv.classList.add("bg-gray-800");
    }
}
