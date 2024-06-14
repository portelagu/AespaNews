import React from "react";
import logoImg from "../../assets/images/logo.png"
import './styles.css'

export class Navbar extends React.Component {
    render() {
        return (
            <header>
                <nav id="navbar">
                    <div className="nav-brand">
                        <img src={logoImg} alt="Logo do Aespa" />
                        <h1>Aespa News</h1>
                    </div>
                    <ul className="nav-list">
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Sobre Nós</a></li>
                        <li><a href="/">Categorias</a></li>
                        <li><a href="/">Redes Sociais</a></li>
                    </ul>
                </nav>
            </header>
        )
    }
}