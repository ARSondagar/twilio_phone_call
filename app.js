require("dotenv").config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

client.calls
  .create({
    url: "http://demo.twilio.com/docs/voice.xml",
    to: "+918732988332",
    from: "+19362431980",
  })
  .then((call) => console.log(call.sid))
  .catch((err) => console.log(err));
