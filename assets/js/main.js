
// 1. Select the ele,ent (button)
var checkoutBtn = document.getElementById("checkout-btn");


// 2. Select all menu boxes
var menuBoxes = document.getElementsByClassName("content");

// 3. Add "click" event on each menu box
// FOR LOOPS!!
for(var i = 0; i < menuBoxes.length; i++ ) {
    // Whqt needs to be looped/iterative!
    menuBoxes[i].addEventListener("click", function() {
        // 4. Add class "active" to the ele,ent/button
        checkoutBtn.classList.add("active")
    })
}

// INITIAL VAL - TARGET VAL (aka. condition) - INCREMENT/DECREMENT
// for(var i = 0;  i < 5; i++) {
//     console.log(i)
// }

// DRY -> DON'T REPEAT YOURSELF

