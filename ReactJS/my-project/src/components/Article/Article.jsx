 import React from "react";
 
 import './styles.css';

 export function Article(props) {
   console.log(props)
        return (
          <article id="article">
            <img src={props.thumbnail} alt={props.title} />
            <div className="article-infos">
              <h2>{props.title}</h2>
              <h3>{props.provider}</h3>
              <p>{props.description}</p>
            </div>
          </article>
        );
    }