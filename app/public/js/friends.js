console.log("Working");

$("#apiPOST").on("click", (event) => {
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
        
        if(response === "Friends database is empty") {
            $("#bf-name").text("We have no friends for you.  Here is a picture of Chris Hemsworth.");
            $("#bf-modal").modal({
                show: true,
            });
        }


        else {
            $("#bf-name").text(response.name);
            $("#bf-pic").attr("src", response.photo).attr("width", "300px")
            $("#bf-modal").modal({
                backdrop: "static",
                keyboard: true,
                show: true
            });
        }
    });
    
});