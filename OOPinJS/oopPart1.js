class EventRecommender {
    constructor(users, event) {    
    this._events = [];
    this._users = [];
    }

    addEvent(userEvent) {
        this._events.push(userEvent);
    }

    addUser(userName) {
        this._users.push(userName);
    }

    saveUserEvent(userName, eventName) {
        this._users.find(() => {
            /*
            *
            *TODO: how to save user and event together? wtf if this method even for.
            * 
            */
            return userName;
            this._users.userName.addUserEvent(this._events.eventName);
        });
    }

    deleteUser(userName) {
    // delete the events that are associated along with the userName too
        if(this._users.includes(userName)) {
            var indexUser = this.users.indexOf(userName);
            this.users.splice(indexUser, 1);
        }
        console.log(this.users);
    }
   
    deleteEvent(event) {
    // Deletes the Event from the system
        if(this.events.includes(event)) {
            var indexEvent = this.events.indexOf(event);
            this.events.splice(indexEvent, 1);
        }
        console.log(this.events);
    }

    filter(eventName, eventDescription, eventDate) {
        //filter for certain events, by name or date. 
        results = '';
        for(event in this._events) {
            if(this.events.includes(eventName)) {
                results += <li></li>
            } 
            else if(this.events.includes(eventDescription)) {
    
            }
            else if(this.events.includes(eventDate)) {
    
            }
        }
    }
}

class User {
    constructor (userName, userEvents=[]) {
        this._userName = userName;
        this._userEvents = userEvents;
    }

    addUserEvent(event) {
        this._events.push(event);
    }
}

class Event {
    constructor (eventName, eventDescription, eventDate) {
        this._eventName = eventName;
        this._eventDescription = eventDescription;
        this._eventDate = eventDate;
    }
}

const event1 = new Event('Ice Cream', 'eat ice cream', '08/08/2019');
const event2 = new Event('Sleep', 'sleep', '08/09/2019');

const user1 = new User('Katie');
const user2 = new User('Wu', event1);

const eventRecommender = new EventRecommender();
eventRecommender.addUser(user1);
eventRecommender.addUser(user2);
eventRecommender.addEvent(event1);
eventRecommender.addEvent(event2);
// eventRecommender.saveUserEvent(user1, [event1, event2]);
eventRecommender.deleteUser(user1);
console.log(eventRecommender); 