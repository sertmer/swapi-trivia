import { fetchData, fetchCharacterData, fetchMovies, fetchHomeworld, fetchSpecies } from './fetchApis'

describe('fetchApis', () => {
  describe('fetchSpecies', () => {
    let mockResponse = {
      "name": "Hutt",
      "classification": "gastropod",
      "designation": "sentient",
      "average_height": "300",
      "skin_colors": "green, brown, tan",
      "hair_colors": "n/a",
      "eye_colors": "yellow, red",
      "average_lifespan": "1000",
      "homeworld": "https://swapi.co/api/planets/24/",
      "language": "Huttese",
      "people": [
          "https://swapi.co/api/people/16/"
      ],
      "films": [
          "https://swapi.co/api/films/3/",
          "https://swapi.co/api/films/1/"
      ],
      "created": "2014-12-10T17:12:50.410000Z",
      "edited": "2014-12-20T21:36:42.146000Z",
      "url": "https://swapi.co/api/species/5/"
  }

  beforeEach(()=> {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => {
          return Promise.resolve(mockResponse)
        }
      })
    })
  })

  it('should be passed the correct URL', () => {
    fetchSpecies('https://swapi.co/api/species/5')

    expect(window.fetch).toHaveBeenCalledWith('https://swapi.co/api/species/5')
  })

  it('should return an array of species', () => {
    expect(fetchSpecies('https://swapi.co/api/species/5')).resolves.toEqual(mockResponse)
  })
  })
})