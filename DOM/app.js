document.addEventListener("DOMContentLoaded", function(){
    // 1
    let btn = document.createElement("button");
    let btnText = document.createTextNode("click!");
    btn.appendChild(btnText);
    document.body.appendChild(btn);
    btn.addEventListener("click", function(){
        alert("you fell for that?!?!");
    })
    // 2
    let btn2 = document.querySelector("#btn2");
    btn2.addEventListener("click", function(){
        let text = document.querySelector("#text1");
        alert(text.value);
    })
    // 3
    let div1 = document.querySelector(".hover");
    div1.addEventListener("mouseenter", function(){
        var colorR = Math.floor((Math.random() * 256));
        var colorG = Math.floor((Math.random() * 256));
        var colorB = Math.floor((Math.random() * 256));
        div1.style.background = `rgb(${colorR}, ${colorG}, ${colorB})`
    })
    div1.addEventListener("mouseleave", function(){
        div1.style.background = "transparent";
    })
    // 4
    let para = document.createElement("p");
    let paraText = document.createTextNode("click me!");
    para.appendChild(paraText);
    document.body.appendChild(para);
    para.addEventListener("click", function(){
        var colorR = Math.floor((Math.random() * 256));
        var colorG = Math.floor((Math.random() * 256));
        var colorB = Math.floor((Math.random() * 256));
        para.style.color = `rgb(${colorR}, ${colorG}, ${colorB})`
    })
    // 5
    let btn3 = document.createElement("button");
    btn3.textContent = "click me!";
    let div2 = document.createElement("div");
    document.body.appendChild(btn3);
    document.body.appendChild(div2);
    btn3.addEventListener("click", function(){
        let newSpan = document.createElement("span");
        let newSpanText = document.createTextNode("Michael ");
        newSpan.appendChild(newSpanText);
        div2.appendChild(newSpan);
    })
    // 6
    let arrOfFriends = ["john", 'jacob', 'justin', 'jordan', 'kasandra', 'matt', 'rachel', 'alex', 'josh', 'samantha'];
    let btn4 = document.getElementById("btn4");
    let ul = document.querySelector("ul");
    let i = 0;
    btn4.addEventListener("click", function(){
            if (i < arrOfFriends.length) {
                let li = document.createElement("li");
                let liText = document.createTextNode(arrOfFriends[i]);
                li.appendChild(liText);
                ul.appendChild(li);
                i++;
            }
            else {
                alert("no more friends");
            }
    })

})