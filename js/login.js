document.getElementById('btn-login').addEventListener('click', function(){
    // get email and password
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    const passField = document.getElementById('user-password');
    const password = passField.value;
    
    if(email === "abc@email.com" && password === "Pass@123"){
        window.location.href = 'bank.html';
    }
    else{
        alert('Invalid user');
    }
    
})