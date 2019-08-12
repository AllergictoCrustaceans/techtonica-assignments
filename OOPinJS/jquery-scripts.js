//FOR BACKGROUND VIDEO PAUSE
var free = document.getElementById('free');
var videoButton = document.getElementById('videoButton');

function pause() {
    if(video.paused) {
        video.play();
        videoButton.innerHTML = "Pause";
    } else {
        video.pause();
        videoButton.innerHTML = "Play";
    }
}



//default list of tour events within the modal (these cannot be deleted)
    //this has a + and - sign next to the tour events. 


// button to add text input of user (these can be deleted)
    //User click generate to generate a user row onto the bottom of the modal,
    $('.add').on('click', function() {
        var inputName = $('#basic').val();
        const user1 = new User(inputName);
        eventRecommender.addUser(user1);
        console.log(eventRecommender);
        //clear userInput after adding
        //make sure user shows up on the bottom portion of the modal.
        // delete user button on the right if row is selected. 
    });
    // - will delete user from row on the bottom of the modal


// button to add/delete text input of event (these can be edited)
    // + will add it onto the respective user. 
    // - will delete it onto the respective user.

// 