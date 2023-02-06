alert("Welcome!")

const toggleButton = () => {
    state.isActiveButton = !state.isActiveButton;
    btn.innerHTML = getButtonText();    
}

const getButtonText = () => `${state.buttonText}&nbsp;&nbsp;&nbsp;${state.isActiveButton ? state.svgElements.active : state.svgElements.inactive}`;

const btn = document.querySelector('button');
btn.innerHTML = getButtonText();
btn.addEventListener('click', _ => toggleButton());