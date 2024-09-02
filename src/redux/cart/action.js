import CardActionTypes from "./action-types"

export const addProductToCart = (payload) => {
    return(
        {
            type: CardActionTypes.ADD_PRODUCT,
            payload,
        }
    )
}

export const removeProductFromCart = (payload) => {
    return (
        {
            type: CardActionTypes.REMOVE_RODUCT,
            payload,
        }
    )
}

export const increaseProductQuantity = (payload) => {
    return(
        {
            type: CardActionTypes.INCREASE_PRODUCT_QUANTITY,
            payload,
        }
    )
}

export const decreaseProductQuantity = (payload) => {
    return(
        {
            type: CardActionTypes.DECREASE_PRODUCT_QUANTITY,
            payload,
        }
    )
}