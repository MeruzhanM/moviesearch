const apiKey = 'https://www.omdbapi.com/?i=tt3896198&apikey=13ef6458';
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const results = document.getElementById('results');

searchBtn.addEventListener('click', async function () {
  const inputValue = searchInput.value;
  results.innerHTML = ''
  try {
    const response = await fetch(`${apiKey}&s=${inputValue}`)
    const data = await response.json();
    
    if (data.Search || data.Search.length > 0) {
      data.Search.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie')
        movieDiv.innerHTML = `
            <h2><a href="https://www.imdb.com/title/${movie.imdbID}/" target="_blank">${movie.Title}</a></h2>
            <img src="${movie.Poster}">
            <p>${movie.Year}</p>
          `
        results.appendChild(movieDiv)
      });
    } else {
      alert("Nothing could find")
    }
  } catch (error) {
    alert('Something went wrong');
  }

});

searchInput.addEventListener('keydown', function(enter) {
  if(enter.keyCode === 13) {
    searchBtn.click()
  }
})