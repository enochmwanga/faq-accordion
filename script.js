document.addEventListener("DOMContentLoaded", ()=>{
    const buttons = document.querySelectorAll("button");
    const answers = document.querySelectorAll("blockquote");
    const images = document.querySelectorAll(".sign");
    

    buttons.forEach((button, i) => {
        button.addEventListener("click",()=>{
            if(button.className === "expand"){
                images[i].src = "assets/images/icon-minus.svg";
                answers[i].style.display = "grid";
                button.className = "collapse";
            } else if(button.className === "collapse"){
                images[i].src = "assets/images/icon-plus.svg";
                answers[i].style.display = "none";
                button.className = "expand";
            }
        });
    })
});