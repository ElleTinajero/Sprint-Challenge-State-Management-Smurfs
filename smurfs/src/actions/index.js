export const getSmurf = (data) => {
    return {
        type: 'GET_SMURF',
        payload: data,
    }
}

export const addSmurf = (data) => {
    return {
        type: "ADD_SMURF",
        payload: data,
    }
}

export const deleteSmurf = (data) => {
    return {
        type: "DELETE_SMURF",
        payload: data,
    }
}