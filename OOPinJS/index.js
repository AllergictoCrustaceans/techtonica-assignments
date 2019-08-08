class Ticket {
    constructor(ticketType, ticketPrice) {
        this._ticketType = ticketType
        this._ticketPrice = ticketPrice;
    }

}

class Event {
    constructor(name, date, description) {
        this._name = name;
        this._date = date;
        this._description = description;
        this._availableTickets = [];
    }

    addAvailableTickets(ticketType, ticketPrice) {
        const ticket = new Ticket(ticketType, ticketPrice);
        this._availableTickets.push(ticket);
    }

    searchTickets(lowNum, upNum) {
        let results = '';
        if (ticketPrice > lowNum && ticketPrice < upNum) {
            return 'Eligible tickets : <li>${Event.ticketType}</li>';
        } else {
            return 'No Tickets Available.';
        }
    }

    cheapestTickets(cheapest) {
        // get all the ticketPrice into an empty array. 
        const cheapestTicketArray = new Array();
        cheapestTicketArray.push(Event.ticketPrice);
        var result = Math.min(...array);
        return result;
    }
}

const event_obj1 = new Event("KLOS Golden Gala", "An evening with hollywood vampires");
const event_obj2 = new Event("Skillet & Sevendust", "Victorious war tour");
const event_obj3 = new Event("Jenny Lewis", "On the line tour 2019");

const event_array = new Array();

event_array.push(event_obj1, event_obj2, event_obj3);
console.log(event_array);

event_obj1.addAvailableTickets("human", 299);
event_obj1.addAvailableTickets("vampire", 99);

console.log(event_obj1);





// $(document).ready(function() {
//     let text = "";
//     $.each(cheapestTicketArray, function(index) {
//         text += `<li>${Event.ticketPrice}</li>`;
//     });
//     $("#event").html(text);
// });


event_obj2.addAvailableTickets("General Admission", 25)
event_obj2.addAvailableTickets("Floor Seating", 80)
event_obj2.addAvailableTickets("Orchestra", 300)
event_obj2.addAvailableTickets("Mezzanine", 200)
event_obj2.addAvailableTickets("Balcony", 100)
console.log(event_obj2);

$(document).ready(function () {
    let html = "";
    $.each(event_array, function (index, item) {
        html += `<li>${item.name} - ${item.description}</li>`;
    });
    // insert final html into #event...
    $("#event").html(html);
});