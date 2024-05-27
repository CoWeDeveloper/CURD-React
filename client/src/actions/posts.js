import * as api from '../api'

// Action Creators are funtions that return actions
//  we add async because of dealing with redux thunk. It took some time
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        const action = { type: 'FETCH_ALL', payload: data };

        dispatch(action); 
    } catch (error) {
        console.log(error.message);
    }

}


export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post); // sending data to DBM

        dispatch({ type: 'CREATE', payload: data }); // sending our data to store
    } catch (error) {
        console.log(error);
    }
}