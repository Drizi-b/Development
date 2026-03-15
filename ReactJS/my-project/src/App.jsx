import React, { useEffect, useState } from "react";
import { Article } from "./components/Article/Article";
import { Navbar } from "./components/Navbar/Navbar";
import axios from "axios";

import "./styles/App.css";

// Componente em classe é uma classe que herda a classe Component do React, e retorna HTML dentro do método render().
// Componente funcional é uma função que retorna HTML
function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function loadNews() {
      const response = await axios.get(
        "https://gnews.io/api/v4/search?q=Google&lang=en&max=5&apikey=8a14c6d698837b88ba91a9c07263e9d5",
      );
      const newsData = response.data;
      setNews(newsData.articles);
    }
    loadNews();
  }, []);
  //Método responsável por renderizar o conteúdo HTML do nosso componente.
  return (
    <>
      <Navbar />

      <section id="articles">
        {news.map((article) => {
          return (
            <Article
              key={article.id}
              title={article.title}
              provider={article.url}
              description={article.description}
              thumbnail={article.image}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
