const button = document.querySelector('button');
const input = document.querySelector('input');
button.onclick = function pallindrome() {
    let str = input.value;
    let stringLower = str.toLowerCase();
    let reverse = '';
    for(let i = str.length-1; i >= 0; i--)
    {
        reverse = reverse + s[i];
    }
    if(reverse === stringLower)
        document.getElementById("demo").innerHTML = "String is a pallindrome";
    else
        document.getElementById("demo").innerHTML = "String is not a pallindrome";
}