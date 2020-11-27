window.addEventListener("load", function(){
    var section = document.getElementById("section");
    var searchButton = section.getElementsByClassName("search-button")[0];

    searchButton.onclick = function(){
        open("./sub.html","_black", "width=500px, height=500px");
    };

});

//======================================================