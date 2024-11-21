var userNameInput=document.querySelector('#signUpNameInput');
var userEmailInput=document.querySelector('#signUpEmailInput');
var userPasswordInput=document.querySelector('#signUpPasswordInput');
var message=document.querySelector('#message');
var userList=[];
var signUpBtn=document.querySelector('button#signUpBtn');
console.log(signUpBtn);
if(localStorage.getItem('users')==null){
    userList=[];
}
else{
userList=JSON.parse(localStorage.getItem('users'));
}
signUpBtn.addEventListener('click',function(){
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
  
    
})
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
    if(userEmailInput.value==""||userPasswordInput==""||userNameInput==""){
        return false
    }
    else{
        return true
    }
}