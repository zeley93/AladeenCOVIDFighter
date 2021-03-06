export default (state, action) => {

    switch (action.type) {

        case 'REMOVE_PATIENT':

            return {
                ...state,
                patients: state.patients.filter(patient => patient.id !== action.payload)
            };

        case 'ADD_PATIENTS':

            return {
                ...state,
                patients: [...state.patients, action.payload]
            };

        case 'EDIT_PATIENT':

            const updatedPatient = action.payload;
            const updatedPatients = state.patients.map(patient => {
                if (patient.id === updatedPatient.id) {
                    return updatedPatient;
                }
                return patient;
            });
        
            return {
                ...state,
                patients: updatedPatients
            };

        case 'SET_CURRENT_USER':
            
            return {
                ...state,
                isAuthenticated: !!Object.keys(action.user).length,
                user: action.user
            };


        case 'ADD_ERROR':
            console.log(action.error);
            return {...state, message: action.error};

        case 'REMOVE_ERROR':
            return {...state, message: null};

        default:
            return state;
    }
}
