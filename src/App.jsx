import './App.css';
import Header from './components/header/header';
import MainSection from './components/main-section/main-section';
import { MainSectionBlock } from './components/main-section/main-section.e';

function App() {
  return (
    <>
      <section className='app'>
          <Header/>
          <MainSection/>
      </section>
    </>
  );
}

export default App;
