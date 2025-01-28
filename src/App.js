import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Counter from './components/counter';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';


function App() {
  // хук для показа main (1-ое задание)
  
  const [isShow, setIsShow] = useState(false);
  const changeShow = () => {
    if(!isShow){
      setIsShow(true);
    }
    else{
      setIsShow(false);
    }
  }
  
  // хук для смены класса квадрата (2-ое задание практической)

  const [isActive, setIsActive] = useState(false);
  const changeActiveColor = () =>{
    if(!isActive)
    {
      setIsActive(true);
    }
    else
    {
      setIsActive(false);
    }
  }

  let navlink_massive = [
    {title: 'Первая ссылка', href: 'http://vk.com'},
    {title: 'Вторая ссылка ссылка', href: 'http://ok.com'},
    {title: 'Третья ссылка ссылка ссылка', href: 'http://rutube.ru'},
  ];

  // const [navlink_massive, setNavlink_massive] = [
  //   {title: 'Первая ссылка', href: 'http://vk.com'},
  //   {title: 'Вторая ссылка ссылка', href: 'http://ok.com'},
  //   {title: 'Третья ссылка ссылка ссылка', href: 'http://rutube.ru'},
  // ]
  
  return (
    <div className="App">
        <Counter />
        <Header links = {navlink_massive} />
        <button type="button" onClick={changeShow}>Показать</button>

        <div className={`box ${isActive ? 'active': ''}`} onClick={changeActiveColor}></div>
        { isShow ? <Main title= "Пивет -v-" /> : null}

        
        <Footer/>

    </div>
  );
}

export default App;
