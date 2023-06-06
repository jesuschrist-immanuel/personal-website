document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Clear form fields after submission
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("message").value = "";

    //
    document.getElementById("success-message").style.display = "inline-block";

    // Hide success message after 3 seconds
    setTimeout(function() {
        document.getElementById("success-message").style.display = "none";
    }, 3000);
});