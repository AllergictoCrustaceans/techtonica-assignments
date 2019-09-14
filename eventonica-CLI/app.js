require('dotenv').config();
const eventfulNode = require('eventful-node');
const client =new eventfulNode.Client(process.env.eventful);
console.log(client);
const inquirer = require('inquirer');
//connection available to all
const connection = require('./config/database');
// const {eventful} = require('./config');
// const {dbPassword} = require('./config');



const app = {};

app.startQuestion = (closeConnectionCallback) => {
  inquirer.prompt({
    type: 'list',
    message: 'What action would you like to do?',
    choices: [
      'Complete a sentence',
      'Create a new user',
      'Find one event of a particular type in San Francisco next week',
      'Mark an existing user to attend an event in database',
      'See all events that a particular user is going to',
      'See all the users that are going to a particular event',
      'Exit'
    ],
    name:'action',
  }).then((res) => {
    const continueCallback = () => app.startQuestion(closeConnectionCallback);

    if (res.action === 'Complete a sentence') app.completeSentence(continueCallback);
    if (res.action === 'Create a new user') app.createNewUser(continueCallback);
    if (res.action === 'Find one event of a particular type in San Francisco next week') app.searchEventful(continueCallback);
    if (res.action === 'Mark an existing user to attend an event in database') app.matchUserWithEvent(continueCallback);
    if (res.action === 'See all events that a particular user is going to') app.seeEventsOfOneUser(continueCallback);
    if (res.action === 'See all the users that are going to a particular event') app.seeUsersOfOneEvent(continueCallback);
    if (res.action === 'Exit') {
      app.closeConnectionCallback();
      return;
    }
  })
}

app.completeSentence = (continueCallback) => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'childhood memory',
            message: 'A favorite childhood memory of mine was ',
        },
        {
            type: 'input',
            name: 'adult change',
            message: 'Now, I honor my childhood by '
        },

    ]).then(answers => {
      console.log('\nAnswers:');
      console.log(JSON.stringify(answers, null, ' -- '));
      //End of your work
      continueCallback();
    })
}


 app.createNewUser = (continueCallback) => {
  inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter your name.',
            default: 'Mary Poppins'
        },
        {
            type: 'number',
            name: 'age',
            message: 'Please enter your age.',
            filter: Number
        },
        {
            type: 'checkbox',
            name: 'description',
            message: 'How would you describe yourself?',
            choices: [
                    "active", 
                    "sendentary",
                    "sassy",
                    "sharp",
                    "rich",
                    "broke",
                    "imperfect",
                    "ambitious",
                    "emotional",
                    "confident",
                    "unique",
                    "fair",
                    "wack",
                    "spiritual",
                    "introvert",
                    "extrovert",
                    "sleepy",
                    "dreamer",
                    "anti-social",
                    "artistic"
            ],
            checked: true
        },
        {
          type: 'input',
          name: 'contact_email',
          message: 'Please enter your email'
        }
  ]).then(answers => {
      console.log('\nAnswers:');
      console.log(JSON.stringify(answers, null, ' -- '));
      connection.query('INSERT INTO users (name, age, description, contact_email) VALUES ($1, $2, $3, $4)', [answers.name, answers.age, answers.description, answers.contact_email], (error, results)=> {
        if(error) {
            throw error
        }
        else {
          console.log(results);
            //End of your work
            continueCallback();
        }
    })
  })
 }




 app.searchEventful = (continueCallback) => {
  inquirer.prompt([
     {
       type: 'text',
       name: 'search',
       message: 'What kind of event would you like to attend next week in San Francisco?'
     }
   ]).then(answers => {
    const{search} = answers;
    client.searchEvents(
      {
        keywords: search,
        location: 'San Francisco',
        date: 'Next Week'
      },
      (err, data) => {
        if(err) {
          throw error;
        }
        let resultEvents = data.search.events.event[0];
        console.log('This is the first result that matches your search.');
        console.log('title: ',resultEvents.title);
        console.log('start_time: ',resultEvents.start_time);
        console.log('venue_name: ',resultEvents.venue_name);
        console.log('venue_address: ',resultEvents.venue_address);
        inquirer.prompt ([
          {
            type: 'confirm',
            name: 'save',
            message: 'Would you like to save this event?'
          }
        ]).then(answers => {
          if(answers === "y" || "Y") {
            console.log('\nAnswers:');
            console.log(JSON.stringify(answers, null, ' -- '));
            connection.query('INSERT INTO events (title, start_time, venue_name, venue_address) VALUES ($1, $2, $3, $4)', [resultEvents.title, resultEvents.start_time, resultEvents.venue_name, resultEvents.venue_address], (err, postgresResults) => {
              if(err) {
                throw err;
              } else {
               console.log('Event has been saved!');
               console.log(postgresResults);
               continueCallback();
              }
            } )
          } else {
            app.searchEventful(continueCallback);
          }
        })
      }
    )
  })
}

 app.matchUserWithEvent = (continueCallback) => {
   inquirer.prompt ([
     {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
        filter: String
     },
     {
        type: 'input',
        name: 'title',
        message: 'What event do you want to attend?'
     }
   ]).then(answers => {
    console.log('\nAnswers:');
    console.log(JSON.stringify(answers, null, ' -- '));

    connection.query('SELECT u.id, e.id FROM users AS u INNER JOIN events AS e ON u.name = $1 AND e.title = $2', [answers.name, answers.title], (err, post) => {
      if(err) {
        throw err;
      } else {
        console.log(post);
        connection.query('INSERT INTO database3 (user_name, event_name) VALUES($1, $2)', [answers.name, answers.title], (err, post) => {
          if(err) {
            throw err;
          } else {
            console.log('Hey user, this is the event you wanted to match with!');
            console.log(post);
            continueCallback();
          }
        });
      }
    });
  }) 
}

 app.seeEventsOfOneUser = (continueCallback) => {
    inquirer.prompt ([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
      }
    ]).then(answers => {
      console.log('\nAnswers:');
      console.log(JSON.stringify(answers, null, ' -- '));
      connection.query('SELECT e.title, e.start_time, e.venue_name, e.venue_address FROM events AS e INNER JOIN database3 AS db3 ON e.title = db3.event_name INNER JOIN user AS u ON u.name = db3.user_name WHERE u.name = $1', [answers.name], (err, results) => {
        if(err) {
          throw err;
        } else {
          console.log(`Here are the event(s) associated to ${answers.name}`);
          console.log(results);
          continueCallback();
        }
      })
    })
}

 app.seeUsersOfOneEvent = (continueCallback) => {
  inquirer.prompt ([
    { //maybe have the user choose a list of events from the table.
      type: 'input',
      name: 'title',
      message: 'What event do you want to check up on?'
    }
  ]).then(answers => {
    console.log('\nAnswers:');
    console.log(JSON.stringify(answers, null, ' -- '));
    connection.query('SELECT u.name, u.age, u.attributes u.contact_email FROM users AS u INNER JOIN database3 AS db3 ON u.name = db3.user_name INNER JOIN events AS e ON e.title = db3.event_name WHERE e.title = $1' [answers.title], (err, results) => {
      if(err) {
        throw err;
      } else {
        console.log('Here are all the attendees this event.');
        console.log(results);
        continueCallback();
      }
    })
  })
}

 module.exports = app;