const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const survey = function() {
  const qArray = ["What's an activity you like doing? ","What do you listen to while doing that?  ","Which meal is your favourite (eg: dinner, brunch, etc.)  ","What's your favourite thing to eat for that meal?  ","Which sport is your absolute favourite?  ","What is your superpower? In a few words, tell us what you are amazing at!  "];
  const ansArray = [];


  rl.question(qArray[0], (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);
    ansArray.push(answer);

    rl.question(qArray[1],(answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`);
      ansArray.push(answer);
    
      rl.question(qArray[2],(answer) => {
        console.log(`Thank you for your valuable feedback: ${answer}`);
        ansArray.push(answer);

        rl.question(qArray[3],(answer) => {
          console.log(`Thank you for your valuable feedback: ${answer}`);
          ansArray.push(answer);

          rl.question(qArray[4],(answer) => {
            console.log(`Thank you for your valuable feedback: ${answer}`);
            ansArray.push(answer);

            rl.question(qArray[5],(answer) => {
              console.log(`Thank you for your valuable feedback: ${answer}`);
              ansArray.push(answer);

              rl.close();
              console.log(`Thanks for answering the survey. Here is your answer summary:\nYou like to listen to ${ansArray[1]} while ${ansArray[0]}, devouring ${ansArray[3]} for ${ansArray[2]}, prefer ${ansArray[4]} over any other sport, and your superpower is ${ansArray[5]}.`);
                           
            });
          });
        });
      });
    });
  });
  
        
};

survey();