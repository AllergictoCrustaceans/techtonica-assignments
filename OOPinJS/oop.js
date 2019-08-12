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

    // saveUserEvent(userName, eventName) {
    //     this._users.find(() => {
    //         /*
    //         *
    //         *TODO: save userEvent by adding up all the tickets prices. 
    //         * 
    //         */
    //         return userName;
    //         this._users.userName.addUserEvent(this._events.eventName);
    //     });
    // }

    deleteUser(userName) {
        var indexUser = '';
        for(let i = 0; i < this._users.length; i++) {
            if(this._users[i].userName === userName) {
                indexUser = i;
                break;
            }
        } 
        delete this._users[indexUser];
        this._users.splice(indexUser, 1);
        console.log(this.users);
    }
   
    deleteEvent(userEvents) {
        var indexEvent = '';
        for(let i = 0; i < this._events.length; i++) {
            console.log(this._events[i])
            if(this._events[i]._eventName === userEvents) {
                indexEvent = i;
                break;
            }
            
        } 
        delete this._events[indexEvent];
        this._events.splice(indexEvent, 1);
        console.log(this.events);
    }

    filter(type, input) {
        var results = [];
        if(type === 0) {
            for(let i = 0; i < this._events.length; i++) {
                var filterDate = this._events[i]._eventDate === input;
                if(filterDate) {
                    results.push(this._events[i]);
    
                } 
            }       
        } 
        else if(type === 1) {
            for(let i = 0; i < this._events.length; i++) {
                var filterPlace = this._events[i]._eventPlace === input;
                if(filterPlace) {
                    results.push(this._events[i]);
                }
            }
        } 
        console.log(results);
    }
}

class User{
    constructor (userName) {
        this._userName = userName;
        this._userEvents = [];
    }

    addUserEvent(event) {
        this._userEvents.push(event);
    }
}

class Event {
    constructor (eventDate, eventPlace, eventName, eventDescription, eventPrice) {
        this._eventDate = eventDate;
        this._eventPlace = eventPlace;
        this._eventName = eventName;
        this._eventDescription = eventDescription;
        this._eventPrice = eventPrice;
    }
}

const event1 = new Event('08/08/2019', 'San Francisco', 'Gladiator', 'Gladiator Film Score', 70);
const event2 = new Event('08/09/2019', 'Austria', 'Inception', 'Inception Film Score', 70);

const user1 = new User('Katie');
const user2 = new User('Wu');
user2.addUserEvent(event1);

const eventRecommender = new EventRecommender();
eventRecommender.addUser(user1);
eventRecommender.addUser(user2);
eventRecommender.addEvent(event1);
eventRecommender.addEvent(event2);
eventRecommender.filter(0, '08/08/2019');
eventRecommender.filter(1, 'Austria');
// eventRecommender.saveUserEvent(user1, [event1, event2]);
eventRecommender.deleteUser('Katie');
eventRecommender.deleteEvent('Sleep');
console.log(eventRecommender); 


module.exports = EventRecommender;