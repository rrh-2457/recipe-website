// Search recipes by title
function searchRecipes() {

    let input = document.getElementById("searchBox");

    if (!input) return;

    let filter = input.value.toLowerCase();

    let recipes = document.getElementsByClassName("recipe");

    for (let i = 0; i < recipes.length; i++) {

        let title = recipes[i].getElementsByTagName("h3")[0];

        if (title.innerHTML.toLowerCase().indexOf(filter) > -1) {

            recipes[i].style.display = "";

        } else {

            recipes[i].style.display = "none";

        }
    }

    // Google Analytics Event (optional)
    if (typeof gtag === "function") {
        gtag("event", "recipe_search", {
            search_term: filter
        });
    }
}


// Contact Form Validation
function validateForm() {

    let name = document.getElementById("name").value.trim();

    let email = document.getElementById("email").value.trim();

    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {

        alert("Please fill in all fields.");

        return false;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        alert("Enter a valid email address.");

        return false;
    }

    alert("Message submitted successfully!");

    if (typeof gtag === "function") {
        gtag("event", "contact_form_submit");
    }

    return true;
}


// Scroll to Top Button
window.onscroll = function () {

    let btn = document.getElementById("topBtn");

    if (!btn) return;

    if (document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200) {

        btn.style.display = "block";

    } else {

        btn.style.display = "none";
    }
};


function topFunction() {

    document.body.scrollTop = 0;

    document.documentElement.scrollTop = 0;
}