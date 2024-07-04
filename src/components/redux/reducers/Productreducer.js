export const initial = {products : []} ;

export const getProductsReducers = (state = initial,action)=>{
    switch(action.type){
        case "SUCCESS_GET_PRODUCTS":
            console.log(action.payload,"reducer");
            // return {products:action.payload}
            return {...state, products:action.payload}
        case "FAIL_GET_PRODUCTS":
            return {error:action.payload}
        default : return state
    }
}