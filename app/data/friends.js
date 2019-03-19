const connection = require("./connection.js")

const friends = {
    all: function() {
        return new Promise((resolve, reject) => {
            connection.query("select * from friends right join survey on friends.id = survey.friend_id", (err, results, fields) => {
                if(err) reject(err);

                if(results === undefined)
                    resolve("Friends database is empty");

                else {
                    let friendsArr = [];
                    results.forEach((friend) => {
                        friendsArr.push({
                            "name": friend.name,
                            "photo": friend.photo,
                            "friend_id": friend.friend_id,
                            "scores": [
                                friend.q1,
                                friend.q2,
                                friend.q3,
                                friend.q4,
                                friend.q5,
                                friend.q6,
                                friend.q7,
                                friend.q8,
                                friend.q9,
                                friend.q10,
                            ]
                        });
                    });
                    resolve(friendsArr);
                }
            });
        });
    },
    add: function(newSurveyObj) {
        return new Promise((resolve, reject) => {
            this.all().then((response) => {

                if(typeof response === "String")
                    resolve(response);

                else {
                    insertFriend(newSurveyObj);

                    let bestFriendScore, bestFriendIndex;
                    let currentAnswers = [
                        newSurveyObj.answers.q1,
                        newSurveyObj.answers.q2,
                        newSurveyObj.answers.q3,
                        newSurveyObj.answers.q4,
                        newSurveyObj.answers.q5,
                        newSurveyObj.answers.q6,
                        newSurveyObj.answers.q7,
                        newSurveyObj.answers.q8,
                        newSurveyObj.answers.q9,
                        newSurveyObj.answers.q10,
                    ];
                

                    response.forEach((potentialFriend, potentialFriendIndex) => {

                        let compatibilityScore = 0;

                        for(i = 0; i < currentAnswers.length; i++) {
                            compatibilityScore += Math.abs(parseInt(currentAnswers[i]) - parseInt(potentialFriend.scores[i]));
                        }

                        if(bestFriendScore === undefined) {
                            bestFriendScore = compatibilityScore;
                            bestFriendIndex = potentialFriendIndex;
                        }

                        else if(compatibilityScore < bestFriendScore) {
                            bestFriendIndex = potentialFriendIndex;
                            bestFriendScore = compatibilityScore;
                        }
                    });

                    resolve(response[bestFriendIndex]);
                }
            });

            
        });
        
        
    }
}

function insertFriend(friendObj) {
    connection.query("insert into friends set ?", friendObj.friend, (err, results, fields) => {
        if(err) throw(err);

        const newAnswers = friendObj.answers;
        newAnswers.friend_id = results.insertId;

        connection.query("insert into survey set ?", newAnswers, (err, results, fields) => {
            if(err) throw(err);
        });
        
    });
}

module.exports = friends;