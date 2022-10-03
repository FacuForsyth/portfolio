import React from "react";
import miFoto from '../Assets/fotoCv.jpeg';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from "react-scroll";

const Inicio = () => {
  return (
    <div
    name="Inicio"
    className="w-full bg-gradient-to-b from-black via-black to-gray-800"
  >
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center py-14 px-4 md:flex-row" style={{paddingTop: '6rem'}}>
      <div className="flex flex-col justify-center h-full">
        <h2 className="text-4xl sm:text-6xl font-bold text-white">
          Buenas, soy FullStack Developer
        </h2>
        <p className="text-gray-500 py-4 max-w-md">
            En este último tiempo realicé un E-commerce para una empresa de ventas de bebidas, logrando un incremento del 20% de las ventas mensuales del negocio.
            Lideré la creación de una aplicación para solucionar una problemática que permite fomentar la conexión (match) entre músicos/bandas de rock interesadas en tocar, con establecimientos que ofrecen un lugar para poder llevar a cabo los recitales.
            Me gusta mucho trabajar en sitios web o aplicaciones usando las tecnologias como HTML, CSS, JavaScript, React, Secualize, entre otras y aprender nuevas!.
        </p>

        <div>
          <Link
            to="portfolio"
            smooth
            duration={500}
            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
          >
            Portfolio
            <span className="group-hover:rotate-90 duration-300">
              <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
            </span>
          </Link>
        </div>
      </div>
      <br/>
      <div>
        <img
          src={miFoto} 
          alt="mi foto"
          className="rounded-2xl mx-auto w-2/3 md:w-full"
        />
      </div>
    </div>
  </div>
  )
};

export default Inicio;