console.log("Working");

$("#apiPOST").on("click", (event) => {

    $("#q1").on("invalid", (event) => console.log(event));

    if(document.getElementById("validForm").checkValidity()) {

        const answersObj = {}
        
        const currentAnswers = $("select").serializeArray();
        
        currentAnswers.forEach((q) => {
            answersObj[q.name] = q.value;
        });

        const newSurvey = {
            friend: {
                name: $("#userName").val().trim(),
                photo: $("#photoLink").val().trim(),
            },
            answers: answersObj
        }
        
        $.ajax({
            method: "POST",
            url: "/api/friends",
            data: newSurvey,
        }).then((response) => {

            console.log(response);

            $("#bf-name").text(response.name);
            $("#bf-pic").attr("src", response.photo).attr("width", "300px")
            $("#bf-modal").modal({
                backdrop: "static",
                keyboard: true,
                show: true
            });

        }, (reason) => {
            console.log(reason);

            $("#bf-name").text("We let you down. " + reason + " Here is a picture of Chris Hemsworth.");
            $("#bf-modal").modal({
                show: true,
            });

        });
    }

    else $("div.form-group").addClass("was-validated");
    
});