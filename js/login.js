const forms = document.querySelector(".forms"),
      pwShowHide = document.querySelectorAll(".eye-icon"),
      links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon =>{
    eyeIcon.addEventListener("click", () =>{
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password")

        pwFields.forEach(password => {
            if(password.type === "password"){
                password.type = "text";
                eyeIcon.classList.replace("bi-eye-slash", "bi-eye");
                return;
            }
            else{
            password.type = "password";
            eyeIcon.classList.replace("bi-eye", "bi-eye-slash");
        }
        })
    })
})

links.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        forms.classList.toggle("show-signup");
    })
})
document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.querySelector('.login form');
    
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        // Get the values entered by the user
        const email = document.querySelector('.login .input[type="email"]').value.trim();
        const password = document.querySelector('.login .password').value.trim();
        
        // Check if the entered credentials are correct
        if (email === 'vasundhar@gmail.com' && password === 'Vasundar@123') {
            // Redirect to the home.html page
            window.location.href = 'home.html';
        } else {
            // Display an error message (You can customize this part)
            alert('Incorrect email or password. Please try again.');
        }
    });
});