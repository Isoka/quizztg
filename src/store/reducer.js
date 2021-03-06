// == Initial State
const initialState = {
  iteration: 0,
  message: null,
  goodAnswers: 0,
  badAnswers: [],
  questions: [],
  team: 0,
  gameStarted: false,
  rues: [],
  answer: '',
  startTime: 0,
};
// == Types
const TOGGLE_LATERAL_MENU = 'TOGGLE_LATERAL_MENU';
const CONTROLE_CHAMP = 'CONTROLE_CHAMP';
const RESET_CHAMP = 'RESET_CHAMP';
const START_CHRONO = 'START_CHRONO';
const RESET_CHRONO = 'RESET_CHRONO';
const CHECK_AUTHENTICATE = 'CHECK_AUTHENTICATE';
const SET_ERROR = 'SET_ERROR';
const DELETE_ERROR = 'DELETE_ERROR';
const GAME_START = 'GAME_START';
const GAME_STOP = 'GAME_STOP';
const SET_QUESTIONS = 'SET_QUESTIONS';
const RESET_QUESTIONS = 'RESET_QUESTIONS';
const INCREMENT = 'INCREMENT';
const GOOD_ANSWER = 'GOOD_ANSWER';
const BAD_ANSWER = 'BAD_ANSWER';
const RESET_BAD_ANSWER = 'RESET_BAD_ANSWER';
const RELOAD = 'RELOAD';
const RESET_INCREMENT = 'RESET_INCREMENT';
const SET_TEAM = 'SET_TEAM';
const STOCK_RUES = 'STOCK_RUES';
const RESET_GOOD_ANSWER = 'RESET_GOOD_ANSWER';
const SET_TOTAL_TIME = 'SET_TOTAL_TIME';

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
        [action.name]: action.value,
      };
    case RESET_CHAMP:
      return {
        ...state,
        [action.name]: '',
      };
    case SET_ERROR:
      return {
        ...state,
        error: {
          type: action.category,
          header: action.header,
          message: action.message,
        },
      };
    case DELETE_ERROR:
      return {
        ...state,
        error: null,
      };
    case START_CHRONO:
      return {
        ...state,
        startTime: action.startTime,
      };
    case RESET_CHRONO:
      return {
        ...state,
        startTime: action.startTime,
      };
    case GAME_START:
      return {
        ...state,
        gameStarted: true,
      };
    case GAME_STOP:
      return {
        ...state,
        gameStarted: false,
      };
    case SET_QUESTIONS:
      return {
        ...state,
        questions: action.questions,
      };
    case RESET_QUESTIONS:
      return {
        ...state,
        questions: [],
      };
    case INCREMENT:
      return {
        ...state,
        iteration: action.iteration + 1,
      };
    case RESET_INCREMENT:
      return {
        ...state,
        iteration: 0,
      };
    case GOOD_ANSWER:
      return {
        ...state,
        goodAnswers: state.goodAnswers + 1,
      };
    case RESET_GOOD_ANSWER:
      return {
        ...state,
        goodAnswers: 0,
      };
    case BAD_ANSWER:
      return {
        ...state,
        badAnswers: action.badAnswers,
      };
    case RESET_BAD_ANSWER:
      return {
        ...state,
        badAnswers: action.badAnswers,
      };
    case RELOAD:
      return {
        ...state,
        reload: !state.reload,
      };
    case SET_TEAM:
      return {
        ...state,
        team: action.team,
      };
    case STOCK_RUES:
      return {
        ...state,
        rues: action.rues,
      };
    case SET_TOTAL_TIME:
      return {
        ...state,
        totalTime: action.totalTime,
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
    name,
    value,
  };
}

export function setIsConnected(status) {
  return {
    type: CHECK_AUTHENTICATE,
    authenticated: status,
  };
}

export function setError(category, MsgHeader, message) {
  return {
    type: SET_ERROR,
    category,
    MsgHeader,
    message,
  };
}

export function deleteError() {
  return {
    type: DELETE_ERROR,
  };
}

export function startChrono() {
  return {
    type: START_CHRONO,
    startTime: Date.now(),
  };
}

export function resetChrono() {
  return {
    type: RESET_CHRONO,
    startTime: 0,
  };
}

export function startGame() {
  return {
    type: GAME_START,
  };
}

export function stopGame() {
  return {
    type: GAME_STOP,
  };
}

export function setQuestions(questions) {
  return {
    type: SET_QUESTIONS,
    questions,
  };
}

export function resetQuestions() {
  return {
    type: RESET_QUESTIONS,
  };
}

export function increment(iteration) {
  return {
    type: INCREMENT,
    iteration,
  };
}

export function resetIncrement() {
  return {
    type: RESET_INCREMENT,
  };
}

export function setGoodAnswers() {
  return {
    type: GOOD_ANSWER,
  };
}

export function resetGoodAnswers() {
  return {
    type: RESET_GOOD_ANSWER,
  };
}

export function setBadAnswers(badAnswers) {
  return {
    type: BAD_ANSWER,
    badAnswers,
  };
}

export function resetBadAnswers() {
  return {
    type: RESET_BAD_ANSWER,
    badAnswers: [],
  };
}

export function reload() {
  return {
    type: RELOAD,
  };
}

export function setTeam(team) {
  return {
    type: SET_TEAM,
    team,
  };
}

export function stockRues(rues) {
  return {
    type: STOCK_RUES,
    rues,
  };
}

export function setTotalTime(time) {
  return {
    type: SET_TOTAL_TIME,
    totalTime: time,
  };
}

// == Selectors

// == Export
export default reducer;
