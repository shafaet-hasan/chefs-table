import Banner from "./components/Banner";
import Header from "./components/Header";
import OurRecipe from "./components/OurRecipe";


const App = () => {
  return (
    <div className="container mx-auto px-4">
      <Header></Header>
      <Banner></Banner>
      <OurRecipe></OurRecipe>
    </div>
  );
};

export default App;