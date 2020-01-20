
function register(){

    let myForm      = document.querySelector('.myForm');
    let data        = myForm.getElementsByTagName('input');
    let name        = data[0].value;
    let password    = data[1].value;
    let email       = data[2].value;
    let phone       = data[3].value;
    
    
    if(name.trim().length > 5  && email.length > 0 && phone.length > 5 &&  password.trim().length > 7 && validateEmail(email)){
        // if(validateEmail(email)){
            localStorage.setItem("name", name);
            localStorage.setItem("email", email);
            localStorage.setItem("phone", phone);
            localStorage.setItem("password", password);

            // let newData = [name,password,email,phone];
            // kirby.push(newData);
            // console.log(kirby);
        // }
        window.location =  "index.html";
    }else{
        Swal.fire({
            icon: 'warning',
            title: 'Warning !',
            text: 'Pelase fulfill all requirements first !',
          })
    }
}

function login(){

    let myForm      = document.querySelector('.myForm');
    let data        = myForm.getElementsByTagName('input');
    let email       = data[0].value;
    let password    = data[1].value;
    let emailcon    = localStorage.getItem("email");
    let passcon     = localStorage.getItem("password");

    if(email.trim().length < 5 && password.trim().length < 5){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Your Email or Password is empty !',
          })
    }
    
    if(checkStorage()){
        if(emailcon === email && passcon === password){
            window.location = "profile.html";
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Your Email or Password is wrong !',
              })
        }
    }else{
        Swal.fire({
            icon: 'warning',
            title: 'Hmmm...',
            text: 'It seems you dont have account !',
          })
    }

}

function logout(){
    localStorage.removeItem("name");
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    localStorage.removeItem('phone');
    window.location = "index.html";
}

function checkStorage(){
    if(localStorage.getItem("name") !== null){
        return true;
    }
}


function validateEmail(email) {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function checkLength(data){
    return data.value.trim().length ;
}

window.onload = () => {

    if(localStorage.getItem("name") !== null){
    let racoon   = document.querySelector('.your-name');
    racoon.className = "pt-3";
    let name     = document.createElement('h3');
    name.className = "text-center py-5  jumbotron";
    let nameText = document.createTextNode(`Welcome Back, ${localStorage.getItem("name")}`);
    name.appendChild(nameText);
    racoon.appendChild(name);
    }

 }
 



