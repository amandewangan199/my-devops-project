function changeColor() {
    const colors = ['#282c34', '#333', '#000', '#1a1a1a'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
    document.getElementById("demo-text").innerText = "JavaScript is Working!";
}
