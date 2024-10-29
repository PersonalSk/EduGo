const initialState: any = {

}


// callStore(ActionObject)
// dispatch(set_user(User))
const Reducer = (state = initialState, action: any) => {
    switch (action.type) {
        // case "SET_USER":
        //     return {
        //         ...state,
        //         user: action.payload
        //     };

        // case "SET_ACCESSTOKEN":
        //     return {
        //         ...state,
        //         accesstoken: action.payload
        //     }

        default:
            return state;
    }
}

export default Reducer;