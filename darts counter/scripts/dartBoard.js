const dartBoardElements = document.getElementsByTagName("path");
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