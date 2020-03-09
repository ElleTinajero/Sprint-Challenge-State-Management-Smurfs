const initialState = {
    smurfs: [
        {
          name: "Brainey",
          age: 200,
          height: "5cm",
          id: 0
        }
      ]
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "GET_SMURF":
            return { smurfs: action.payload };
        case "ADD_SMURF":
            return { smurfs: action.payload };
        case "DELETE_SMURF": 
            return { smurfs: action.payload };
        default:
            return state;
    }
}

export default reducer;