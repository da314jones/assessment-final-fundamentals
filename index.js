/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleMovies` variable below to gain access to an array of movies.

  Keep in mind that your functions must still have and use a parameter for accepting all movies.
*/
const exampleMovies = require("./movies");
// Do not change the line above.

/**
 * getAllMovieTitles()
 * -----------------------------
 * Returns all of titles from an array of movies. If the inputted `movies` array is empty, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string[]} An array of strings, which are movie titles.
 *
 * EXAMPLE:
 *  getAllMovieTitles(movies);
 *  //> [
      "Toy Story 4",
      "Inside Out",
      "Coco",
      "Incredibles 2",
      "Moana",
      "How to Train Your Dragon",npm test
      "Paddington",
      "The Lion King",
      "Fantasia",
      "James and the Giant Peach",
    ];
 */
function getAllMovieTitles(movies) {
  let allMovies = [];
  for (const movie of movies) {
    allMovies.push(movie.title) 
    }
    return allMovies
  }
  


/**
 * getHighestMetascore()
 * -----------------------------
 * Returns the highest `metascore` among all movies. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The highest `metascore` of all movies.
 *
 * EXAMPLE:
 *  getHighestMetascore(movies);
 *  //> 96
 */
function getHighestMetascore(movies) {
  let highMeta = 0;
  for (const movie of movies) {
    if (+(movie.metascore > highMeta)) {
      highMeta = +(movie.metascore)
    }    
  }
  return highMeta
  }


/**
 * getAverageIMDBRating()
 * -----------------------------
 * Averages all of the IMDB ratings from all movies and returns it, as a number. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The average IMDB rating across all movies.
 *
 * EXAMPLE:
 *  getAverageIMDBRating(movies);
 *  //> 7.76
 */
function getAverageIMDBRating(movies) {
  let movieAvg = 0;
  for (const movie of movies) {
    movieAvg += (+(movie.imdbRating / movies.length))
     }
  return movieAvg
}





// function getAverageIMDBRating(movies) {}
//   const imdbs = movies.map(movie => movie.imdbRating).filter(rating => rating > 0);

//   if (imdbs.length === 0) {
//     return 0;
//   }

//   const averageRating = imdbs.reduce((sum, rating) => sum + rating) / imdbs.length;
//   return +averageRating.toFixed(2);
// }
// // let imdbs = [];
// //   for (const movie of movies) {
// //     if (movie.imdbRating) {
// //       imdbs.push(movie.imdbRating)
// //     }
// // // Number.filter(imdbs > 0)
// //   } if (imdbs.length === 0) {
// //     return 0;
// //   } averageRating = 0;
// //     for (const imdb of imdbs) {
// //    averageRating += imdb
// //   }
// //   return +(averageRating) / imdbs.length
// // }



/**
 * countByRating()
 * -----------------------------
 * Returns an object where the keys are movie ratings and the values are the number of movies in the array with that rating. If the inputted `movies` array is empty, return `{}`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {Object} An object where keys are movie ratings (e.g. "PG") and the values are how many movies in the array have that rating (e.g. 7).
 *
 * EXAMPLE:
 *  countByRating(movies);
 *  //> { G: 3, PG: 7 }
 */


function countByRating(movies) {
  count = {};
  for (let i = 0; i < movies.length; i++) {
    if (count[movies[i].rated]) {
      count[movies[i].rated] += 1
    }
    else {
      count[movies[i].rated] = 1
    }
  }
    return count
  }
/**
 * findById()
 * -----------------------------
 * Returns a movie object from an array of objects based on the ID. If the inputted `movies` array is empty or the ID does not match any movie, return `null`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} id - A unique `imdbID`.
 * @returns {Object|null} The movie object with the matching `imdbID`.
 *
 * EXAMPLE:
 *  findById(movies, "tt1979376");
 *  //> {
      // Toy Story 4
    };
 */



function findById(movies, id) {
  for (const movie of movies) {
    if (movie.imdbID === id) {
      return movie
    }
  }
  return null
}

/**
 * filterByGenre()
 * -----------------------------
 * Returns all movie objects with a matching genre. Case-insensitive. If the inputted `movies` array is empty or no movies match the inputted `genre`, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} genre - The genre of a movie. (e.g. "Fantasy")
 * @returns {Object[]} An array of movies where at least one of the genres matches the `genre` inputted.
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Mystery");
 *  //> [
      {
        // Coco
      }
    ]
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Horror")
 *  //> []
 */


function filterByGenre(movies, genre) {
  let filtered = []
  for (const movie of movies){
    if(movie.genre.toUpperCase().includes(genre.toUpperCase())) {
      filtered.push(movie)
    }
  }
  return filtered
}


/**
 * getAllMoviesReleasedAtOrBeforeYear()
 * -----------------------------
 * Returns all movie objects with a `released` year equal to or less than the given year.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} year - A year as a number. (e.g. 2000)
 * @returns {Object[]} An array of movies where the `released` year is equal to or less than the inputted year.
 *
 * EXAMPLE:
 *  getAllMoviesReleasedAtOrBeforeYear(movies, 2000);
 *  //> [
      {
        // The Lion King
      },
      {
        // Fantasia
      },
      {
        // James and the Giant Peach
      }
    ];
 */


function getAllMoviesReleasedAtOrBeforeYear(movies, year) {
let moviesAtOr =[];
for (const movie of movies) {
    if (Number(movie.released.slice(7, 11)) <= year) {
      moviesAtOr.push(movie)
    }
}
return moviesAtOr
}

/**
 * getBiggestBoxOfficeMovie()
 * -----------------------------
 * Returns the name of the movie with the highest `boxOffice` amount.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string} The name of the movie that made the most money at the box office.
 *
 * EXAMPLE:
 *  getBiggestBoxOfficeMovie(movies);
 *  //> "Incredibles 2"
 */



function getBiggestBoxOfficeMovie(movies) {
  let bigBoxOffice = 0;
  let bigBoxMov = null
  if (movies.length === 0) {
    return null
  }
  for (const movie of movies) {
    if (parseInt((movie.boxOffice).replace(/,/g, '').slice(1)) > bigBoxOffice) {
      bigBoxOffice = (parseInt((movie.boxOffice).replace(/,/g, '').slice(1)));
      bigBoxMov = movie.title
    }
  }
  return bigBoxMov
}

// Do not change anything below this line.
module.exports = {
  getAllMovieTitles,
  getHighestMetascore,
  getAverageIMDBRating,
  countByRating,
  findById,
  filterByGenre,
  getAllMoviesReleasedAtOrBeforeYear,
  getBiggestBoxOfficeMovie,
};
