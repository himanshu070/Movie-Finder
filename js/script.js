const loadApi = async ()=> {
    let input = document.getElementById("search-box");
    let url = "https://www.omdbapi.com/?i=tt3896198&apikey=16a47919&t=";
    let data = await fetch(url+input.value);
    let parsedData = await data.json();
    console.log(parsedData)

    let poster = document.getElementById("poster");
    poster.style.display = "block";
    let ratingString = ``
    for (let index = 0; index < parsedData.Ratings.length; index++) {
        ratingString+= parsedData.Ratings[index].Source + ` ` + parsedData.Ratings[index].Value + `<br>`   
    }

    poster.innerHTML = `<img class="poster-image" src=${parsedData.Poster} alt="poster">`

    let movieInformation = document.getElementById("movieInformation")
    movieInformation.style.display = "block"
    movieInformation.innerHTML = `<div style='overflow:auto;' class="movieInformation-card"
    <h4><span class="movie-title">${parsedData.Title}</span> (${parsedData.Year})</h4>
    <br> 
    <h4>⭐ ${parsedData.imdbRating} IMDb</h4>
    <br>
    <h4>Directed by ${parsedData.Director}</h4>
    <h4>${parsedData.Genre}</h4>
    <br>
    
    <br><br>
    
    <h4 class="movie-plot">${parsedData.Plot}</h4>
    <br>
    <h4>Cast: ${parsedData.Actors}</h4>
    <h4>Run Time ${parsedData.Runtime}</h4>
    <br>
    <h4>Some more ratings:</h4>
    <h4>${ratingString}</h4>
    </div>
    `
}
