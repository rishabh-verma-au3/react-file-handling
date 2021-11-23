import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from 'redux-thunk';
import { loadPost, loadComment, loadPhoto, random } from "../reducers/methods";
import { createAsyncReducer } from "./reducers_store";
import { appReducer } from "./reducers_store";
const reducers = combineReducers({
    // posts_reducer,
    // comments_reducer,
    // photos_reducer,
    app:appReducer
})
const middleware = [loadComment, loadPhoto, loadPost, random, createAsyncReducer, ReduxThunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


// const appreduxstore = () => createStore(reducers,composeEnhancers(applyMiddleware(...middleware)))
// const store = appreduxstore()
const store = createStore(reducers,composeEnhancers(applyMiddleware(...middleware)))

store.subscribe(() => {
    // if(store.getState().action.indexOf('messanger') !== -1) {
    //     console.log('subscribed for counter actions', store.getState());
    // }
    // console.log(store.getState(),"store");
});

export {store};