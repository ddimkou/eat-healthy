import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import NewsLetter from "./components/NewsLetter";

const App = () => {
  return (
    <div className="text-2xl text-red-400">
      <Hero />
      <Introduction />
      <NewsLetter />
    </div>
  );
};

export default App;
