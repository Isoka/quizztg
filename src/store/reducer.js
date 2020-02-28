
// == Initial State
const initialState = {
  loading: true,
  lateralMenuOpen: false,
  regions: [],
  message: null,
};
// == Types
const TOGGLE_LATERAL_MENU = 'TOGGLE_LATERAL_MENU';
const CONTROLE_CHAMP = 'CONTROLE_CHAMP';


// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_LATERAL_MENU:
      return {
        ...state,
        lateralMenuOpen: !state.lateralMenuOpen,
      };
    case CONTROLE_CHAMP:
      return {
        ...state,
        [action.champ.name]: action.champ.value,
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: {
          type: action.category,
          header: action.header,
          message: action.message,
        },
      };
    case 'DELETE_ERROR':
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

// == Action Creators
export function toggleLateralMenuAction() {
  return {
    type: TOGGLE_LATERAL_MENU,
  };
}

export function controlChamp(name, value) {
  return {
    type: CONTROLE_CHAMP,
    champ: {
      name,
      value,
    },
  };
}

export function setIsConnected(status) {
  return {
    type: 'CHECK_AUTHENTICATE',
    authenticated: status,
  };
}

export function setError(category, header, message) {
  return {
    type: 'SET_ERROR',
    category,
    header,
    message,
  };
}

export function deleteError() {
  return {
    type: 'DELETE_ERROR',
  };
}

// == Selectors


// == Export
export default reducer;
