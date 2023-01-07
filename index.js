const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

let requestedProvider = "";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post('/requestProvider', (req, res) =>{
    requestedProvider = req.body.providerCommand;
    if(requestedProvider == "!yt"){
        const message = {
            'Name': 'YouTube',
            'URL': 'https://www.youtube.com/results?search_query=',
        };
        return res.send(JSON.stringify(message));
    }else if(requestedProvider == "!wk"){
        const message = {
            'Name': 'Wikipedia',
            'URL': 'https://en.wikipedia.org/wiki/',
        };
        return res.send(JSON.stringify(message));
    }else if(requestedProvider == "!am"){
        const message = {
            'Name': 'Amazon',
            'URL': 'https://www.amazon.com/s?k=',
        };
        return res.send(JSON.stringify(message));
    }else if(requestedProvider == "!r"){
        const message = {
            'Name': 'Reddit',
            'URL': 'https://www.reddit.com/search/?q=',
        };
        return res.send(JSON.stringify(message));
    }else if(requestedProvider == "!g"){
        const message = {
            'Name': 'Search',
            'URL': 'https://www.google.com/search?q=',
        };
        return res.send(JSON.stringify(message));
    }else if(requestedProvider == "!dc"){
        const message = {
            'Name': 'Discogs',
            'URL': 'https://www.discogs.com/search/?q=',
        };
        return res.send(JSON.stringify(message));
    }else{
        const message = {
            'Name': 'Search',
            'URL': 'https://www.google.com/search?q=',
        };
        return res.send(JSON.stringify(message));
    }
    
});


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