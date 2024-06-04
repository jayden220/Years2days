let input = document.querySelectorAll('input')[0]
let convert = document.querySelectorAll('button')[0]
let answer = document.getElementsByClassName('days')[0]

convert.addEventListener('click', convertVal)


function convertVal() {
   let days = input.value * 356 
   answer.innerHTML = `${days} days`
}