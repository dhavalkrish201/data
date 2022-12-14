import { rootRef } from "../../firebase";
export const GET_SONGS_START = "GET_SONGS_START";
export const GET_SONGS_SUCCESS = "GET_SONGS_SUCCESS";
export const GET_SONGS_FAIL = "GET_SONGS_FAIL";

export const ADD_SONGS = "ADD_SONGS";
export const FETCH_SONGS = "FETCH_SONGS";
export const UPDATE_SONGS = "UPDATE_SONGS";
export const DELETE_SONGS = "DELETE_SONGS";
export const SONG_FAIL = "SONG_FAIL";

const getSongsStart = () => ({
  type: "GET_SONGS_START",
});

const getSongsSuccess = (songs) => ({
  type: "GET_SONGS_SUCCESS",
  payload: songs,
});

const getSongsFail = () => ({
  type: "GET_SONGS_FAIL",
});

const addSongs = (usersongs) => ({
  type: "ADD_SONGS",
  payload: usersongs,
});

const fetchSongs = (usersongs) => ({
  type: "FETCH_SONGS",
  payload: usersongs,
  loading: false,
});

const updateSongs = (user) => ({
  type: "UPDATE_SONGS",
  payload: user,
});

const deleteSongs = (usersongs) => ({
  type: "DELETE_SONGS",
  payload: usersongs,
});

const songsFail = (error) => ({
  type: "SONG_FAIL",
  payload: error,
});

// export const songInitiate = () => async (dispatch, action) => {
//   try {
//     let res = await db.collection("SongsDetails").get();
//     console.log("res", res);
//     dispatch(fetchSongs());
//   } catch (error) {
//     console.log("error", error);
//     dispatch(songsFail());
//   }
// };

export const addInitiate = (project) => {
  return (dispatch, { getFireStore }) => {
    const firestore = getFireStore();
    firestore
      .collection("SongsDetails")
      .add({
        ...project,
        song: "Ram",
        singer: "Sonu Nigam",
        music: "javed ali",
        lyrics: "dhaval",
        movie: "Jay shree krishna",
      })
      .then(() => {
        dispatch(addSongs(project));
      })
      .catch((error) => {
        dispatch(songsFail(error));
      });
  };
};

export const getSongs = () => {
  return function (dispatch) {
    dispatch(getSongsStart());
    rootRef.child("songs").on("value", (snapshot) => {
      try {
        if (snapshot.val() !== null) {
          dispatch(getSongsSuccess(snapshot.val()));
        } else {
          dispatch(getSongsSuccess(snapshot.val()));
        }
      } catch (error) {
        dispatch(getSongsFail(error));
      }
    });
  };
};
