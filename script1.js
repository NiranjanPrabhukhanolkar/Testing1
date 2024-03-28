document.addEventListener("DOMContentLoaded", function() {
    var submitBtn = document.getElementById("submitBtn");
    var endBtn = document.getElementById("endBtn");

    submitBtn.addEventListener("click", function(event) {
        event.preventDefault(); 

        submitBtn.disabled = true;
        submitBtn.blur();
        submitBtn.classList.add("disabled");

        
        var Regis = document.getElementById("registration-from");
        var mcqForm = document.getElementById("mcq-form");
        var subjectiveForm = document.getElementById("subjective-form");

        var Registrationdat = new FormData(Regis);
        var mcqFormData = new FormData(mcqForm);
        var subjectiveFormData = new FormData(subjectiveForm);

        var Registrationdata = {};
        for (var pair of Registrationdat.entries()) {
            Registrationdata[pair[0]] = pair[1];
        }

        var mcqData = {};
        for (var pair of mcqFormData.entries()) {
            mcqData[pair[0]] = pair[1];
        }

        var subjectiveData = {};
        for (var pair of subjectiveFormData.entries()) {
            subjectiveData[pair[0]] = pair[1];
        }

        var combinedData = {
           StudentInfo: Registrationdata ,
           multiple_choice_questions_response: mcqData,
            Subjective_Question_Response: subjectiveData,
            email: "niranjankhanolkar88@gmail.com" 
        };

       

        sendDataToServer(combinedData);
        alert("Your Answers Are Submitted ");
        window.location.href = "endPage.html";
    });

   

    function sendDataToServer(data) {
       
        fetch('https://formspree.io/f/mvoebvvd', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => {
            if (response.ok) {
                console.log("Exam responses sent successfully.");
            } else {
                console.error("Failed to send exam responses.");
            }
        })
        .catch(error => {
            console.error("Error while sending exam responses:", error);
        });
    }
});


// document.addEventListener("DOMContentLoaded", function() {
//     var endBtn = document.getElementById("endbtm");

//     endBtn.addEventListener("click", function(event) {
//         event.preventDefault(); 

//         window.location.href = "endPage.html";
//     });
// });