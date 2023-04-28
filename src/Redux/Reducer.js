var intialData = {
    name : "manish",
    products :[],
}

const basicReducer = (store = intialData, action) =>{
    if(action.type === "name"){
        return{
            ...store,
            name : action.username,
        }
    }else if(action.type === "products"){
        return {
            ...store,
            products : action.payload
        }
    }
    return store
   
}
export default basicReducer