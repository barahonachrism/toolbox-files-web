import axios from "axios"

//constantes
const initialData = {
    count: 0,
    next: null,
    previous: null,
    results: [],
    offset: 0,
    limit:20
}

const LIST_FILES_SUCCESS = 'LIST_FILES_SUCCESS';

const endpoint = 'http://localhost:3000/files/data';

//reducer
export default function fileReducer(state = initialData, action){
    switch(action.type){
        case LIST_FILES_SUCCESS:
            let data = {...state, ...action.payload};
            console.log('++++++++++++');
            console.log(data);
            return data;
        default:
            return state;
    }
}

//actions
//Desplazarse a la primera pagina de los archivos
export const firstPageFilesAction = (limit) => async (dispatch, getState) => {
    try { 
        const offset = 0;
        const res = await axios.get(`${endpoint}?offset=${offset}&limit=${limit}`);
        console.log('========================');
        console.log(res.data);
        dispatch({
            type: LIST_FILES_SUCCESS,
            payload: {results: res.data, offset: offset, limit: limit}
        });
    } catch(error){
        console.log(error);
    }
}

//Desplazarse a la siguiente pagina a la actual de la lista de archivos
export const nextPageFilesAction = () => async (dispatch, getState) => {
    try { 
        const {offset, count, limit} = getState().files;
        const next = offset + limit;

        if(next < count){
            const res = await axios.get(`${endpoint}?offset=${next}&limit=${limit}`);
            dispatch({
                type: LIST_FILES_SUCCESS,
                payload: {...res.data, offset: next}
            });
        }
        
    } catch(error){
        console.log(error);
    }
}

//Desplazarse a la pagina anterior a la actual de la lista de archivos
export const previousPageFilesAction = () => async (dispatch, getState) => {
    try { 
        const {offset, limit} = getState().files;
        const previous = offset - limit;

        if(previous >= 0){
            const res = await axios.get(`${endpoint}?offset=${previous}&limit=${limit}`);
            dispatch({
                type: LIST_FILES_SUCCESS,
                payload: {...res.data, offset: previous}
            });
        }
        
    } catch(error){
        console.log(error);
    }
}

//Desplazarse a la ultima a la actual de la lista de archivos
export const lastPageFilesAction = () => async (dispatch, getState) => {
    try { 
        const {count, limit} = getState().files;
        const last = (Math.ceil(count / limit) - 1) * limit;

        if(last >= 0){
            const res = await axios.get(`${endpoint}?offset=${last}&limit=${limit}`);
            dispatch({
                type: LIST_FILES_SUCCESS,
                payload: {...res.data, offset: last}
            });
        }
        
    } catch(error){
        console.log(error);
    }
}