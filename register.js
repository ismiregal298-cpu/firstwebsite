const registerButton = document.querySelector("button.login");
const emailField = document.querySelector("input[type='email']");
const passwordField = document.querySelector("input[type='password']");
const passwordFieldTwo = document.querySelector("input[type='password']#pass2");


registerButton.addEventListener("click", () => {
    const email = emailField.value;
    const password = passwordField.value;
    const password2 = passwordFieldTwo.value

    if (password == password2) {

        if (email && password && password2)  {
            alert("✅ Regestrierung erfolgreich!\nWillkommen, " + email + "!");
        } 
        else {
            alert("❌ Bitte Email und Passwort eingeben.");
        }
    }
    else {
        alert("Password is not the same!")
    }
});
document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {   
        const email = emailField.value;
        const password = passwordField.value;
        const password2 = passwordFieldTwo.value;

        if (password == password2) {
            // Ganz einfache Prüfung (nur Beispiel!)
            if (email && password) {
                alert("✅ Login erfolgreich!\nWillkommen, " + email + "!");
            } else {
                alert("❌ Bitte Email und Passwort eingeben.");
            }
        }
        else {
        alert("Password is not the same!")
        }
    }
    else{
        return;
    }
});

