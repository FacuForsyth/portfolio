import React from "react";
//PONGO UN CARRUSEL CON LAS IMAGENES DE LOS PROYECTOS
import recipes from "../Assets/portfolio/pag_recipes.png";
import rockStar from "../Assets/portfolio/home_rock.png";
import previateca from "../Assets/portfolio/previateca.png";
import calculadora from "../Assets/portfolio/calculadora.png";
import anotador from "../Assets/portfolio/anotador.png";
import contador from "../Assets/portfolio/contador.png";

const Portfolio = () => {

  const portfolios = [
    {
      id: 1,
      src: previateca,
      href: 'https://previatecapedidos.web.app/',
      hrefCode: 'https://github.com/FacuForsyth/previateca-app',
    },
    {
      id: 2,
      src: rockStar,
      href: 'https://www.youtube.com/watch?v=k6iUCjMoBmc' ,
      hrefCode: 'https://github.com/FacuForsyth/PF-RockStar_Place',
    },
    {
      id: 3,
      src: recipes,
      href: 'https://recipes8.vercel.app/' ,
      hrefCode: 'https://github.com/FacuForsyth/PI-RecipesApp',
    },
    {
      id: 4,
      src: calculadora,
      href: 'https://calculadorita.vercel.app/' ,
      hrefCode: 'https://github.com/FacuForsyth/react-proyect-calculadoraApp' ,
    },
    {
      id: 5,
      src: anotador,
      href: 'https://bloctareas8.vercel.app/' ,
      hrefCode: 'https://github.com/FacuForsyth/react-proyect-TareasApp' ,
    },
    {
      id: 6,
      src: contador,
      href: 'https://contadordeclic8.vercel.app/' ,
      hrefCode: 'https://github.com/FacuForsyth/react-ContadorClicApp' ,
    },
  ]

  return (
    <div
    name="portfolio"
    className="bg-gradient-to-b from-black to-gray-800 w-full text-white py-8"
  >
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          Portfolio
        </p>
        <p className="py-6">Aquí puedes ver el repositorio de mis proyectos:</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        {portfolios.map(({ id, src, href, hrefCode }) => (
          <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={src}
              alt=""
              className="rounded-md duration-200 hover:scale-105"
            />
            <div className="flex items-center justify-center">
              <a 
                className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                href={href}
                target='_blank' rel='noreferrer'
              >
                Demo
              </a>
              <a 
                className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                href={hrefCode}
                target='_blank' rel='noreferrer'
              >
                Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
};

export default Portfolio;