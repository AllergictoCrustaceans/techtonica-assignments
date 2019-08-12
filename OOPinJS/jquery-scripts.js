//FOR BACKGROUND VIDEO PAUSE
var free = document.getElementById('free');


//default list of tour events within the modal (these cannot be deleted)
    //this has a + and - sign next to the tour events. 
    $(document).ready(function(){
        $(".add-rowEvent").click(function(){
            var eventName = $("#eventName").val();
            var eventDate = $("#eventDate").val();
            var eventDescription = $("#eventDescription").val();
            var eventPrice = $("#eventPrice").val();
            var markupEvent = "<tr><td><input type='checkbox' name='recordEvent'></td><td>" + eventDate + "</td><td>" + eventName + "</td><td>" + eventDescription + "</td><td>" + eventPrice + "</td></tr>";
            $(".eventtBody").append(markup);
        });
        
        // Find and remove selected table rows
        $(".delete-rowEvent").click(function(){
            $("table tbody").find('input[name="recordEvent"]').each(function(){
            	if($(this).is(":checked")){
                    $(this).parents("tr").remove();
                }
            });
        });
    });    
    
    
    
    
    $(document).ready(function(){
        $(".add-rowUser").click(function(){
            var userName = $("#userName").val();
            var markupUser = "<tr><td><input type='checkbox' name='recordUser'></td><td>" + userName + "</td></tr>";
            //$("table tbody").append(markupUser);
            $(".usertBody").append(markupUser);
        });

        // Find and remove selected table rows
        $(".delete-rowUser").click(function(){
            $("table tbody").find('input[name="recordUser"]').each(function(){
                if($(this).is(":checked")){
                    $(this).parents("tr").remove();
                }
            });
        });
    });

// button to add text input of user (these can be deleted)
    //User click generate to generate a user row onto the bottom of the modal,
    $('.add').on('click', function() {
        var inputName = $('#basic').val();
        const user1 = new User(inputName);
        eventRecommender.addUser(user1);
        $('#basic').val('');    
        console.log(eventRecommender);
        //make sure user shows up on the bottom portion of the modal.
        // delete user button on the right if row is selected. 
    });
    // - will delete user from row on the bottom of the modal


// button to add/delete text input of event (these can be edited)
    // + will add it onto the respective user. 
    // - will delete it onto the respective user.

// 