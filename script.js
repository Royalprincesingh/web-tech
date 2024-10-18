// Get the modal
var modal = document.getElementById("formModal");

// Get the button that opens the modal
var btn = document.getElementById("openForm");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Handle form submission
document.getElementById("myForm").onsubmit = function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    // Add your form submission logic here
    console.log("Name:", name);
    console.log("Email:", email);
    modal.style.display = "none"; // Close the modal after submission
}