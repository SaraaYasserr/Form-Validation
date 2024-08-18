function clearErrors() {
    errors = document.getElementsByClassName('formerror');
    for (let item of errors) {
        item.innerHTML = "";
    }
}




function seterror(id, error) {
    element = document.getElementById(id);
    element.getElementsByClassName("formerror")[0].innerHTML = error;


}

function validateForm() {
    var returnval = true;
    clearErrors();
    
    const name = document.getElementById('name').querySelector("input").value;
    const namee = /^[A-Za-z0-9_]{5,10}$/;
    if (!namee.test(name)) {
        seterror("name", "♡ Valid UserName should be from 5 to 10 characters and include underscores,letters and numbers");
        returnval = false;
    }
  
   


    const pass = document.getElementById('pass').querySelector("input").value;
    const passs = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passs.test(pass)) {
        seterror("pass", "♡ Strong Password should contain at least 8 characters, including uppercase, lowercase, number, and special character");
        returnval = false;
    }
   


    const email = document.getElementById('email').querySelector("input").value;
    const emaill = /^\S+@\S+\.\S+$/;
    if (!emaill.test(email)) {
        seterror("email", "♡ Email is not Valid");
        returnval = false;

    }
    


    const phone = document.getElementById('phone').querySelector("input").value;
    const phonee = /^0\d{10}$/;
    if (!phonee.test(phone)) {
        seterror("phone", "♡ Phone Number Should be 11 digits");
        returnval = false;
    }
  


    const credit = document.getElementById('credit').querySelector("input").value;
    const creditt = /^(\d{4}[- ]?){3}\d{4}$/;
    if (!creditt.test(credit)) {
        seterror("credit", "♡ You should Enter a Valid Credit Card Number");
        returnval = false;
    }
   


    const date = document.getElementById('date').querySelector("input").value;
    const datee= /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{4}$/;
    if (!datee.test(date)) {
        seterror("date", "♡ You should Enter a Valid Date");
        returnval = false;
    }
   
    return returnval ;
}


