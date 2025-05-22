import { DynamicObject } from "../../Types/dynamicObjectType";

const initialState: {dobj : DynamicObject} = {
    // role: "",
    // accesstoken: "",
    dobj: {
        role: "",
        email: "",
        // token: "",
        something : [],
        anyobject : {}
    }
}


// callStore(ActionObject)
// dispatch(set_user(User))
const Reducer = (state = initialState, action: any) => {
    switch (action.type) {

        // case "SET_ROLE":
        //     return {
        //         ...state,
        //         role: action.payload
        //     };

        // case "SET_EMAIL":
        //     return {
        //         ...state,
        //         role: action.payload
        //     }
    

        // case "SET_USER":
        //     return {
        //         ...state,
        //         user: action.payload
        //     };

        case "SET_DYNAMICOBJECT":
            return {
                ...state,
                dobj: {
                    ...state.dobj,
                    ...action.payload,
                }
            };

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