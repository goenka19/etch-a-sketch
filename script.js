console.log("HELLO");
var container = document.querySelector("#container");
var counter = 1
for (let i = 1; i <= 16; i++) 
{
    for (let j = 1; j <= 16; j++)
    {
        let cell = document.createElement("div");
        cell.classList.add("cells");
        //cell.textContent = counter;
        cell.addEventListener('mouseover', ()=>
        {
            cell.style.backgroundColor = 'pink';
        })
        container.appendChild(cell);

        counter ++;
    }
}