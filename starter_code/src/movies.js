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


// Iteration 2: Drama movies - Get the average of Drama Movies

function calculateAverageDramaRate(arrayOfMovies){
    const dramaArray = arrayOfMovies.filter((movie, index) => {
        return (arrayOfMovies[index].genre.includes('Drama'));
    });
    if (Number(dramaArray) === 0){
        return 0;
    } else {
      return calculateAverageMovieRate(dramaArray); 
    }
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
