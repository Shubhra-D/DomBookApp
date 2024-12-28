document.getElementById("form")
       document.getElementById("login").addEventListener("click",function(){
        let email = form.email.value;
        let password = form.password.value;
        console.log(email,password);
        if(email=="admin@empher.com"&&password=="empher@123"){
            let userdata = {email,password}
            localStorage.setItem("logindata",JSON.stringify(userdata));
           alert("Logged In as Admin")
            window.location.href="admin.html"
              console.log(userdata)
          }
        else if(email=="user@empher.com"&&password=="user@123"){
            let userdata = {email,password}
            localStorage.setItem("logindata",JSON.stringify(userdata));
           alert("Logged as User")
            window.location.href="books.html"
        }
        else{
          alert("Credential Incorrect")  
        }
        
    });
    
       
    
