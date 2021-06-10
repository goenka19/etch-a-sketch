console.log("HELLO");
var container = document.querySelector(".container");

var counter = 1
var size = 16;

// function to create grid
function grid(size)
{
    for (let i = 1; i <= size; i++) 
    {
        for (let j = 1; j <= size; j++)
        {   
            
            let cell = document.createElement("div");
            cell.classList.add("cells");
            cell.textContent = counter;
            cell.addEventListener('mouseover', ()=>
            {
                cell.style.backgroundColor = 'pink';
            })
            container.appendChild(cell);

            counter ++;
        }
    }
}

grid(size); // initial grid display

var btn = document.querySelector('#create');

