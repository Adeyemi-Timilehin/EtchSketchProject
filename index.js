let canvas = document.getElementById("etchDesign");
let height =Number(document.getElementById("input_height").value);
let width =Number(document.getElementById("input_width").value);
let sizePicker = document.getElementById("sizePicker");
let color = document.getElementById("colorPicker");
let myRow,myColum;
color.addEventListener("mouseover", function(){});
sizePicker.onsubmit = function(event){
    event.preventDefault();
    clearGrid();
    makeGrid();
};

function clearGrid(){
  while (canvas.firstChild){
       canvas.removeChild(canvas.firstChild);
  }
}

function makeGrid(){
for(let i=0;i<height;i++){
  myRow=document.createElement('div');
  myRow.className="Rows";
  for (var j = 0; j < width; j++) {
  myColum=document.createElement('div');
  myColum.className="columns";
  myRow.appendChild(myColum);
  myColum.addEventListener("mouseover", fillSquare);
  }
  canvas.appendChild(myRow)
}
}

function fillSquare () {
  this.setAttribute("style", `background-color: ${color.value}`);
}

