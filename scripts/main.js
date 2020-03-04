const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World!';

const button = document.querySelector('button');
const input = document.querySelector('input');
button.onclick = function() {
    let str = input.value;
    let l = str.length;
    let s = str.toLowerCase();
    let i;
    let rev = '';
    for(i = l-1; i >= 0; i--)
    {
        rev = rev + s[i];
    }
    if(rev == s)
        document.getElementById("demo").innerHTML = "String is a pallindrome";
    else
        document.getElementById("demo").innerHTML = "String is not a pallindrome";
}