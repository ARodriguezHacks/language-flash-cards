import { FLASHCARD_CREATED } from "../constants/flashcard";

export const createFlashCard = (payload) => ({
  type: FLASHCARD_CREATED,
  payload,
});
