import { createStore, combineReducers } from "redux";
import search from './reducers/Search'
import results from './reducers/SetNewsResults'

const rootReducer = combineReducers({
    search: search,
    results: results
})

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;