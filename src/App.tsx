import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Service from "./components/service/Service";
import Start from "./components/star/Start";

const App = () => {
  return (
    <div>
      {/* header navigationbar */}
      <Header />
      {/* Hero section */}
      <Hero />
      {/* Start Section */}
      <Start />
      {/* service section */}
      <Service />
    </div>
  );
};

export default App;
