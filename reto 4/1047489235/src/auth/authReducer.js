import { types } from '../types/types';

// const state = {
//     name: 'Archivaldo',
//     logged: true
// }

export const authReducer = ( state = {}, action ) => {
    switch ( action.type ) {
        default:
            return {logged: false};

        case types.login:
            return {
                name:action.payload.name,
                logged: true
            }

        case types.logout:
            return {
                logged: false
            }
    }

}