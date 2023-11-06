import Hero from './components/LandingPage/Hero';
import Cards from './components/LandingPage/Cards';
// import styles from './App.module.css';

const App = () => {
  console.log(import.meta.env.VITE_API);

  return (
    <>
      <Hero />
      <Cards />
    </>
  );
};

export default App;
