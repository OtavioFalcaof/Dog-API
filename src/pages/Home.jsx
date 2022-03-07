import React from "react";
import imgHome from '../assets/homePage.png'
import '../styles/Home.css'


export default function Home (){

    return(
        <div>
            
        <div className='container' >
            
        <div  className='title'>
            <h1 style={{fontWeight:'bold'}}>Seja Bem vindo a <strong style={{color:'#fff'}}> PetLove</strong></h1>
            <br/>
          <p><strong>Encontre</strong> variadas<br />
            imagens de cães de raça e sub-raça.</p>
          <br/>

          <div className="subtitle">
            <p>Lorem ipsum dolor sit amet,<br />
            consectetur adipiscing elit,<br></br>
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>        

        <div className="imagem">
          <img className="dog" src={imgHome} alt="dog" />
        </div>
      </div>
      </div>


    )

}