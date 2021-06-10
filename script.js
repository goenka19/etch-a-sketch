console.log("HELLO");
var container = document.querySelector(".container");

var size = 16;
var color1 = 'pink'

// function to create grid
function grid(size)
{
    container.style.gridTemplateColumns = `repeat(${size}, 40px)`;
    container.style.gridTemplateRows = `repeat(${size}, 40px)`;
    for (let i = 1; i <= size; i++) 
    {
        for (let j = 1; j <= size; j++)
        {   
            
            let cell = document.createElement("div");
            cell.classList.add("cells");
            cell.addEventListener('mouseover', ()=>
            {
                cell.style.backgroundColor = color1;
            })
            container.appendChild(cell);

        }
    }
}

grid(size); // initial grid display

var btn = document.querySelector('#create');

btn.addEventListener('click', ()=>
{
    var size = prompt("Enter the size")
    console.log(size);
    var cells = container.lastElementChild;
    while(cells)
    {
        container.removeChild(cells);
        cells = container.lastElementChild;
    }
    grid(size);
})