import Header from "./components/Header";
import Footer from "./components/Footer";

import Start from "./pages/Start";
import Question from "./pages/Question";
import Score from "./pages/Score";
import Review from "./pages/Review";

import { useSelector } from "react-redux";

function App() {
  const display = useSelector((state) => state.display);

  return (
    <div className="flex flex-col h-screen">
      <Header />
      {display.type === "start" && <Start />}
      {display.type === "question" && <Question />}
      {display.type === "score" && <Score />}
      {display.type === "review" && <Review />}
      <Footer />
    </div>
  );
}

export default App;
