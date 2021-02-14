import { FLASHCARD_CREATED } from "../constants/flashcard";

const initialState = {
  flashcards: [
    { title: "Test", body: "This is a test" },
    { title: "Test2", body: "This is another test" },
  ],
  created: false,
};

const flashCardReducer = (state = initialState, action) => {
  console.log(state);
  console.log(action.payload);
  switch (action.type) {
    case FLASHCARD_CREATED:
      return {
        ...state,
        flashcards: [...state.flashcards, action.payload],
        created: !state.created,
      };
    default:
      return state;
  }
};

export { flashCardReducer };
