describe("EventRecommender", () => {
  const { EventRecommender, Event, User } = require('../oop.js');
  let er, ev, us;

  beforeEach(() => {
    er = new EventRecommender();
    ev = new Event('08/08/2019', 'San Francisco, USA', 'Gladiator', 'Gladiator Film Score', 70);
    us = new User('Katie');
  });

  describe("addEvent", () => {
    it("adds a new Event to the system", () => {
      er.addEvent(ev);
      expect(er._events.length).toEqual(1);
      expect(er._events[0]._eventName).toEqual("Gladiator"); // what are some other things you can test?
    });
  });

  describe("addUser", () => {
    it("adds a new User to the system", () => {
      er.addUser(us);
      expect(er._users.length).toEqual(1);
    });
  });

  // describe("saveUserEvent", () => {
  //   it("adds an event to a user's personal event array", () => {
  //     er.addEvent("Make a new event");
  //     er.addUser("Make a new user");
  //     er.saveUserEvent("event", "user"); // change these to match your method signature
  //     expect(er.user.personalEvents.length).toEqual(1);
  //   });
  // });

  describe("deleteUser", () => {
    it("removes a User from the system", () => {
      er.addUser(us);
      er.deleteUser(us._userName);
      expect(er._users.length).toEqual(0);
    });
  });

  describe("deleteEvent", () => {
    it("removes the event from the system", () => {
      const event1 = new Event('08/08/2019', 'San Francisco', 'Gladiator', 'Gladiator Film Score', 70);
      er.addEvent(ev);
      er.deleteEvent(ev._eventName);
      expect(er._events.length).toEqual(0);
    });
  });

  // describe("addEventToUser", () => {
  //   it("add events to the userTable", () => {
  //     er.addUserEvent(ev._eventName);
  //   })
  // })

  // describe('deleteEventFromUser', () => {
  //   it("remove the event from the userTable", () => {
  //     er.addUserEvent(ev);
  //     er.deleteEventFromUser(ev._eventName);
  //     er
  //   })
  // })

});