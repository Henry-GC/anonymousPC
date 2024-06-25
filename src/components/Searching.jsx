import React from 'react';
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
      <img
        src="https://lh3.googleusercontent.com/pw/AP1GczMVhzDQdrRRVop4_XPA3QaGxXt5gyDnV7Elfmen6nzt564oCkv34XXzEQeVC_Xo4Vy8LK1iMs5VV5jaOT4W5BHZhd1Yt_wfHPfyQkkaiAp46kYR03vbUliiZ6_1XE-TiVTyicnCUj8iwKXedJzRwNkPExxEKdKMMQ8leXy880vs6QiTxpOZIo7jmqLuJrf_xUI7poz3FUEqhikTtj_mCz57pB5QjkJwr1HjtTFAOY4agblP0yu6_u3tyubCx5oQ7Wi_1aLZD0o9zdDwewON7Z1eJR0cAVOTMKEethWW9FG4wbK4ayALFpTR23kavn6kJek2quIFonEGMje6SfelsUw3t-J2dxp3Q-HsyXisp2h0OKYueYFNFsZ7kIC0ah5nE_ijHIs9VpAh6GGl3OHFtv4yUbRb-crAJyM9Z7iSwI_emOZjj6LdeR93ud_uEDSsdOkEnfaja1tlNNp4hizdU-q80Xpws6M7PmClxVC66MKaE__Qs_LLoWq7xsgSSWceAtQmvLHTkg01xEceIBid-6y8YK_Zx0B-le12Czz4F3BHIFGYqwImSaHEGwdsrzim3u0CfBTuxLjFbOfyvGjyCXA8E-TB_QqA__9W0uVAVB0l5kwQRNyxTn42dtUp3M2z8Vh7LoYxEHbphwKxC9JITS_AVhoccxk_gblGiQegESsmICrnRoJ5nNOu5nmXOUdPmfPMhHqa4HbIJy5WVhnaKDeZZ_YL7KLv7TxxfZQNpfOUIrgCIWStM0jxC151W4rKcl_Fj4MRB6dNE9o4P5wvggAJPg2QPWdGfAOli6e1q3CmDtXSYX4ogwcBKBsGEuv9DVWpusFkvi4BEZHffUlLE0ZM3_EqVLdhO239mW3ZE8wNHaJGmcTEgyY84dOVAqJiT0l0f_lMxLBVm2c3AYUCdKct7AKHQnMpYvJjZZdobwVxURKfIHxatai9Luc=w799-h936-s-no-gm?authuser=1&pageId=109921788338197989023"
        width="100vw" alt="Logo de AnonymousPC" />
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
