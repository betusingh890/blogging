import { combineReducers, createStore, Redux } from "redux";

function LogInReducer(state = "LoggedOut"){
    switch (state.type) {
        case "LogIn" :
            return "LoggedIn";
        case "LogOut" : 
            return "LoggedOut";
        default:
             return state;
    }
}

function UserNameReducer(state = ""){
    switch (state.type) {
        case "SetUserName" :
            return state.payload;
        case "RemoveUserName" :
            return null;
        default :
            return state;
    }
}

const rootReducer = combineReducers({
    isLoggedIn : LogInReducer,
    UserName : UserNameReducer,
});

const Store = createStore(rootReducer);

export default Store

