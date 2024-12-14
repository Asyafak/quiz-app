import { useDispatch, useSelector } from "react-redux";

import { changeDisplay } from "../store/slices/displayQuiz";

export default function Score() {
  const value = useSelector((state) => state.value);
  const dispatch = useDispatch();

  return (
    <section id="score" className="h-full">
      <div className="conteiner flex h-full flex-col items-center justify-center gap-4">
        <h1 className="font-bold text-4xl my-4 text-teal-400 md:text-6xl">
          Your Score
        </h1>
        <div className="flex h-52 w-52 rounded-full border-[14px] bg-teal-400 border-teal-800">
          <span className="m-auto font-bold text-9xl text-teal-950">
            {value.score}
          </span>
        </div>
        <div className="flex min-w-64 max-w-96 justify-between">
          <span className="font-semibold text-2xl text-green-400">
            true: {value.true}
          </span>
          <span className="font-semibold text-2xl text-red-400">
            false: {value.false}
          </span>
        </div>
        <button
          type="button"
          onClick={() => dispatch(changeDisplay("review"))}
          className="font-bold text-2xl sm:text-4xl py-4 px-6 shadow-lg bg-teal-400 rounded-xl text-slate-800 hover:opacity-70 hover:shadow-xl hover:text-teal-50 hover:scale-105 transition ease-in-out"
        >
          Review Answare
        </button>
      </div>
    </section>
  );
}
