import React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { Article } from './components/Article/Article';
import { Counter } from './components/Counter/Counter';
import './styles/App.css';
import articleImg1 from './assets/images/article1.png';
import articleImg2 from './assets/images/article2.png';
import articleImg3 from './assets/images/article3.png';
// Componente em classe é uma classe que herda a classe Component do React, e retorna HTML dentro do método render().
class App extends React.Component {
  //Método responsável por renderizar o conteúdo HTML do nosso componente.
  render() {
    return (
      <>
        <Navbar />
        <Counter />
        {/* <section id="articles">
          <Article
            title="Designing Dashboards"
            provider="NASA"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil qui hic fuga fugit placeat, cupiditate harum laborum tempore modi odit expedita reprehenderit, quos quaerat repudiandae sint distinctio! Error, odit porro."
            thumbnail={articleImg1}
            />
          <Article
            title="Vibrant Portraits of 2020"
            provider="SpaceNews"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt veritatis minus dolor laborum vel rerum nihil unde quas vero quo rem odio nesciunt nisi atque omnis, veniam quibusdam, consectetur delectus?."
            thumbnail={articleImg2}
            />
          <Article
            title="36 Days of Malayalam type"
            provider="Spaceflight Now"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil qui hic fuga fugit placeat, cupiditate harum laborum tempore modi odit expedita reprehenderit, quos quaerat repudiandae sint distinctio! Error, odit porro."
            thumbnail={articleImg3}
            />
          <Article
            title="Designing Dashboards"
            provider="NASA"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil qui hic fuga fugit placeat, cupiditate harum laborum tempore modi odit expedita reprehenderit, quos quaerat repudiandae sint distinctio! Error, odit porro."
            thumbnail={articleImg1}
            />
        </section> */}
      </>
    );

  }
}

export default App;
