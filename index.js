const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;


app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

let bongoGif;
let bookmarks = "";
let backgroundURL = "";
let searchProvider = "";
    
const main = async() =>{
    console.log("Fetching");
    const res = await fetch('https://raw.githubusercontent.com/maslindc2/startpage-cms/main/ListAlt.json').then(response => response.json()).then(json => {
        bongoGif = json.BongoGif;
        bookmarks = json.Bookmarks;
        backgroundURL = json.Background;
        searchProvider = json.SearchProviders;
    }).then(console.log("Finished fetch"));
}

main().then(res =>{
    app.listen(PORT, () => {
        console.log(`Listening on PORT ${PORT}`);
    });

    app.get('/bongoGif', (req, res) =>{
        res.send(bongoGif);
    });
        
    app.get('/bookmarks', (req, res) =>{
        
        res.send(bookmarks);
    });
    
    app.get('/background', (req, res) => {
        res.send(backgroundURL);
    });
        
    app.get('/searchProvider', (req, res) =>{
        res.send(searchProvider);
    });
    module.exports = app;
})
