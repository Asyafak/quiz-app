import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ButtonPages from "../components/buttonPages";

import { fetchQuiz } from "../store/thunk/quizThunk";

import { GoCheckCircle, GoXCircle } from "react-icons/go";

export default function Review() {
  const dispatch = useDispatch();

  const quiz = useSelector((state) => state.quiz.data);
  const index = useSelector((state) => state.pages.index);
  const inputsPlayer = useSelector((state) => state.input.options);

  useEffect(() => {
    dispatch(fetchQuiz());
  }, []);

  return (
    <section id="review" className="h-full">
      <div className="container h-full overflow-y-scroll flex items-center flex-col">
        <div className="flex flex-col min-w-80 lg:w-1/2 h-full gap-6 items-center justify-center px-6 sm:px-0">
          {quiz.length > index && (
            <>
              <h2 className="font-bold text-2xl text-center my-4 text-teal-400 md:text-4xl">
                {quiz[index].question}
              </h2>

              <div
                className={`flex h-20 w-full p-4 bg-teal-400 gap-2 rounded-lg text-teal-50 shadow-lg`}
              >
                <h3>
                  {inputsPlayer[index] && inputsPlayer[index].answer + ". "}
                </h3>
                <p className="text-start">
                  {inputsPlayer[index]
                    ? quiz[index].options[inputsPlayer[index].answer]
                    : "you did not input your answer"}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-bold text-4xl text-center my-4 text-teal-400">
                  {inputsPlayer[index] &&
                  quiz[index].answer === inputsPlayer[index].answer
                    ? "Correct"
                    : "Incorrect"}
                </span>
                {inputsPlayer[index] &&
                quiz[index].answer === inputsPlayer[index].answer ? (
                  <GoCheckCircle className="text-4xl text-green-400" />
                ) : (
                  <GoXCircle className="text-4xl text-red-400" />
                )}
              </div>

              <p className="font-medium text-base text-slate-800 md:text-lg">
                The answer is: {quiz[index].options[quiz[index].answer]}
              </p>
            </>
          )}
        </div>
        <ButtonPages />
      </div>
    </section>
  );
}
