
document.getElementById("form")
       document.getElementById("login").addEventListener("click",function(){
        event.preventDefault();
        let email = form.email.value;
        let password = form.password.value;
        //console.log(email,password);
        if(email=="admin@empher.com"&&password=="empher@123"){
            let userdata = {email,password,as:"admin"};
            localStorage.setItem("logindata",JSON.stringify(userdata));
           alert("Logged In as Admin")
            window.location.href="admin.html"
              
          }
        else if(email==="user@empher.com"&&password==="user@123"){
            let userdata = {email,password,as:"user"}
            localStorage.setItem("logindata",JSON.stringify(userdata));
           alert("Logged as User")
           console.log("userdata")
            window.location.href="books.html"
        }
        else{
          alert("Credential Incorrect")  
        }
        
    });
    
       
    
