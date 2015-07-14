#An experiment with Backbone, Firebase and the [omdbAPI](http://www.omdbapi.com/)

This is an extremely simple application 
* written in backbone  
* uses the omdbAPI, which is an open movie Database API,
* uses the Firebase API, with the help of [backboneFire](https://github.com/firebase/backbonefire)

## Features
* fetches all the movies with the word "Lord" in their title
* It has two lists. The one on the left are new, unwatched movies, and on the right are movies already watched.
* The checkbox next to each movie marks if a movie is watched or not and then moves it in and out of the "watched" list
* finally clicking on a movie fetches more information about it and presents it bellow the two lists.

## Using the app
Navigate to the server folder and run node server.js. Then navigate to localhost:8001.

Or access them here:

* [App](https://piscine-choucroute-6594.herokuapp.com/)
* [Tests](https://piscine-choucroute-6594.herokuapp.com/tests/SpecRunner.html#)


** Please note that the omdbAPI can be slow at times. Refreshing seems to solve any intermediate problems ** 
