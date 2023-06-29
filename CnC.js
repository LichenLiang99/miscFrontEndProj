
//initialize all contents to be hidden except for London
let contents = document.getElementsByClassName("content");
console.log("contents =", contents);

for(let content of contents) {
    content.hidden = true;
    if(content.id === "LondonTitle") {
        content.hidden = false;
    }
}

//when a button is clicked, hide all contents and show the corresponding content
//also change the background color of the button and restore other buttons' background color
let buttons = document.getElementsByTagName("button");
console.log("buttons =", buttons);
for(let button of buttons) {
    button.addEventListener("click", function() {
        for(let content of contents) {
            content.hidden = true;
        }
        let id = button.innerHTML + "Title";
        document.getElementById(id).hidden = false;
        button.style.backgroundColor = "hsla(0, 0%, 83%, 0.856)";
    });

    button.addEventListener("blur", function() {
        button.style.backgroundColor = "hsl(0, 0%, 93%)";
    });
}

