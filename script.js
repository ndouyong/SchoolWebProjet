let Name = "";
let email = "";
let age = 0
let message = "";
let goal = "";

function ValidateForm() {

    Name = document.getElementById("name").value.trim();
    email = document.getElementById("email").value.trim();
    age = parseInt(document.getElementById("age").value);
    message = document.getElementById("message").value.trim();
    goal = document.getElementById("goal").value;
    
    if(Name === "" || email === "" || age === 0 || goal === "")
    {
        alert("Tous les champs sont obligatoires !")
        return false;
    }

    if(!email.includes("@") || !email.includes("."))
    {
        alert("Adresse email invalide !");
        return false;
    }

    alert("Formulaire envoye avec succes !");
    return true ;

}