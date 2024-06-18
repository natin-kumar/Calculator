const input = document.getElementById('input');
const result = document.getElementById('output');
var exp;
function number(e){
    console.log(e.innerText);
    exp =`${input.value}${ e.innerText}`;
    input.value =exp;
}
function reset()
{
    input.value="";
    result.value="";
}
function resultexp()
{
    result.value=eval(exp);
}