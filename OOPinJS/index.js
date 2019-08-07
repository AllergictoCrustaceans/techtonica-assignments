class Event {
    constructor(name, date, description, ticketType, ticketPrice) {
      this.name = name;
      this.date = date;
      this.description = description;
      this.availableTickets = [];
      this._ticketType = ticketType;
      this._ticketPrice = ticketPrice;
    }

    get addAvailableTickets(ticketType, ticketPrice) {
        return this._ticketType;
        return this._ticketPrice;
    }
  }

const event_obj1 = new Event("KLOS Golden Gala", "An evening with hollywood vampires");
const event_obj2 = new Event("Skillet & Sevendust", "Victorious war tour");
const event_obj3 = new Event("Jenny Lewis", "On the line tour 2019");

const event_array = new Array();

event_array.push(event_obj1, event_obj2, event_obj3);
console.log(event_array);

$(document).ready(function() {
    let html = "";
    $.each(event_array, function(index, item) {
      html+= `<li>${item.name} - ${item.description}</li>`;
    });
    // insert final html into #event...
    $("#event").html(html);
});

event_obj2.addAvailableTickets("General Admission", 25)
event_obj2.addAvailableTickets("Floor Seating", 80)

event_obj2.addAvailableTickets("Orchestra", 300)
event_obj2.addAvailableTickets("Mezzanine", 200)
event_obj2.addAvailableTickets("Balcony", 100)

