let initialDetails = {
    status: "loading",
    data: null
}



export default (state = initialDetails, action) => {
    switch (action.type) {

        case "SET_USER_DETAILS": return { ...state, status: "fetched", data: action.payload }

        default: return state
    }
}
