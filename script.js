console.log("HELLO");

var container = document.querySelector("#container");

var counter = 1
for (let i = 1; i <= 16; i++) 
{
    for (let j = 1; j <= 16; j++)
    {
        var cell = document.createElement("div");
        cell.classList.add("cells");
        cell.textContent = counter;
        
        container.appendChild(cell);

        counter ++;
    }
    
}