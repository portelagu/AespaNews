import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Article } from "./components/Article/Article";
import { Footer } from "./components/Footer/Footer";

import './styles/App.css';

import article1Img from './assets/images/article1.png';
import article2Img from './assets/images/article2.png';
import article3Img from './assets/images/article3.png';
import article4Img from './assets/images/article4.png';

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <section id="articles">

        <Article title="'Armageddon' se torna o álbum mais rápido do grupo a alcançar 100 milhões de streams no spotify"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed pulvinar snulla. Fusce sagittis, nisl nec pharetra accumsan, dolor ante lobortis elit."
        date="07 de junho de 2024"
        thumbnail={article1Img} 
        thumbnail__desc="Foto das quatro integrantes do Aespa no set de filmagens do clipe oficial de armageddon"
        />

        <Article title="MV de Supernova atinge 60 milhões de views em tempo recorde" 
        description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed pulvinar sapien, ac feugiat nulla. Fusce sagittis, nisl nec pharetra accumsan, dolor ante lobortis elit."
        date="01 de junho de 2024"
        thumbnail={article2Img}
        thumbnail__desc="Foto das quatro integrantes do Aespa no photoshoot do clipe de supernova"
        />

        <Article title="Lançamento oficial do segundo full album 'Armageddon'" 
        description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed pulvinar sapien, ac feugiat nulla. Fusce sagittis, nisl nec pharetra accumsan, dolor ante lobortis elit." 
        date="27 de maio de 2024"
        thumbnail={article3Img}
        thumbnail__desc="Foto das quatro integrantes do Aespa em um photoshoot"
        />

        <Article title="Aespa retornará com a nova turnê para a América e Europa apenas em 2025" 
        description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed pulvinar sapien, ac feugiat nulla. Fusce sagittis, nisl nec pharetra accumsan, dolor ante lobortis elit." 
        date="26 de maio de 2024"
        thumbnail={article4Img}
        thumbnail__desc="Foto das quatro integrantes do Aespa no clipe better thing"
        />
        </section>
        <Footer />
      </>
    );
  }
}

export default App;