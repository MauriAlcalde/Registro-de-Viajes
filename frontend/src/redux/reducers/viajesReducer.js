const initialState = {
    
}

const viajesReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'cargar_viaje':
                return{
                    ...state,
                    ...action.payload,
                    
                }   
        default: 
            return state
    }
}

export default viajesReducer