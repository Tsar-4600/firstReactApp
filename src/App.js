import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Counter from './components/counter';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import ParagraphDisplay from './components/paragraph_display';


function App() {
  // хук для показа main (1-ое задание)
  const [paragraph_massive, setParagraphMassive] = useState([
    {content: "In the heart of the city, a vibrant market came alive every weekend. Colorful stalls brimmed with fresh produce, handmade crafts, and aromatic spices, enticing locals and tourists alike. The air buzzed with laughter and chatter as families strolled through the aisles, sampling delicious treats. Musicians played cheerful tunes, adding to the lively atmosphere that made the market a cherished community hub."},
    {content: "Amidst the hustle and bustle, a young artist named Mia showcased her paintings. With each brushstroke, she captured the essence of city life, celebrating both its chaos and beauty. People paused to admire her work, drawn in by the vivid colors and emotive expressions. Mia felt a sense of fulfillment with every compliment, knowing her art resonated with others."},
    {content: "As the sun began to set, the golden light bathed the market in a warm glow. Vendors started to pack up their goods, wrapping up another successful day. The sounds of laughter began to fade, but the memories of the day lingered in the air. It was a gentle reminder of the joy found in simple moments shared with friends and loved ones."},
    {content: "Later that evening, the city transformed under a starlit sky. Neon lights flickered to life, casting a colorful glow on the streets. People gathered in cafes and restaurants, enjoying the lively nightlife that the city had to offer. It was a perfect end to a day filled with vibrant energy, making everyone look forward to the adventures that awaited the next weekend."}
  ])
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
  // 3 задание в 1-ой практической

  




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
        
        
        <ParagraphDisplay  paragraph={paragraph_massive}/>

        
        
        
        <Footer/>

    </div>
  );
}

export default App;
