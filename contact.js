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

const scriptURL = 'https://script.google.com/macros/s/AKfycbyNi5fM8_FKL0sYm5eSwSbobNUwqWRGQZwfMB4joIULoftJt1msZ5Z8EXo6iEciXvGS/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})