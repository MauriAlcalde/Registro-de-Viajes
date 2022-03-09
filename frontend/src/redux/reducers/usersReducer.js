const initialState = {
    user: false,
    rol: false,
}

const usersReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'signIn':
                return{
                    ...state,
                    ...action.payload,
                    
                }   

        case 'logout':
            return{
                ...state,
                user: false,
                rol: false,
            }
        default: 
            return state
    }
}

export default usersReducer