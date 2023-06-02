console.log("aman jaiswal");

let regEx = /^[A-Za-z]+$/;


function validation(){
    let flag = true;
    let name = document.getElementById("name").value;
    let email =document.getElementById("email").value;
    let password =document.getElementById("password").value;
   

    // console.log(a);


    var err1=document.getElementById("err1");
    var err2=document.getElementById("err2");
    var err3=document.getElementById("err3");
    var err4=document.getElementById("err4");

    if(name==""){
        err1.innerHTML = "*Please Enter username";
        err1.style.color = "red";
        flag = false;
    }else if(name.length<3){
        err1.innerHTML = "* character should be greater then 3 ";
        err1.style.color = "red";
        flag = false;
    }else if(name.length>=32){
        err1.innerHTML = "*Character should be less then 32";
        err1.style.color = "red";
        flag = false;
    }else if(!name.match(regEx)){
        err1.innerHTML = "*Only Characters(alphabets) are allowed" ;
        err1.style.color = "red";
        flag = false;
    }else{  
        err1.innerHTML = ""
    }


    return flag;
    // e.preventDefault()
    // e.preventDefault()

}