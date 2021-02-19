import axios from 'axios';

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.

export const FETCH_SMURFS_REQUEST = 'FETCH_SMURFS_REQUEST';
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const ADD_SMURFS = 'ADD_SMURFS';


export const fetchSmurfRequest = () =>{
    return{
        type: FETCH_SMURFS_REQUEST,
        loading: true
    }
}

export const fetchSmurfFailure = (error) =>{
    return{
        type: FETCH_SMURFS_FAILURE,
        payload: error
    }
}

export const fetchSmurfSucess = (smurfs) =>{
    return{
        type: FETCH_SMURFS_SUCCESS,
        payload: smurfs
    }
}

export const addSmurf = (smurf) => {
    return{
        type: ADD_SMURFS,
        payload: smurf
    }
}

export const fetchSmurfs = () => {
    return(dispatch) => {
        dispatch(fetchSmurfRequest());
        axios.get("http://localhost:3333/smurfs")
             .then( res => {
                 const smurfs = res.data;
                 console.log(smurfs);
                 dispatch(fetchSmurfSucess(smurfs));
                }
             )
             .catch( err => {
                 const error = err.message;
                 dispatch(fetchSmurfFailure(error));
                }
             );
    }
}

export const postSmurf = (smurf) => {
    return(dispatch) => {
        axios.post("http://localhost:3333/smurfs", smurf)
             .then( res => {
                dispatch(fetchSmurfSucess(res.data))
                }
             )
             .catch( err => {
                 const error = err.response.data.Error;
                 console.log(err.response.data.Error);
                 dispatch(fetchSmurfFailure(error));
                }
             );
    }
}
