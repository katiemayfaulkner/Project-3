var checkoutBtn = document.getElementById("checkout-btn");

var menuBoxes = document.getElementsByClassName("content");

for(var i = 0; i < menuBoxes.length; i++ ) {
    
    menuBoxes[i].addEventListener("click", function() {
        
        checkoutBtn.classList.add("active")
    })
}