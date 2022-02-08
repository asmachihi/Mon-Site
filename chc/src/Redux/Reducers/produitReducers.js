import {
  GET_PRODUITS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  PLUS,
  MOINS,
  DELETE_PRODUIT,
  AJOUT_PRODUIT,
} from "../Constants/produitTypes";

const initState = {
  produits: [],
  quantite: 0,
  paniers: [],
};

const produitReducers = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_PRODUITS:
      return {
        ...state,
        produits: payload,
      };
    case DELETE_PRODUIT:
      return {
        ...state,
        produits: payload,
      };
    case AJOUT_PRODUIT:
      return {
        ...state,
        produits: payload,
      };
    case ADD_TO_CART:
      return {
        ...state,
        paniers: [...state.paniers, payload],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        paniers: state.paniers.filter((x) => x._id === payload),
      };
    case PLUS:
      return {
        ...state,
        quantite: state.quantite + payload,
      };
    case MOINS:
      return {
        ...state,
        quantite: state.quantite - 1,
      };
    default:
      return state;
  }
};

export default produitReducers;
