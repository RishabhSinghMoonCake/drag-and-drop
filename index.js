let lists = document.getElementsByClassName('list');
let rightBox = document.getElementById('right');
let leftBox = document.getElementById('left');
let selected = null;

for(let list of lists)
{
  list.addEventListener('dragstart', (event)=>{
    selected = event.target;
    

  });
}

rightBox.addEventListener('dragover', (event)=>{
  event.preventDefault();
});
rightBox.addEventListener('drop' , (event)=>{
  if(selected)
  {
    rightBox.appendChild(selected);
    selected = null;
  }
  
});
leftBox.addEventListener('dragover', (event)=>{
  event.preventDefault();
});
leftBox.addEventListener('drop' , (event)=>{
  if (selected) 
  {
    leftBox.appendChild(selected);
    selected = null;
  }
});