import { useState, useEffect } from "react";
import { createFlashCard } from "../actions/flashcardActions";
import { useDispatch, useSelector } from "react-redux";

function FlashCard() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  // const [flashcard, setFlashcard] = useState({});
  // const flashcards = useSelector((state) => state.flashcards);
  const dispatch = useDispatch();
  // console.log(flashcards);
  const onChange = (e) => {
    // console.log(e.target);
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else {
      setBody(e.target.value);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // setFlashcard({ title, body });
    dispatch(createFlashCard({ title, body }));
  };

  useEffect(() => {
    // console.log("Hello!");
    // dispatch(createFlashCard(flashcard));
    setTitle("");
    setBody("");
  }, [dispatch]);

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        name="title"
        value={title}
        onChange={onChange}
      />
      <label htmlFor="body">Description</label>
      <textarea
        id="body"
        name="body"
        onChange={onChange}
        value={body}
      ></textarea>
      <button type="submit">Create Flashcard</button>
    </form>
  );
}

export default FlashCard;
