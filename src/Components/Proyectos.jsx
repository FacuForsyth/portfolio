import React from "react";
//PONGO UN CARRUSEL CON LAS IMAGENES DE LOS PROYECTOS
import recipes from "../Assets/portfolio/pag_recipes.png";
import rockStar from "../Assets/portfolio/home_rock.png";
import previateca from "../Assets/portfolio/previateca.png";
import calculadora from "../Assets/portfolio/calculadora.png";
//import anotador from "../Assets/portfolio/anotador.png";
//import contador from "../Assets/portfolio/contador.png";
import facuflix from "../Assets/portfolio/facuflix.png";
import pufi from "../Assets/portfolio/pufi.png";
import marvelapp from "../Assets/portfolio/marvel_app.jpg";
import snakegame from "../Assets/portfolio/snake_game.jpg";
import memorygame from "../Assets/portfolio/memory_game.jpg";

const Proyectos = () => {

  const proyectos = [
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
      id: 7,
      src: facuflix,
      href: 'https://facuflix.web.app/',
      hrefCode: 'https://github.com/FacuForsyth/facuflix',
    },
    {
      id: 8,
      src: pufi,
      href: 'https://pufi-app-chi.vercel.app/' ,
      hrefCode: 'https://github.com/FacuForsyth/Pufi' ,
    },
    {
      id: 4,
      src: calculadora,
      href: 'https://calculadorita.vercel.app/' ,
      hrefCode: 'https://github.com/FacuForsyth/react-proyect-calculadoraApp' ,
    },
    {
      id: 9,
      src: marvelapp,
      href: 'https://youtube.com/shorts/M7amBklKhfI?feature=share' ,
      hrefCode: 'https://github.com/FacuForsyth/MarvelApp-ReactNative' ,
    },
    {
      id: 10,
      src: snakegame,
      href: 'https://youtube.com/shorts/x1ZbeUvIup4' ,
      hrefCode: 'https://github.com/FacuForsyth/SnakeGame-ReactNative' ,
    },
    {
      id: 11,
      src: memorygame,
      href: 'https://youtube.com/shorts/kvBIw3OPbPg?feature=share' ,
      hrefCode: 'https://github.com/FacuForsyth/MemoryGame-ReactNative' ,
    },
    /* {
      id: 5,
      src: anotador,
      href: 'https://bloctareas8.vercel.app/' ,
      hrefCode: 'https://github.com/FacuForsyth/react-proyect-TareasApp' ,
    }, */
    /* {
      id: 6,
      src: contador,
      href: 'https://contadordeclic8.vercel.app/' ,
      hrefCode: 'https://github.com/FacuForsyth/react-ContadorClicApp' ,
    }, */
  ]

  return (
    <div
    name="proyectos"
    className="bg-gradient-to-b from-black to-gray-800 w-full text-white py-8"
  >
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          Proyectos
        </p>
        <p className="py-6">Aquí puedes ver el repositorio de mis proyectos:</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        {proyectos.map(({ id, src, href, hrefCode }) => (
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

export default Proyectos;