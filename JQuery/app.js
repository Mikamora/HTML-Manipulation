// 1
$(document).ready(function () {
    let $btn = $("<button>Click me!</button>");
    $("body").append($btn);
    $btn.click(function () {
        alert("hey!! STOP THAT!")
    })
    // 2
    let $btn1 = $("#btn1");
    let $textBox = $("#text");
    $btn1.click(function () {
        let $textBoxVal = $textBox.val();
        alert($textBoxVal);
        event.preventDefault();
    })
    // 3
    let $div1 = $(".div1");
    $div1.mouseenter(function () {
        var colorR = Math.floor((Math.random() * 256));
        var colorG = Math.floor((Math.random() * 256));
        var colorB = Math.floor((Math.random() * 256));
        $(this).css("background-color", `rgb(${colorR}, ${colorG}, ${colorB})`);
    })
    $div1.mouseleave(function () {
        $(this).css("background-color", "transparent");
    })
    // 4
    let $p = $("<p> hello!! </p>");
    $("body").append($p);
    $p.click(function () {
        var colorR = Math.floor((Math.random() * 256));
        var colorG = Math.floor((Math.random() * 256));
        var colorB = Math.floor((Math.random() * 256));
        $(this).css("color", `rgb(${colorR}, ${colorG}, ${colorB})`);
    })
    // 5
    let $btn2 = $("<button>Click me!!!!!</button>");
    let $div2 = $("<div></div>");
    $("body").append($btn2);
    $("body").append($div2);
    $btn2.click(function () {
        let $span = $("<span>Michael! </span>");
        $div2.append($span);
    })
    // 6
    let friends = ["john", 'jacob', 'justin', 'jordan', 'kasandra', 'matt', 'rachel', 'alex', 'josh', 'samantha'];
    let $btn3 = $(".friends");
    let $ul = $("ul");
    let i = 0;
    $btn3.click(function () {
        if (i < friends.length) {
            let $li = $("<li>" + friends[i] + "</li>");
            $ul.append($li);
            i++;
        }
        else {
            alert("no more friends");
        }
    })


})