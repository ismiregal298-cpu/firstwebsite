// Holt den Button und die Eingabefelder
const loginButton = document.querySelector("button.login");
const emailField = document.querySelector("input[type='email']");
const passwordField = document.querySelector("input[type='password']");
    window.addEventListener("keydown", function(e){
        console.log(e.code)
    })
// Wenn der User auf Login klickt:
loginButton.addEventListener("click", () => {
    const email = emailField.value;
    const password = passwordField.value;

    // Ganz einfache Prüfung (nur Beispiel!)
    if (email && password) {
        alert("✅ Login erfolgreich!\nWillkommen, " + email + "!");
    } else {
        alert("❌ Bitte Email und Passwort eingeben.");
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {   
        const email = emailField.value;
        const password = passwordField.value;

        // Ganz einfache Prüfung (nur Beispiel!)
        if (email && password) {
            alert("✅ Login erfolgreich!\nWillkommen, " + email + "!");
        } else {
            alert("❌ Bitte Email und Passwort eingeben.");
        }
    }
});
