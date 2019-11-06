async function Fetch(name) {
  const response = await fetch(
    `http://www.omdbapi.com/?i=tt3896198&apikey=6e8941d3&s=${name}`
  );
  return await response.json();
}
let count = 0;

function addMovie(name, url, id) {
  let card = document.createElement('div');
  card.className = 'card';
  const img = document.createElement('img');
  img.src = url;
  img.height = 250;
  img.innerHTML = 100;
  const mname = document.createElement('h3');
  mname.innerHTML = name;
  mname.style.color = 'white';
  const link = document.createElement('a');
  link.href = `https://www.imdb.com/title/${id}/`;
  link.innerHTML = 'know more > ';
  link.style.color = 'white';
  card.appendChild(img);
  card.appendChild(mname);
  card.appendChild(link);
  if (count < 4) {
    document.getElementById('cols').appendChild(card);
    count++;
  } else if (count < 8) {
    document.getElementById('colss').appendChild(card);
    count++;
  }
}

async function search() {
  const name = document.getElementById('movie').value;
  let data = Fetch(name);
  data = await data;
  document.getElementById('moviename').innerHTML = `Searched for ${name}`;
  const movies = data.Search;
  movies.forEach(movie => {
    addMovie(movie.Title, movie.Poster, movie.imdbID);
  });
}
