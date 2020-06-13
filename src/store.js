import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/rootReducer'
import { composeWithDevTools } from "redux-devtools-extension"

import thunk from 'redux-thunk'

const initialState = {}

const middleware = applyMiddleware(thunk)
export default createStore(
    rootReducer,
    initialState,
    composeWithDevTools(middleware)
)