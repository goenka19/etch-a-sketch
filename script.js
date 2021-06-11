console.log("HELLO");
var container = document.querySelector(".container");
var counter =1;
var size = 16;
var color1 = 'pink'
var num = 0;


// function to create grid
function grid(size)
{
    container.style.gridTemplateColumns = `repeat(${size}, ${100/size}%)`;
    container.style.gridTemplateRows = `repeat(${size}, ${100/size}%)`;
    for (let i = 1; i <= size; i++) 
    {
        for (let j = 1; j <= size; j++)
        {   
            
            let cell = document.createElement("div");
            cell.classList.add("cells");
            if (num == 1) 
            {
                cell.textContent = counter;
            }
            
            cell.addEventListener('mouseover', ()=>
            {
                cell.style.backgroundColor = color1;
            })
            container.appendChild(cell);
            counter++;
        }
    }
    counter = 1;
}

grid(size); // initial grid display

var btncreate = document.querySelector('#create');

btncreate.addEventListener('click', ()=>
{
    size = prompt("Enter the size")
    console.log(size);
    
    deletegrid();
    grid(size);
})

function deletegrid()
{
    var cells = container.lastElementChild;
    while(cells)
    {
        container.removeChild(cells);
        cells = container.lastElementChild;
    }
}

var btnnumber = document.querySelector('#number');
btnnumber.addEventListener('click', ()=>
{
    num = 1;
    deletegrid();
    grid(size);
})