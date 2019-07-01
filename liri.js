////////////////////////////////////////////
// Required Files
////////////////////////////////////////////
require("dotenv").config(); // User must provide their own
var keys = require("./keys.js");
var fs = require("fs");

////////////////////////////////////////////
// API Keys
////////////////////////////////////////////
var spotify = new Spotify(keys.spotify);

////////////////////////////////////////////
// Commandline Arguments
////////////////////////////////////////////
var inputLength = process.argv.length;
var command = process.argv[2];
var argument;


////////////////////////////////////////////
// Sanitize Data if user provides > 2 arguments
////////////////////////////////////////////
function sanitizeData() {
    argument = process.argv[3];
        for (var i = 4; i < inputLength; i++) {
            argument += "+" + process.argv[i];
        }
}

////////////////////////////////////////////
// Process user input from commandline
////////////////////////////////////////////
function processInput(input = command) {
    if (input === "concert-this") {
        queryBandsInTown();
    } else if (input === "spotify-this-song") {
        querySpotify();
    } else if (input === "movie-this") {
        queryOmdb();
    } else if (input === "do-what-it-says") {
        processRandomTxt();
    } else {
        console.log("Invalid selection");
    }
}

////////////////////////////////////////////
// Query the Bands In Town API for concert info
////////////////////////////////////////////
function queryBandsInTown() {
    var queryURL =
        "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
}

////////////////////////////////////////////
// Query the Spotify API for artist info
////////////////////////////////////////////
function querySpotify() {
    // Artist(s)
    // The song 's name
    // A preview link of the song from Spotify
    // The album that the song is from

}

////////////////////////////////////////////
// Query the OMDB API for movie info
////////////////////////////////////////////
function queryOmdb() {
    var queryUrl =
        "http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy";

    // Title of the movie.
    // Year the movie came out.
    // IMDB Rating of the movie.
    // Rotten Tomatoes Rating of the movie.
    // Country where the movie was produced.
    // Language of the movie.
    // Plot of the movie.
    // Actors in the movie.

}

////////////////////////////////////////////
// Process commands in Random.txt
////////////////////////////////////////////
function processRandomTxt() {

}