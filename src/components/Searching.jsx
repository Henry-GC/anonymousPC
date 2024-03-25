import React from 'react';
import logo from './Assets/Image/Logo.png';
import "./Assets/Styles/Searching.css"
import { useState } from 'react';

function Searching(props){
  const [buscar,setBuscar]= useState("")
  const searchChange = (e) =>{
    setBuscar(e.target.value);
  };
  const searchSubmit = (e) =>{
    e.preventDefault();
    props.onSearch(buscar);
    setBuscar("")
  };
  return (
    <div className='container-search'>
      <img src={logo} width="100vw" alt="Logo de AnonymousPC" />
    <form onSubmit={searchSubmit}>  
      <input type="text" value={buscar} onChange={searchChange} placeholder='Buscar...'/>
      <button type='submit' disabled={!buscar}>
        <i id="lupa" class="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
      <button>
        <i class="fa-solid fa-cart-shopping"></i>
      </button>
    </div>
  );
}

export default Searching;
