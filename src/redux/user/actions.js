import userActionTypes from "./action-types"


export const loginUser = (payload) => {
    return (
        {
            type: userActionTypes.LOGIN,
            payload
        }
    )
}

export const logoutnUser = (payload) => {
    return (
        {
            type: userActionTypes.LOGOUT,
        }
    )
}