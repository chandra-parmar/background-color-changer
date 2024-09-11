let rb= document.querySelector('#redb');
let gb= document.querySelector('#greenb');
let yb= document.querySelector("#yellowb");

let body= document.querySelector('body');

rb.addEventListener("click",function()
{
    body.style.backgroundColor="red";
})

gb.addEventListener('click',function()
{
    body.style.backgroundColor="green";
})

yb.addEventListener('click',function()
{
    body.style.backgroundColor="yellow";
})
