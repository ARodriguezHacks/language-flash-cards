// import { createFlashCard } from "../actions/flashcardActions";
import { FLASHCARD_CREATED } from "../constants/flashcard";

const initialState = {
  flashcards: [],
  created: false,
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case FLASHCARD_CREATED: {
      return {
        ...state,
        created: !state.created,
        // flashcards: [...state.flashcards, { name: "flashcard created" }],
      };
    }
    default:
      return state;
  }
};

export { mainReducer };
