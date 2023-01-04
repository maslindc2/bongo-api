const express = require('express');

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
});

app.get('/', (req, res) => {
    console.log("Request is Incoming");

    const urls =["https://i.lensdump.com/i/RLJni1.gif",
                 "https://i.lensdump.com/i/RLJLLK.gif",
                 "https://i2.lensdump.com/i/RLJMaZ.gif",
                 "https://i.lensdump.com/i/RLJokP.gif"];
    
    //Pick and random url from 0 to 3
    const randomIndex = Math.floor(Math.random() * (urls.length));
    
    //Store the randomly picked url
    const randomUrl = urls[randomIndex];
    
    //Add the random url into the response data
    const responseData = {
        gif:{randomUrl},
    }
    //Stringify the json
    const jsonContent = JSON.stringify(responseData);
    res.send(jsonContent);
});

module.exports = app;