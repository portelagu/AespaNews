import React from "react";

import "./styles.css";

export class Article extends React.Component {
    
    render() {
        return (
            <article id="article">
                <img src={this.props.thumbnail}alt={this.props.thumbnail__desc} />
                <div className="article-infos">
                    <h2>{this.props.title}</h2>
                    <p>{this.props.description}</p>
                    <h3>{this.props.date}</h3>
                </div>
            </article>
        )
    }    
}
