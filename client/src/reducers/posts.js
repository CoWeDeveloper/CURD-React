

export default (posts = [], action)=>{
    switch(action.type){
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...posts, action.payload]; //(old/inital posts, new post)
            default:
            return posts;
    }
} 
