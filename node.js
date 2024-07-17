function logInNavigation()
{
    const userNameInput = document.getElementById("userName").value;
    const passWordInput = document.getElementById("passWord").value;
    
    if(userNameInput === "khietvan" && passWordInput === "admin")
    {
        window.location.href='https://www.facebook.com/joanne.phan13';
        
    }
}

function signInNavigation()
{
    window.location.href='https://github.com/khietvan123';
}