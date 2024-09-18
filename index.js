//when the form is submitted
document.getElementById("passwordForm").addEventListener("submit", function(event){
    //this will be preventing event defaults
    event.preventDefault();

    //Get the values entered by the user
    let website = document.getElementById("website").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
})
