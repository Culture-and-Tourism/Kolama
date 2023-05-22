export const INITIAL_STATE = {
    // userId: JSON.parse(localStorage.getItem("currentUser"))?._id,
    name: "",
    location: "",
    // cover: "",
    // images: [],
    artCategory: "",
    // shortTitle: "",
    // shortDescc: "",
    title: "",
    phoneNo: "",
    email: "",
    description: "",
    // features: [],
    // price: 0.00,
  };
  
  export const pmReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_INPUT":
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
     
     
        case "ADD_IMAGES":
            return {
              ...state,
              cover: action.payload.cover,
              images: action.payload.images,
            };
  
      default:
        return state;
    }
  };
  