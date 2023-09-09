const movie1 = {
name : "scream",
img : "https://upload.wikimedia.org/wikipedia/en/2/24/Scream2022film.jpeg"
}
let movie2 = {
name :"Spider-Man",
img : "https://www.escapistmagazine.com/wp-content/uploads/2023/07/miles-morales-continuity-crisis-mom-dad-ultimate-universe-dead.jpg?fit=1400%2C788"

}
const movie3 = {
name : "oppenheimer",
img: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg"
}

let movies = []

movies.push(movie1);
movies.push(movie2);
movies.push(movie3);

let movieContainer = document.getElementById("container");


movies.forEach(movie => {
    movieContainer.innerHTML += `
    <div class="movie">
    <img src="${movie.img}" alt="movie picture" />
    <h2>${movie.name}</h2>
    </div>
   `; 
});