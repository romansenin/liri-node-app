// Configure the .env file
require("dotenv").config();
// Include the keys.js spotify object
const keys = require("./keys");

const Spotify = require("node-spotify-api");
const spotify = new Spotify(keys.spotify);

// Include the axios npm package
const axios = require("axios");
const moment = require("moment");

const args = process.argv;
const command = args[2];

/// ????????

if (!command) {
}

const term = args.splice(3).join("+");

switch (command) {
  case "concert-this":
    concertThis();
    break;
  case "spotify-this-song":
    spotifyThisSong();
    break;
  case "movie-this":
    movieThis();
    break;
  case "do-what-it-says":
    break;
  default:
  //
}

function concertThis() {
  // Then run a request with axios to the OMDB API with the movie specified
  axios
    .get(
      "https://rest.bandsintown.com/artists/" +
        term +
        "/events?app_id=codingbootcamp"
    )
    .then(function(response) {
      console.log("-------------------------------");
      for (let i = 0; i < response.data.length; i++) {
        // console.log(response.data[i]);

        console.log(
          [
            "\nName of Venue: " + '"' + response.data[i].venue.name + '"',
            "Location: " +
              response.data[i].venue.city +
              ", " +
              response.data[i].venue.region +
              ", " +
              response.data[i].venue.country,
            "Date: " + moment(response.data[i].datetime).format("MM/DD/YYYY"),
            "-------------------------------"
          ].join("\n\n")
        );
      }
    })
    .catch(function(err) {
      console.log(err);
    });
}

function spotifyThisSong() {
  if (!term) {
    spotify
      .request("https://api.spotify.com/v1/tracks/0hrBpAOgrt8RXigk83LLNE") // "The Sign" by Ace of Base id
      .then(function(data) {
        console.log(
          [
            "-------------------------------",
            "Artist: " + data.artists[0].name,
            "Song: " + '"' + data.name + '"',
            "Preview: " + data.preview_url,
            "Album: " + data.album.name,
            "-------------------------------"
          ].join("\n\n")
        );
      })
      .catch(function(err) {
        console.error("Error occurred: " + err);
      });
  } else {
    spotify.search({ type: "track", query: term }, function(err, data) {
      if (err) {
        return console.log("Error occurred: " + err);
      }

      let artistArr = data.tracks.items[0].artists;

      let artists = artistArr[0].name;
      let artistString = "Artist: ";

      if (artistArr.length > 1) {
        for (let i = 1; i < artistArr.length; i++) {
          artists += artistArr[i].name += ", ";
        }
        artistString = "Artists: ";
      }

      console.log(
        [
          "-------------------------------",
          artistString + artists,
          "Song: " + '"' + data.tracks.items[0].name + '"',
          "Preview: " + data.tracks.items[0].preview_url,
          "Album: " + data.tracks.items[0].album.name,
          "-------------------------------"
        ].join("\n\n")
      );
    });
  }
}
