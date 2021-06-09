console.log("HELLO");
var container = document.querySelector(".container");

var counter = 1
var size = 16;

// function to create grid
function grid(size)
{
    var container = document.querySelector(".container");

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
btn.addEventListener('click', ()=>
{
    var size = prompt("Enter the size")
    console.log(size);
    let cells = document.querySelectorAll('.cells');
    container.remove();

    let new_container = document.createElement("div");
    new_container.classList.add("container");
    let main = document.querySelector(".main");
    main.appendChild(new_container);
    grid(size);
    
})
