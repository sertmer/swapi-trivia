export const fetchData = () => {
  return fetch('https://swapi.co/api/films/')
    .then(data => data.json())
    .then(movies => {
      const movieData = movies.results.map(movie => {
        const { characters, opening_crawl, release_date, title, episode_id } = movie;
        return fetchCharacterData(characters)
          .then(characters => ({title, release_date, opening_crawl, characters, episode_id}))
      })
      return Promise.all(movieData);
    })
  }

export const fetchCharacterData = (characters) => {
  const firstTen = characters.slice(0, 10)
  const charactersData = firstTen.map(character => {
    return fetch(character)
    .then(data => data.json())
    .then(characterData => {
      const { films, homeworld, name, species } = characterData;
      return fetchMovies(films)
        .then(films => ({name, films, species, homeworld}));
    })
    // .then(characterData => {
    //   let character = {
    //     name: characterData.name
    //   }
    //   return character
    // })
    .then(characterData => {
      const { films, homeworld, name, species } = characterData;
      return fetchHomeworld(homeworld)
        .then(homeworld => ({name, films, species, homeworld}));
    })
    .then(characterData => {
      const {films, homeworld, name, species } = characterData
      return fetchSpecies(species)
        .then(species => ({ name, films, species, homeworld, isFavorited: false }));
    })
  })
  return Promise.all(charactersData);
}

export const fetchMovies = (filmUrls) => {
  const movieData = filmUrls.map(film => {
    return fetch(film)
      .then(res => res.json())
      .then(film => { 
      let movie = film.title
      return movie
    })
  })
  return Promise.all(movieData);
}

export const fetchHomeworld = (homeworld) => {
  return fetch(homeworld)
    .then(res => res.json())
    .then(homeworld => {
      const { name, population } = homeworld
      return [name, population];
    })
}

export const fetchSpecies = (species) => {
    return fetch(species)
      .then(res => res.json())
      .then(species => {
        const { name } = species;
        return name;
      })
      .catch(err => console.log(`Error fetching species: ${err}`));
}