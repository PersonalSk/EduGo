import { DynamicObject } from "../../Types/dynamicObjectType";



/** call action which return action object that action object contain type and payload , 
 * the type will searched in the store means store(rootreducer)
 * the rootreducer contain reducer that having switch code accepting type and return the state based on the type
 * we call the reducer by using dispatch(action_object)
 * action_object is set_User(User)
*/
 

// export const set_User = (user : User) => {
//     return{
//         type : "SET_USER",
//         payload : user
//     };
// };

export const set_Dobj = (dobj : DynamicObject) => {
        return{
            type : "SET_DYNAMICOBJECT",
            payload : dobj
        };
};
 
// export const set_Email = (email:String) => {
//     return {
//         type : "SET_EMAIL",
//         payload : email
//     }
// }

// export const set_Role = (role : String) => {
//     return{
//         type : "SET_ROLE",
//         payload : role
//     };
// };

// export const set_Accesstoken = (accesstoken: String) => {
//     return {
//         type: "SET_ACCESSTOKEN",
//         payload: accesstoken
//     }
// }

