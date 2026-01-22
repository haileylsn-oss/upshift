
import Progress from "./components/Progress/Progress";
import Eco from "./components/Eco/Eco";
import ConnectorApp from "./components/Connect/ConnectorApp";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";

const App = () => {
  return (
    <>
      <div className=" mx-auto pb-24  border-b-2 border-gray-600">
        
        
          <Hero />
     
      </div>
      <div className="">
        <Progress />
      </div>

      
        <Footer />

    </>
  );
};

export default App;
