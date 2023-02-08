const button = document.querySelector("button")

const handleClick = () => {
    alert('Ширина дисплея : ' + window.screen.width + '\n' + 'Высота дисплея : ' + window.screen.height)  
}
button.addEventListener("click", handleClick)