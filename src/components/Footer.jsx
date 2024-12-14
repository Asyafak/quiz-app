import { FaHome, FaReact } from "react-icons/fa";
import { useDispatch } from "react-redux";

import { resetIndex } from "../store/slices/indexSlices";
import { changeDisplay } from "../store/slices/displayQuiz";
import { resetInputPlayer } from "../store/slices/inputPlayer";
import { resetScore } from "../store/slices/scorePlayer";

export default function Footer() {
  const dispatch = useDispatch();

  function handleToStart() {
    dispatch(resetIndex());
    dispatch(resetInputPlayer());
    dispatch(resetScore());
    dispatch(changeDisplay("start"));
  }

  return (
    <footer>
      <div className="flex w-full py-4 bg-teal-800">
        <div className="container">
          <nav className="flex justify-between items-center px-4">
            <div className="buttons flex gap-4">
              <button
                type="button"
                className="h-10 w-10 rounded-full bg-white flex hover:text-teal-400"
              >
                <FaReact className="m-auto text-xl text-inherit" />
              </button>
              <button
                type="button"
                onClick={handleToStart}
                className="h-10 w-10 rounded-full bg-white flex hover:text-teal-400"
              >
                <FaHome className="m-auto text-xl text-inherit" />
              </button>
            </div>
            <h2 className="font-bold text-xl text-teal-50 md:text-2xl">
              Create by: Ahmaf
            </h2>
          </nav>
        </div>
      </div>
    </footer>
  );
}
