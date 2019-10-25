/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals

function calculateAverageMovieRate(arrayOfMovies){
    const sumOfRatings = arrayOfMovies.reduce((accumulator, value, index, originalArray) => {
        return accumulator + arrayOfMovies[index].rate;
    }, 0);
    return sumOfRatings / arrayOfMovies.length;
    // return Number((sumOfRatings / arrayOfMovies.length).toFixed(2));
    // return Math.round(((sumOfRatings / arrayOfMovies.length)*100)/100);
}

// Solution
// function calculateAverageMovieRate(movies){
//   return movie.reduce((sum, movie) => + movie.rate / movies.length, 0);
// }



// Iteration 2: Drama movies - Get the average of Drama Movies

function calculateAverageDramaRate(arrayOfMovies){
    const dramaArray = arrayOfMovies.filter((movie, index) => {
        return (arrayOfMovies[index].genre.includes('Drama'));
    });
    if (dramaArray.length === 0){
        return 0;
    } else {
      return calculateAverageMovieRate(dramaArray); 
    }
}

// Solution
// function calculateAverageDramaRate(arrayOfMovies){
//   if (!arrayOfMovies.length){
//     return 0;
//   }

//   const dramaArray = arrayOfMovies.filter((movie, index) => {
//       return (arrayOfMovies[index].genre.includes('Drama'));
//   });
//   return calculateAverageMovieRate(dramaArray);
// }



// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

function orderByYear(arrayOfMovies){
  const moviesByYear = [...arrayOfMovies];
  moviesByYear.sort((movieA, movieB) => {
    if (movieA.year > movieB.year) {
      return 1;
    } else if (movieA.year < movieB.year){
      return -1;
    } else if (movieA.title.toLowerCase() > movieB.title.toLowerCase()) {
      return 1;
    } else if (movieA.title.toLowerCase() < movieB.title.toLowerCase()) {
      return -1;
    } else {
      return 0;
    }
  });
  return moviesByYear;
}

// Solution
// function orderByYear(arrayOfMovies){
//   return [ ...arrayOfMovies ].sort((movieA, movieB) => {
//     if (movieA.year > movieB.year) {
//       return 1;
//     } else if (movieA.year < movieB.year){
//       return -1;
//     } else if (movieA.title.toLowerCase() > movieB.title.toLowerCase()) {
//       return 1;
//     } else if (movieA.title.toLowerCase() < movieB.title.toLowerCase()) {
//       return -1;
//     } else {
//       return 0;
//     }
//   });
// }


// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function countSpielbergDramaMovies(arrayOfMovies){
  const spielbergMovies = arrayOfMovies.filter((movie, index) => {
    return (arrayOfMovies[index].director.includes('Steven Spielberg') && arrayOfMovies[index].genre.includes('Drama'));
  });
  return spielbergMovies.length;
}


// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arrayOfMovies){
  const moviesByTitle = [...arrayOfMovies];
  moviesByTitle.sort((movieA, movieB) => {
    if (movieA.title.toLowerCase() > movieB.title.toLowerCase()) {
      return 1;
    } else if (movieA.title.toLowerCase() < movieB.title.toLowerCase()) {
      return -1;
    } else {
      return 0;
    }
  });
  //maximize the minimum
  let numberOfMoviesToReturn = Math.max(Math.min(moviesByTitle.length, 20), 0);
  const top20movieTitles = [];
  for (let i=0; i<numberOfMoviesToReturn; i++){
    top20movieTitles.push(moviesByTitle[i].title);
  }
  return top20movieTitles;
}


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
// This is still failing the test but I have no idea why. I can't see anything wrong...

// function turnHoursToMinutes(arrayOfMovies){
//   const arrayOfMoviesInMinutes = arrayOfMovies.map((movie, index) => {
//     const auxiliaryArray = arrayOfMovies[index].duration.split(" ");
//     let hours = isNaN(parseInt(auxiliaryArray[0], 10)) ? 0 : parseInt(auxiliaryArray[0], 10) * 60;
//     let minutes = isNaN(parseInt(auxiliaryArray[1], 10)) ? 0 : parseInt(auxiliaryArray[1], 10);
//     let timeInMinutes = hours + minutes;
//     movie.duration = timeInMinutes;
//     console.log()
//     return movie;
//   });
//   return arrayOfMoviesInMinutes;
// }

function turnHoursToMinutes(arrayOfMovies){
  const arrayOfMoviesInMinutes = arrayOfMovies.map((movie, index) => {
    let hours = 0;
    let minutes = 0;
    const auxiliaryArray = arrayOfMovies[index].duration.split(" ");
    // console.log(auxiliaryArray);
    if (auxiliaryArray[0].includes('h')){
      hours = isNaN(parseInt(auxiliaryArray[0], 10)) ? 0 : parseInt(auxiliaryArray[0], 10) * 60;
      minutes = isNaN(parseInt(auxiliaryArray[1], 10)) ? 0 : parseInt(auxiliaryArray[1], 10);
    } else {
      hours = 0;
      minutes = isNaN(parseInt(auxiliaryArray[0], 10)) ? 0 : parseInt(auxiliaryArray[0], 10);
    }
    let timeInMinutes = hours + minutes;
    movie.duration = timeInMinutes;
    return movie;
  });
  return arrayOfMoviesInMinutes;
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
