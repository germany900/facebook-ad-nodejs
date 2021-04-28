require("dotenv").config();
const Pushover = require('node-pushover');
const push = new Pushover({
  
  token: process.env.Pushover_Token,
  user: process.env.Pushover_User
});

async function sendNoti (info) {

  push.send(info.title, info.message, (err, data) => {
    if(data) {
      console.log("data", data);
    }else {
      console.log("error", err);
    }
  });

}

module.exports = {
    sendNoti
}