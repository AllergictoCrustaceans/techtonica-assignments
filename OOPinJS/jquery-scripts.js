//FOR BACKGROUND VIDEO PAUSE
var free = document.getElementById('free');


//default list of tour events within the modal (these cannot be deleted)
    //this has a + and - sign next to the tour events. 



    $(document).ready(function(){
        $("#add-rowEvent").click(function(){
            var eventDate = $("#eventDate").val();
            var eventPlace = $("#eventPlace").val();
            var eventName = $("#eventName").val();
            var eventDescription = $("#eventDescription").val();
            var eventPrice = $("#eventPrice").val();
            var markupEvent = "<tr><td><input type='checkbox' name='recordEvent'></td><td>" + eventDate + "</td><td>" + eventPlace + "</td><td>" + eventName + "</td><td>" + eventDescription + "</td><td>" + eventPrice + "</td></tr>";
            $(".eventtBody").append(markupEvent);
            const event1 = new Event(eventDate, eventPlace, eventName, eventDescription, eventPrice);
            eventRecommender.addEvent(event1);
            $('#eventDate').val('');  
            $('#eventPlace').val('');
            $('#eventName').val('');
            $('#eventDescription').val('');
            $('#eventPrice').val('');  
            console.log(eventRecommender);
        });
        
        // Find and remove selected table rows
        $("#delete-rowEvent").click(function(){
            $("table tbody").find('input[name="recordEvent"]').each(function(){
            	if($(this).is(":checked")){
                    $(this).parents("tr").remove();
                    eventRecommender.deleteEvent(event1);
                }
            });
        });
    });    
    
    
    
    
    $(document).ready(function(){
        $("#add-rowUser").click(function(){
            var userName = $("#userName").val();
            var markupUser = "<tr><td><input type='checkbox' name='recordUser'></td><td>" + userName + "</td></tr>";
            $(".usertBody").append(markupUser);
            const user1 = new User(userName);
            eventRecommender.addUser(user1);
            $('#userName').val('');    
            console.log(eventRecommender);
        // delete user button on the right if row is selected. 
        });
    });

       
    // //if checkbox selected, show delete user button, and remove tr.
    // $('input[name="recordUser]').each(function() {
    //     if($(this).is(":checked")) {
    //         $('#delete-rowUser"').show();
    //     }
    // });
    
        
        // Find and remove selected table rows
        $("#delete-rowUser").click(function(){
            $("table tbody").find('input[name="recordUser"]').each(function(){
                if($(this).is(":checked")){
                    $(this).parents("tr").remove();
                    eventRecommender.deleteUser(user1);
                    console.log(eventRecommender);
                }
            });
        });
    // });



    // addUserEvent() with add Event Button.
        $('#addToUser').click(function() {
            //copy row to be added as a column next to user name   
        var markupUserHead = "<tr><th>Events Added</th></tr>";
        $(".usertBody").append(markupUserHead);
        var getSelectedRows = $(".eventTable input:checked").parents('tr');
        $(".userTable tbody").append(getSelectedRows);
            user1.addUserEvent(event1);
            console.log(user1);
            //does it add selected event to specific user.
        })


// button to add/delete text input of event (these can be edited)
    // + will add it onto the respective user. 
    // - will delete it onto the respective user.

// 