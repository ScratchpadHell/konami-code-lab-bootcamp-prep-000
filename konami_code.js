const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init(e) {
 
 let index = 0
 document.body.addEventListener
const key = parseInt(e.detail||e.which);

  if (key === code[index]) {
    index++;
  
    if(index===code.length) {
      alert("Fatality!");
      index = 0;
      }
    } else {
      index = 0;
    }
}

const body = document.getElementById('body')
 
main.addEventListener('click', function(init) {
  alert("Fatality!")
})