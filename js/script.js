



// a circle to follows the mouse


const AREA = document.body;
const CIRCLE = document.querySelector('#circle');

var windowWidth = window.innerWidth;
//var windowHeight = window.innerHeight;
var windowHeight = document.body.scrollHeight; //this helps makes it soother all the way down a long site

function mouseCoordinates(e) {
    // Capture the event object (mouse movement).
    // Get X coordinate (distance from left viewport edge) via clientX property.
    // Take total window width, subtract current coordinate and width of circle.
    // Do the same for Y coordinate (distance from top viewport edge).
    var horizontalPosition = windowWidth - e.clientX - 26;
    //var verticalPosition= windowHeight - e.clientY - 26;
    var verticalPosition= e.pageY - 26;  //this makes it able to go all the way down a long site

    // Set horizontal and vertical position.
    CIRCLE.style.left = horizontalPosition + 'px';
    CIRCLE.style.top = verticalPosition + 'px';
}

function changeColorOnTouch() {
    CIRCLE.style.backgroundColor = "#CCF";
    CIRCLE.style.borderColor = "#CCF";
}

// When the mouse moves, run the mouseCoordinates function.
AREA.addEventListener('mousemove', mouseCoordinates, false);

// When the mouse touches the circle, run the changeColorOnTouch function.
CIRCLE.addEventListener('mouseenter', changeColorOnTouch, false);

// When the mouse leaves the circle, remove inline styles with an anonymous function.
CIRCLE.addEventListener('mouseleave', function(){CIRCLE.removeAttribute("style");}, false);




