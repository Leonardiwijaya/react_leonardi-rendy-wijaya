
function alertForm () {
    let Firstname = document.getElementById("firstname").value;
    let Lastname = document.getElementById("lastname").value;
    let Email = document.getElementById("email").value;
    let Message = document.getElementById("message").value;
    alert(`
    First name: ${Firstname},
    Last name: ${Lastname},
    Email: ${Email},
    Message: ${Message}
    `);
}