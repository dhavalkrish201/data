const initialState = {
  songs: {},
  loading: false,
  error: null,
};

const songsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_SONGS_START":
      return {
        ...state,
        loading: true,
      };

    case "GET_SONGS_SUCCESS":
      return {
        ...state,
        loading: false,
        songs: action.payload,
      };

    case "GET_SONGS_FAIL":
      return {
        ...state,
        loading: false,
        songs: action.payload,
      };

    case "ADD_SONGS":
      return {
        ...state,
        songs: action.payload,
      };
    case "FETCH_SONGS":
      return {
        ...state,
        songs: action.payload,
      };

    case "UPDATE_SONGS":
      return {
        ...state,
        songs: action.payload,
      };

    case "DELETE_SONGS":
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

export default songsReducer;
