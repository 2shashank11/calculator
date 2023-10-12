$("body").addClass("body-theme1");
$(".theme-toggler").addClass("theme-toggler-theme1");
$(".screen").addClass("screen-theme1");
$(".numpad").addClass("numpad-theme1");
$(".number").addClass("number-theme1");
$(".operator").addClass("operator-theme1");
$(".operate").addClass("operate-theme1");
$(".reset").addClass("reset-theme1");
$(".delete").addClass("delete-theme1");
$(".equal").addClass("equal-theme1");

$(".theme1").on("click", function(){

    $(".theme1").addClass("theme1-active");
    $("body").addClass("body-theme1");
    $(".theme-toggler").addClass("theme-toggler-theme1");
    $(".screen").addClass("screen-theme1");
    $(".numpad").addClass("numpad-theme1");
    $(".number").addClass("number-theme1");
    $(".operator").addClass("operator-theme1");
    $(".operate").addClass("operate-theme1");
    $(".reset").addClass("reset-theme1");
    $(".delete").addClass("delete-theme1");
    $(".equal").addClass("equal-theme1");

    //removing
    $(".theme2").removeClass("theme2-active");
    $("body").removeClass("body-theme2");
    $(".theme-toggler").removeClass("theme-toggler-theme2");
    $(".screen").removeClass("screen-theme2");
    $(".numpad").removeClass("numpad-theme2");
    $(".number").removeClass("number-theme2");
    $(".operator").removeClass("operator-theme2");
    $(".operate").removeClass("operate-theme2");
    $(".reset").removeClass("reset-theme2");
    $(".delete").removeClass("delete-theme2");
    $(".equal").removeClass("equal-theme2");

    $(".theme3").removeClass("theme3-active");
    $("body").removeClass("body-theme3");
    $(".theme-toggler").removeClass("theme-toggler-theme3");
    $(".screen").removeClass("screen-theme3");
    $(".numpad").removeClass("numpad-theme3");
    $(".number").removeClass("number-theme3");
    $(".operator").removeClass("operator-theme3");
    $(".operate").removeClass("operate-theme3");
    $(".reset").removeClass("reset-theme3");
    $(".delete").removeClass("delete-theme3");
    $(".equal").removeClass("equal-theme3");
});

$(".theme2").on("click", function(){

    $(".theme2").addClass("theme2-active");
    $("body").addClass("body-theme2");
    $(".theme-toggler").addClass("theme-toggler-theme2");
    $(".screen").addClass("screen-theme2");
    $(".numpad").addClass("numpad-theme2");
    $(".number").addClass("number-theme2");
    $(".operator").addClass("operator-theme2");
    $(".operate").addClass("operate-theme2");
    $(".reset").addClass("reset-theme2");
    $(".delete").addClass("delete-theme2");
    $(".equal").addClass("equal-theme2");

    //removing
    $(".theme1").removeClass("theme1-active");
    $("body").removeClass("body-theme1");
    $(".theme-toggler").removeClass("theme-toggler-theme1");
    $(".screen").removeClass("screen-theme1");
    $(".numpad").removeClass("numpad-theme1");
    $(".number").removeClass("number-theme1");
    $(".operator").removeClass("operator-theme1");
    $(".operate").removeClass("operate-theme1");
    $(".reset").removeClass("reset-theme1");
    $(".delete").removeClass("delete-theme1");
    $(".equal").removeClass("equal-theme1");

    $(".theme3").removeClass("theme3-active");
    $("body").removeClass("body-theme3");
    $(".theme-toggler").removeClass("theme-toggler-theme3");
    $(".screen").removeClass("screen-theme3");
    $(".numpad").removeClass("numpad-theme3");
    $(".number").removeClass("number-theme3");
    $(".operator").removeClass("operator-theme3");
    $(".operate").removeClass("operate-theme3");
    $(".reset").removeClass("reset-theme3");
    $(".delete").removeClass("delete-theme3");
    $(".equal").removeClass("equal-theme3");

});

$(".theme3").on("click", function(){

    $(".theme3").addClass("theme3-active");
    $("body").addClass("body-theme3");
    $(".theme-toggler").addClass("theme-toggler-theme3");
    $(".screen").addClass("screen-theme3");
    $(".numpad").addClass("numpad-theme3");
    $(".operator").addClass("operator-theme3");
    $(".number").addClass("number-theme3");
    $(".operate").addClass("operate-theme3");
    $(".reset").addClass("reset-theme3");
    $(".delete").addClass("delete-theme3");
    $(".equal").addClass("equal-theme3");

    //removing
    $(".theme1").removeClass("theme1-active");
    $("body").removeClass("body-theme1");
    $(".theme-toggler").removeClass("theme-toggler-theme1");
    $(".screen").removeClass("screen-theme1");
    $(".numpad").removeClass("numpad-theme1");
    $(".number").removeClass("number-theme1");
    $(".operator").removeClass("operator-theme1");
    $(".operate").removeClass("operate-theme1");
    $(".reset").removeClass("reset-theme1");
    $(".delete").removeClass("delete-theme1");
    $(".equal").removeClass("equal-theme1");

    $(".theme2").removeClass("theme2-active");
    $("body").removeClass("body-theme2");
    $(".theme-toggler").removeClass("theme-toggler-theme2");
    $(".screen").removeClass("screen-theme2");
    $(".numpad").removeClass("numpad-theme2");
    $(".number").removeClass("number-theme2");
    $(".operator").removeClass("operator-theme2");
    $(".operate").removeClass("operate-theme2");
    $(".reset").removeClass("reset-theme2");
    $(".delete").removeClass("delete-theme2");
    $(".equal").removeClass("equal-theme2");
});


var expression="";
var result;

function displayOnScreen(exp){
    document.querySelector(".screen").innerHTML=exp;
}

document.querySelector(".reset").addEventListener("click", function(){
    expression="";
    displayOnScreen(expression);
});

$(".delete").on("click", function(){
    expression=expression.slice(0, expression.length-1);
    displayOnScreen(expression);
    
});

$(".btn").on("click", function(){
    expression+=this.innerHTML;
    displayOnScreen(expression);
});


$(".equal").on("click", function(){
    result=eval(expression);
    displayOnScreen(result);
    expression=result;
    console.log(result);
});

// $("body").KeyUp(function (e) { 
//     console.log(e);
// });
