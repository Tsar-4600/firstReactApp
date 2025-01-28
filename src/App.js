import logo from './logo.svg';
import './App.css';
import Counter from './components/counter';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
        <Counter/>
        <Header />
        <Main/>
        <Footer/>

    </div>
  );
}

export default App;
