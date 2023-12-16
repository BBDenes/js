const dartBoardElements = document.getElementsByTagName("path");
console.log(dartBoardElements);
for (const element of dartBoardElements) {
  element.addEventListener('click', (e)=>{
    console.log(element.id)
  });
}

for (const e of document.getElementsByTagName('circle')) {
  e.addEventListener('click', ()=>{
    console.log(e.id)
  });
  
}