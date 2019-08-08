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
        for(let i = 0; i < this._availableTickets.length; i++) {
            console.log(this._availableTickets[i]._ticketPrice);
            if(this._availableTickets[i]._ticketPrice >= lowNum && this._availableTickets[i]._ticketPrice <= upNum) {
                // return results += addAvailableTickets[i].ticketPrice + ", ";
                console.log(this._availableTickets[i]._ticketPrice);
            } else {
                return 'No tickets available';
            }
        }
    }

    cheapestTickets(cheapest) {
        // var result = Math.min(...array);
        // return result;
    }
}

const event_obj1 = new Event("KLOS Golden Gala", "08.08.2019", "An evening with hollywood vampires");
const event_obj2 = new Event("Skillet & Sevendust", "08.08.2019" , "Victorious war tour");
const event_obj3 = new Event("Jenny Lewis", "08.08.2019", "On the line tour 2019");

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



const event_array = new Array();

event_array.push(event_obj1, event_obj2, event_obj3);


$(document).ready(function () {
    let html = "";
    $.each(event_array, function (index, item, ticketType, ticketPrice) {
        html += `<li>${item._name} - ${item._description}</li> - Eligible Tickets: <li>${item._ticketType}</li>`;
    });
    // insert final html into #event...
    $("#event").html(html);
});

const what = event_obj1.searchTickets(25, 200);
console.log(what);