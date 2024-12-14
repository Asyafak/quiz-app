import { useDispatch } from "react-redux";
import { changeDisplay } from "../store/slices/displayQuiz";

export default function Start() {
  const dispatch = useDispatch();

  return (
    <section id="start" className="h-full">
      <div className="container h-full">
        <div className="flex flex-col h-full w-full items-center justify-center gap-6">
          <h1 className="font-bold text-6xl sm:text-8xl my-4 text-teal-400">
            Quiz App
          </h1>
          <button
            type="button"
            onClick={() => dispatch(changeDisplay("question"))}
            className="font-bold text-4xl py-4 px-6 shadow-lg bg-teal-400 rounded-xl text-slate-800 hover:opacity-70 hover:shadow-xl hover:text-teal-50 hover:scale-105 transition ease-in-out"
          >
            START
          </button>
          <p className="font-medium text-base text-slate-800">
            Dont let the setbacks define you <br /> let them be stepping to
            triumph
          </p>
        </div>
      </div>
    </section>
  );
}
