export const LogInAction = () => {
    return {
        type : "LogIn"
    }
}

export const LogOutAction =  () => {
    return {
        type : "LogOut"
    }
}

export const SetUserName = (userName) => {
    return {
        type : "SetUserName",
        payload : userName
    }
}


export const  RemoveUserName = () => {
    return {
        type : "RemoveUserName"
    }
}
