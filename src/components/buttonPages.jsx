import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";

import { useDispatch, useSelector } from "react-redux";

import {
  nextQuestion,
  prevQuestion,
  resetIndex,
} from "../store/slices/indexSlices";
import { changeDisplay } from "../store/slices/displayQuiz";
import { countScore } from "../store/slices/scorePlayer";

export default function ButtonPages() {
  const index = useSelector((state) => state.pages.index);
  const quiz = useSelector((state) => state.quiz.data);
  const inputsPlayer = useSelector((state) => state.input.options);
  const display = useSelector((state) => state.display);

  const dispatch = useDispatch();

  function handleCountScore() {
    dispatch(resetIndex());
    if (display.type === "review") {
      dispatch(changeDisplay("score"));
      return;
    }
    dispatch(countScore({ quiz, inputsPlayer }));
    dispatch(changeDisplay("score"));
  }

  return (
    <div className="container w-full flex justify-end my-4 gap-2 text-teal-50 px-4">
      {index > 0 && (
        <button
          type="button"
          onClick={() => dispatch(prevQuestion())}
          className="h-10 w-10 rounded-full bg-teal-800 flex justify-center items-center shadow hover:opacity-75 hover:shadow-md"
        >
          <GrLinkPrevious />
        </button>
      )}
      {index < quiz.length - 1 && (
        <button
          type="button"
          onClick={() => dispatch(nextQuestion())}
          className="h-10 w-10 rounded-full bg-teal-800 flex justify-center items-center shadow hover:opacity-75 hover:shadow-md"
        >
          <GrLinkNext />
        </button>
      )}

      {index === quiz.length - 1 && (
        <button
          type="button"
          onClick={handleCountScore}
          className="h-10 px-4 font-semibold rounded-full bg-teal-800 flex justify-center items-center shadow hover:opacity-75 hover:shadow-md"
        >
          <span>{display.type === "review" ? "Back To Score" : "Finish"}</span>
        </button>
      )}
    </div>
  );
}
