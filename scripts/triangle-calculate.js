function calculateTriangleArea(){
    // get triangle base value
    const triangleBaseInput= document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base= parseFloat( triangleBaseText);
    console.log(typeof base);

    // get triangle height
    const triangleHeight=document.getElementById('triangle-height');
    const triangleHeightText = triangleHeight.value;
    const height= parseFloat(triangleHeightText);
    console.log(typeof height);

    const area = 0.5*base*height;
    console.log(area);
    // display triangle area
    const triangleAreaSpan =document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;

}