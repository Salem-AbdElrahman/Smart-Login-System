var userNameInput=document.querySelector('#signUpNameInput');
var userEmailInput=document.querySelector('#signUpEmailInput');
var userPasswordInput=document.querySelector('#signUpPasswordInput');
var signInEmailInput=document.querySelector('#signInEmailInput');
var signInPasswordInput=document.querySelector('#signInPasswordInput');
var message=document.querySelector('#message');
var userList=[];
var loginBtn=document.querySelector('button#loginBtn');
var signUpBtn=document.querySelector('button#signUpBtn');
var userName=document.querySelector('#userName');
var pathparts = location.pathname.split('/');
var baseURL = ''
for (var i = 0; i < pathparts.length - 1; i++) {
    baseURL += '/'+ pathparts[i]
}
console.log(baseURL);

if(localStorage.getItem('users')==null){
    userList=[];
}
else{
userList=JSON.parse(localStorage.getItem('users'));
}

function signUp(){
    if(isEmpty()==false){
        message.innerHTML=`<span class=" text-danger">All inputs is required </span>`;
        return false
    }
    var user={
        name:userNameInput.value,
        email:userEmailInput.value,
        password:userPasswordInput.value
    }
    if(userList.length==0){
        clearForm();
        userList.push(user);
        localStorage.setItem('users',JSON.stringify(userList));
        message.innerHTML=`<span class=" text-success">success</span>`;
    }
    if(isEmailExist()==false){
        message.innerHTML=`<span class=" text-danger">Email is already exist</span>`;

    }
    else{
        clearForm();
        userList.push(user);
        localStorage.setItem('users',JSON.stringify(userList));
        message.innerHTML=`<span class=" text-success">success</span>`;
    } 
}
function clearForm(){
    userNameInput.value=null;
    userEmailInput.value=null;
    userPasswordInput.value=null;
}
function isEmailExist(){
    for(var i=0;i<userList.length;i++){
        if(userList[i].email.toLowerCase() == userEmailInput.value.toLowerCase()){
            return false
        }
    }
}
function isEmpty(){
    if(userEmailInput.value== ""||userPasswordInput.value== ""||userNameInput.value== ""){
        return false
    }
    else{
        return true
    }
}
function isLoginEmpty(){
    if(signInEmailInput.value== ""||signInPasswordInput.value== ""){
        return false
    }
    else{
        return true
    }
}
function login(){
    if(isLoginEmpty()==false){
        message.innerHTML=`<span class=" text-danger">All inputs is required </span>`;
        return false
    }
    var signInEmail=signInEmailInput.value;
    var signInPassword=signInPasswordInput.value;
    for(var i=0;i<userList.length;i++){
        if(userList[i].email.toLowerCase()==signInEmail.toLowerCase()&&userList[i].password.toLowerCase()==signInPassword.toLowerCase()){
            localStorage.setItem('username',userList[i].name)
        
            if (baseURL == '/') {
                location.replace('https://' + location.hostname + '/home.html')

            } else {
                location.replace(baseURL + '/home.html')

            }
        }else{
            message.innerHTML=`<span class="text-danger">email or password is invalid</span>`
        }
    }
    }
var username=localStorage.getItem('username')
if(username){
    userName.innerHTML=`<p class='text-white text-center'>Welcome ${username}</p>`
}


    function logout(){
localStorage.removeItem('username');
console.log('hello');
if (baseURL == '/') {
    location.replace('https://' + location.hostname + '/index.html')

} else {
    location.replace(baseURL + '/index.html')

}
    }





