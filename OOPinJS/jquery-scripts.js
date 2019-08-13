//FOR BACKGROUND VIDEO PAUSE
var free = document.getElementById('free');


//default list of tour events within the modal (these cannot be deleted)
//this has a + and - sign next to the tour events. 



$(document).ready(function(){
    //build event table from scratch
    function buildEventTable() {
        $('.eventtBody tr').remove();
      eventRecommender._events.forEach(event => {
        $('.eventtBody').append("<tr><td><input type='checkbox' name='recordEvent'></td><td>" + event._eventDate + "</td><td>" + event._eventPlace + "</td><td>" + event._eventName + "</td><td>" + event._eventDescription + "</td><td>" + event._eventPrice + "</td></tr>"); 
        });
    }
    

    buildEventTable();

    $("#add-rowEvent").click(function(){
        var eventDate = $("#eventDate").val();
        var eventPlace = $("#eventPlace").val();
        var eventName = $("#eventName").val();
        var eventDescription = $("#eventDescription").val();
        var eventPrice = $("#eventPrice").val();
        const event1 = new Event(eventDate, eventPlace, eventName, eventDescription, eventPrice);
        eventRecommender.addEvent(event1);

        buildEventTable();

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




    $("#add-rowUser").click(function(){
        var userName = $("#userName").val();
        var markupUser = "<tr id='"+userName+"'><td><input type='checkbox' name='recordUser'></td><td>" + userName + "</td></tr>";
        $(".usertBody").append(markupUser);
        const user1 = new User(userName);
        eventRecommender.addUser(user1);
        $('#userName').val('');    
        console.log(eventRecommender);
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
    var markupUserHead = "<th colspan='5'>Events Added</th>";
    $("#userTr").append(markupUserHead);
    var getSelectedEvent = $(".eventTable input:checked").parents('tr');
    var getTr = getSelectedEvent.children();
    var getSelectedUser = $('.userTable input:checked').parents('tr');
    getSelectedUser.append(getTr);
    console.log('anything');
    user1.addUserEvent(event1);
    console.log(user1);
    // $('input[name="recordEvent]').prop('checked', false);
        //does it add selected event to specific user.
    })

}); 