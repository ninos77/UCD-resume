function sendMail(contactForm){
    emailjs.send("gmail","ninos_contact",{
        
        "from_name":contactForm.fullname.value,
        "from_email":contactForm.emailaddress.value,
        "request_contact":contactForm.projectsummery.value
        
    })
    
    .then(function(response){
        console.log("SUCCESS", response);
        window.location.href = "contact-response-msg.html";
        
    },
    function(error){
            console.log("FAILED",error);
    });
   
    return false;
}

function sendMailSe(contactForm){
    emailjs.send("gmail","ninos_contact",{
        
        "from_name":contactForm.fullname.value,
        "from_email":contactForm.emailaddress.value,
        "request_contact":contactForm.projectsummery.value
        
    })
    
    .then(function(response){
        console.log("SUCCESS", response);
        window.location.href = "contact-response-msg.html";
        
    },
    function(error){
            console.log("FAILED",error);
    });
   
    return false;
}