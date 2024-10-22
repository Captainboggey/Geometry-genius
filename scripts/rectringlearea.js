function calculateRectangleArea(){
    const lengthInput = document.getElementById('rectangle-length');
    const lengthText = lengthInput.value;
    const length = parseFloat(lengthText);
    console.log(typeof length)

    // get width of the rectangle
    const widthInput = document.getElementById('rectangle-width');
    const widthText = widthInput.value;
    const width = parseFloat(widthText);
    console.log(typeof width)

    // calculate rectangle area
    const area = length*width;

    const rectangleAreaSpan =document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;


}