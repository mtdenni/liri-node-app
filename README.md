# liri-node-app

## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
  * [Examples](#examples)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)

## About The Project
LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.  


![Liri][product-screenshot]

### Built With
* JavaScript
* [Node.js](https://nodejs.org/en/)
* [npm](https://www.npmjs.com/)
* [Axios](https://www.npmjs.com/package/axios)
* [Moment.js](https://www.npmjs.com/package/moment)
* [OMDB API](http://www.omdbapi.com/)
* [Node Spotify API](https://www.npmjs.com/package/node-spotify-api)
* [Bands in Town Artist Events API](http://www.artists.bandsintown.com/bandsintown-api)
* [DotEnv](https://www.npmjs.com/package/dotenv)

## Getting Started

### Prerequisites
* [Node.js](https://nodejs.org/en/)
* [npm](https://npmjs.com/getnpm)
* [Spotify API Client ID and Client Secret](https://developer.spotify.com/documentation/general/guides/app-settings/)

### Installation
1. Clone the repo
```sh
git clone https:://github.com/miketdennison/liri-node-app.git
```

2. Make a JavaScript file named `keys.js`.

* Inside keys.js your file will look like this:

```js
exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};
```

3. Next, create a file named `.env`, add the following to it, replacing the values with your API keys (no quotes) once you have them:

```js
# Spotify API keys

SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret

```

4. Install NPM packages in root directory
```sh
npm install
```

## Usage

1. `node liri.js concert-this <artist/band name here>`

   * This will search the Bands in Town Artist Events API for an artist and render the following information about each event to the terminal:

     * Name of the venue
     * Venue location
     * Date of the Event and Time

2. `node liri.js spotify-this-song '<song name here>'`

   * This will show the following information about the song in your terminal/bash window

     * Artist(s)
     * The song's name
     * A preview link of the song from Spotify
     * The album that the song is from

   * If no song is provided then your program will default to "The Sign" by Ace of Base.

3. `node liri.js movie-this '<movie name here>'`

   * This will output the following information to your terminal/bash window:

     ```
       * Title of the movie.
       * Year the movie came out.
       * IMDB Rating of the movie.
       * Rotten Tomatoes Rating of the movie.
       * Country where the movie was produced.
       * Language of the movie.
       * Plot of the movie.
       * Actors in the movie.
     ```

   * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

4. `node liri.js do-what-it-says`

   * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

     * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.

5. In addition to logging the data to terminal, `log.txt` will also append any data displayed from terminal.


### Examples
1. `node liri.js concert-this <artist/band name here>`
  ![Liri][concert-screenshot]

2. `node liri.js spotify-this-song '<song name here>'`
  ![spotify][spotify-screenshot]

3. `node liri.js movie-this '<movie name here>'`
  ![omdb][movie-screenshot]

4. `node liri.js do-what-it-says`
  ![random-txt][random-screenshot]

5. In addition to logging the data to terminal, `log.txt` will also append any data displayed from terminal.
  ![log-txt][log-screenshot]

## Contact

Michael Dennison - [LinkedIn](https://linkedin.com/in/michaeltdennison) - miketdennison@gmail.com

Project Link: [https://github.com/miketdennison/liri-node-app](https://github.com/miketdennison/liri-node-app)

## Acknowledgements
* [npm](https://www.npmjs.com/)

<!-- IMAGES -->
[product-screenshot]: ./screenshots/intro.png
[concert-screenshot]: ./screenshots/concert-this.gif
[spotify-screenshot]: ./screenshots/spotify-this-song.gif
[movie-screenshot]: ./screenshots/movie-this.gif
[random-screenshot]: ./screenshots/do-what-it-says.gif
[log-screenshot]: ./screenshots/log-txt.gif

