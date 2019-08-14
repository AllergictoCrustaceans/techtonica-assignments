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



    function buildUserTable() {
        $('.usertBody tr').remove();
      eventRecommender._users.forEach(user => {
        $('.usertBody').append("<tr><td><input type='checkbox' name='recordUser'></td><td>" + user._userName + "</td></tr>"); 
        });
    }

    buildUserTable();

    $("#add-rowUser").click(function(){
        var userName = $("#userName").val();
        const user1 = new User(userName);
        eventRecommender.addUser(user1);

        buildUserTable();

        $('#userName').val('');    
        console.log(eventRecommender);
    });

    
    // Find and remove selected table rows
    $("#delete-rowUser").click(function(){
        $('input[name="recordUser"]').each(function(){
            if($(this).is(":checked")){
                var deleteUser = $(this).parent().siblings().last().text();
                console.log('deleteUser = ', deleteUser);
                eventRecommender.deleteUser(deleteUser);
                $(this).parents("tr").remove();
                console.log(eventRecommender);
            }
        });
    });



// addUserEvent() with add Event Button.
    $('#addToUser').click(function() {
    var markupUserHead = "<th colspan='5'>Events Added</th>";
    $("#userTr").append(markupUserHead);
    var getSelectedEvent = $(".eventTable input:checked").parents('tr');
    var getTr = getSelectedEvent.children();
    var clone = getTr.clone();
    var getSelectedUser = $('.userTable input:checked').parents('tr');
    getSelectedUser.append(clone);
    user1.addUserEvent(event1);
    console.log(user1);

        $(':checked').each(function() {
            $(this).removeAttr('checked');
            $('input[name="recordUser"]').prop('checked', false);
            $('input[name="recordEvent"]').prop('checked', false);
        })
    })

    $('#deleteEventFromUser').click(function() {
        $('input[name="recordEvent"]').each(function(){
            if($(this).is(":checked")){
                var getSelectedEvent_user = $('.userTable input:checked').parents('tr');
                console.log('getSelectedEvent_user = ', getSelectedEvent_user);
                eventRecommender.deleteUser(getSelectedEvent_user);
                $(this).parents("tr").remove();
                //remove EventsAdded header
                console.log(eventRecommender);
            }
        });

    })
}); 
