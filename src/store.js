import { func } from "prop-types";

export const initialStore = () => {
  return {
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    planets: [],
    people: [],
    character: {},
    planet: {},
    favoritos: [],
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'add_task':

      const { id, color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };

    case 'load_planets': {
      return {
        ...store,
        planets: action.payload, // Guardamos los contactos en el estado
      };
    }

    case 'load_characters': {
      return {
        ...store,
        people: action.payload, // Guardamos los contactos en el estado
      };
    }
    case 'load_character': {
      return {
        ...store,
        character: action.payload, // Guardamos los contactos en el estado
      };
    }
    case 'load_planet': {
      return {
        ...store,
        planet: action.payload, // Guardamos los contactos en el estado
      };
    }

    //  Favoritos
    case 'add_favorito': {
      return {
        ...store,
        favoritos: [...store.favoritos, action.payload]
      }
    }
    case 'remove_favorito': {
      return {
        ...store,
        favoritos: store.favoritos.filter(favorito => favorito !== action.payload)
      }
    }
    default:
      throw Error('Unknown action.');
  }
}

// Fetch de planetas  
export const fetchPlanets = async (dispatch) => {
  try {
    const response = await fetch("https://swapi.dev/api/planets/")
    const data = await response.json()
    dispatch({ type: 'load_planets', payload: data.results });
  } catch (error) {
    console.log(error)
  }
}

// Fetch de planetas individual
export const fetchInfoPlanet = async (dispatch, id) => {
  try {
    const response = await fetch(`https://swapi.dev/api/planets/${id}/`)
    const data = await response.json()
    console.log(data)
    dispatch({ type: 'load_planet', payload: data });
  } catch (error) {
    console.log(error)
  }
}

// Fetch de personajes
export const fetchCharacters = async (dispatch) => {
  try {
    const response = await fetch("https://swapi.dev/api/people/")
    const data = await response.json()
    dispatch({ type: 'load_characters', payload: data.results });
  } catch (error) {
    console.log(error)
  }
}

// Fetch de personajes individual
export const fetchInfoCharacter = async (dispatch, id) => {
  try {
    const response = await fetch(`https://swapi.dev/api/people/${id}/`)
    const data = await response.json()
    console.log(data)
    dispatch({ type: 'load_character', payload: data });
  } catch (error) {
    console.log(error)
  }
}

// Agrega o elimina de favoritos
export const favorites = (dispatch, item, store) => {
  if (store.favoritos.includes(item)) {
    dispatch({ type: 'remove_favorito', payload: item });
  } else {
    dispatch({ type: 'add_favorito', payload: item });
  }
}