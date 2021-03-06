import axios from "axios"

//constantes
const initialData = {
    results: [],
}

const LIST_FILES_SUCCESS = 'LIST_FILES_SUCCESS';

const endpoint = 'http://localhost:3000/files/data';

//reducer
export default function fileReducer(state = initialData, action){
    switch(action.type){
        case LIST_FILES_SUCCESS:
            let data = {...state, ...action.payload};
            return data;
        default:
            return state;
    }
}

//actions
//Desplazarse a la primera pagina de los archivos
export const firstPageFilesAction = (fileName) => async (dispatch, getState) => {
    try { 
        let options = {};
        if(fileName){
            options.params = {"fileName":fileName };
        }
        const res = await axios.get(`${endpoint}`,options);
        dispatch({
            type: LIST_FILES_SUCCESS,
            payload: {results: res.data}
        });
    } catch(error){
        console.log(error);
    }
}