function ValidateEmailPwd(){
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var passwordFormat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (email === "" || password === "") {
        alert("Email and Password cannot be empty!");
        return;
    }

    if(!mailformat.test(email)){
        alert("You have entered an invalid email address!");
        return;
    }
    if(!passwordFormat.test(password)){
        alert("Please enter password according to the format specified!");
        return;
    }
    
    window.location.href = "login-success.html";
}

function ValidateNameEmailPwd(){
    let name = document.getElementById("name").value.trim();
    if(name === ""){
        alert("Name cannot be empty!");
        return;
    }

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var passwordFormat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (email === "" || password === "") {
        alert("Email and Password cannot be empty!");
        return;
    }

    if(!mailformat.test(email)){
        alert("You have entered an invalid email address!");
        return;
    }
    if(!passwordFormat.test(password)){
        alert("Please enter password according to the format specified!");
        return;
    }
    
    window.location.href = "reg-success.html";
}