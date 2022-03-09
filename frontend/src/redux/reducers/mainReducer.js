import { combineReducers } from 'redux'
import usersReducer from './usersReducer'
import viajesReducer from './viajesReducer'

const mainReducer = combineReducers({
    usersReducer,
    viajesReducer

})

export default mainReducer