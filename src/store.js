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
    default:
      throw Error('Unknown action.');
  }
}

export const fetchPlanets = async (dispatch) => {
  try {
    const response = await fetch("https://swapi.dev/api/planets/")
    const data = await response.json()
    console.log(data.results)
    dispatch({ type: 'load_planets', payload: data.results });
  } catch (error) {
    console.log(error)
  }
}

export const fetchCharacters = async (dispatch) => {
  try {
    const response = await fetch("https://swapi.dev/api/people/")
    const data = await response.json()
    console.log(data.results)
    dispatch({ type: 'load_characters', payload: data.results });
  } catch (error) {
    console.log(error)
  }
}