import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';
import Logo from './Components/Logo';

function App(){
  return (
    <div className="App">
        <Header
          titulo="Desarrollo de Aplicaciones para Dispositivos Móviles"
          boolean={true}
        />
        <Logo/>
        <Header
          titulo="26/Octubre/2020"
        />
        <Body
          texto1="Práctica 1 - Unidad 2"
          arreglo={["Tipos de componentes", "Contenedores","Usar mas de un componente", "Funciones", "Props"]}
        />
        <Footer
          pie={<p>Copyright &copy; Todos los derechos reservados </p>}
        />
    </div>
  );
}

export default App;
