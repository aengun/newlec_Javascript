window.addEventListener("load", function(){
    var s = document.querySelector("#s2");
    var container = s.querySelector(".container");
    var addButton = s.querySelector(".add-button");
    var delButton = s.querySelector(".del-button");
    var repButton = s.querySelector(".rep-button");

    var addInText = s.querySelector(".add-in-text");
    var oldRep = s.querySelector(".old-rep");
    var newRep = s.querySelector(".new-rep");

    var index = 1;

    addButton.onclick = function () {
        var div = document.createElement("div");
        var span = document.createElement("span");
        span.append(addInText.value+index++);
        div.append(span);
        container.append(div);
    };

    delButton.onclick = function () {
        container.lastElementChild.remove();
    };

    repButton.onclick = function () {
        var num1 = oldRep.value;
        var num2 = newRep.value;
        var oldOne = container.children[num1];
        var newOne = container.children[num2];
        container.replaceChild(newOne, oldOne); 
        container.insertBefore(oldOne, container.children[num2]);
    };

});