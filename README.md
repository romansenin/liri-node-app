# liri-node-app

LIRI is a Language Interpretation and Recognition Interface (kind of like Siri but using Language instead of Speech). It's a command line node app that takes in parameters and gives you back data.

### Obtaining a Spotify API key

- The Spotify API requires you sign up as a developer to generate the necessary credentials. You can follow these steps in order to generate a **client id** and **client secret**:

  - Step One: Visit <https://developer.spotify.com/my-applications/#!/>

  - Step Two: Either login to your existing Spotify account or create a new one (a free account is fine) and log in.

  - Step Three: Once logged in, navigate to <https://developer.spotify.com/my-applications/#!/applications/create> to register a new application to be used with the Spotify API. You can fill in whatever you'd like for these fields. When finished, click the "complete" button.

  - Step Four: On the next screen, scroll down to where you see your client id and client secret. Copy these values down somewhere, you'll need them to use the Spotify API used by this application.

### How to Set Up

1. Clone the repository or download the zip file.
2. Navigate to the repository on your local machine.
3. Create a .env file (this will be used by the dotenv package):

```
touch .env
```

4. Open the file in a text editor and place the following information into it:

```js
# Spotify API keys

SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret

```

### How to Run

There are four commands that the app recognizes:

1. `node liri.js concert-this <artist/band name here>`

   - This will search the Bands in Town Artist Events API for an artist and render the following information about each event to the terminal:

     - Name of the venue

     - Venue location

     - Date of the Event in MM/DD/YYYY format

      ![Concert This Command](./concert-this.gif)

2. `node liri.js spotify-this-song '<song name here>'`

   - This will show the following information about the song in your terminal/bash window

     - Artist(s)

     - The song's name

     - A preview link of the song from Spotify

     - The album that the song is from

   - If no song is provided then the program will default to "The Sign" by Ace of Base.

      ![Spotify This Song Command](./spotify-this-song.gif)

3) `node liri.js movie-this '<movie name here>'`

   - This will output the following information to your terminal/bash window:

     - Title of the movie.
     - Year the movie came out.
     - IMDB Rating of the movie.
     - Rotten Tomatoes Rating of the movie.
     - Country where the movie was produced.
     - Language of the movie.
     - Plot of the movie.
     - Actors in the movie.

   - If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

      ![Movie This Command](./movie-this.gif)

4) `node liri.js do-what-it-says`

   - Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

     - Edit the text in random.txt to test out the feature for concert-this, movie-this or spotify-this-songs.

     ![Do What It Says Command](./do-what-it-says.gif)
