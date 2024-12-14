import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ButtonPages from "../components/buttonPages";

import { addOptions } from "../store/slices/inputPlayer";

import { fetchQuiz } from "../store/thunk/quizThunk";

export default function Question() {
  const dispatch = useDispatch();

  const quiz = useSelector((state) => state.quiz.data);
  const index = useSelector((state) => state.pages.index);
  const inputsPlayer = useSelector((state) => state.input.options);

  useEffect(() => {
    dispatch(fetchQuiz());
  }, []);

  return (
    <section id="question" className="h-full overflow-y-scroll">
      <div className="container sm:h-full flex flex-col">
        <div className="flex flex-col h-full gap-6 items-center justify-center">
          {quiz.length > index && (
            <div className="px-10 sm:px-0">
              <h2 className="font-bold text-xl text-center my-4 text-teal-400 md:text-2xl">
                {quiz[index].question}
              </h2>
              <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {Object.keys(quiz[index].options).map((key) => (
                  <li key={key}>
                    <button
                      type="button"
                      onClick={() => dispatch(addOptions({ index, key }))}
                      className={`flex h-20 w-full p-4 bg-teal-400 gap-2 rounded-lg text-teal-50 shadow-lg cursor-pointer transition ease-in-out  ${
                        inputsPlayer[index] &&
                        inputsPlayer[index].answer === key
                          ? "scale-105 border-1 border-teal-800 bg-teal-600 shadow-xl"
                          : "hover:scale-105 hover:border hover:bg-teal-500 hover:shadow-xl"
                      } `}
                    >
                      <h3>{key}.</h3>
                      <p className="text-start">{quiz[index].options[key]}</p>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <ButtonPages />
      </div>
    </section>
  );
}
