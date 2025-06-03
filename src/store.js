export const initialStore=()=>{
  return{
    characterList: [],
    planetList: [],
    vehicleList: [],
    favoriteList: [],

    character: {
      uid: null,
      name: '',
      url: '',
      image: '',
      description: '',
      gender: '',
      eye_color: '',
      skin_color: '',
      hair_color: '',
      height: '',
      mass: '',
      homeworld: '',
    },
    planet: {
      uid: null,
      name: '',
      url: '',
      image: '',
      description: '',
      climate: '',
      terrain: '',
      population: '',
      diameter: '',
      rotation_period: '',
      orbital_period: '',
      gravity: '',
      surface_water: '',

    },
    vehicle: {
      uid: null,
      name: '',
      url: '',
      image: '',
      description: '',
      model: '',
      manufacturer: '',
      cost_in_credits: '',
      max_atmosphering_speed: '',
      crew: '',
      passengers: '',
      cargo_capacity: '',
      consumables: '',
    }
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'update_character_list':

      const characterList = action.payload

      return {
        ...store,
        characterList
      };

          case 'update_character_list_item':
      return {
        ...store,
        characterList: store.characterList.map(character =>
          character.name === action.payload.name ? { ...character, ...action.payload } : character
        )
      };
      case 'update_planet_list':
    
        const planetList = action.payload
    
        return {
          ...store,
          planetList
        };
    case 'update_vehicle_list':
      const vehicleList = action.payload

      return {
        ...store,
        vehicleList
      };

      case 'update_character':
      const character = action.payload
      return {
        ...store,
        character
      };

      case 'update_planet':
      const planet = action.payload
      return {
        ...store,
        planet
      }; 

      case 'update_vehicle':
      const vehicle = action.payload
      return {
        ...store,
        vehicle
      };

      case 'add_favorite':
        const favoriteList = action.payload;
      return {
          ...store,
          favoriteList
        };
      case 'remove_favorite':
        return {
          ...store,
          favoriteList: store.favoriteList.filter(
            fav => !(fav.uid === action.payload.uid))
        };


    default:
      throw Error('Unknown action.');
  }    

}
