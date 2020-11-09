import React, { useEffect, useState } from 'react';
import Menu from '../../Components/Menu';
import Rodape from '../../Components/Footer';
import './styles.css';
import Fotozinha from '../../Assets/Fotos/deu tudo errado.png';
import { Link, useHistory } from 'react-router-dom';

export default function TelaMenuOneComponent (props) {
    return (
      <>
        <div className="menu">
          <Menu />

          <div className="fundo">
            <div className="titulotwo">
              <h2>A SAÚDE COMEÇA PELA BOCA!</h2>

              <div>
                <img className="foto" src={Fotozinha}></img>
              </div>

              <div className="botaolindo">
                {props.children}
              </div>
            </div>
          </div>
        </div>
        <Rodape />
      </>
    );
}