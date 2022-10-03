import React from "react";
import html from "../Assets/html.png"
import css from "../Assets/css.png"
import github from "../Assets/github.png"
import javascript from "../Assets/javascript.png"
import sequelize from "../Assets/sequelize.png"
import node from "../Assets/node.png"
import redux from "../Assets/redux.png"
import mongoDB from "../Assets/mongoDB.png"
import reactImage from "../Assets/react.png"
//IMAGENES DE LOS LOGOS 

const Experiencia = () => {

  const techs = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500'
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-500'
    },
    {
      id: 3,
      src: javascript,
      title: 'JavaScript',
      style: 'shadow-yellow-500'
    },
    {
      id: 4,
      src: reactImage,
      title: 'React',
      style: 'shadow-sky-400'
    },
    {
      id: 5,
      src: redux,
      title: 'Redux',
      style: 'shadow-purple-500'
    }, 
    {
      id: 6,
      src: node,
      title: 'Node JS',
      style: 'shadow-green-400'
    },
    {
      id: 7,
      src: sequelize,
      title: 'Sequelize',
      style: 'shadow-blue-600'
    },
    {
      id: 8,
      src: mongoDB,
      title: 'Mongo DB',
      style: 'shadow-green-500'
    },
    {
      id: 9,
      src: github,
      title: 'GitHub',
      style: 'shadow-gray-200'
    },
  ]

  return (
    <div
      name="Experiencia"
      className="bg-gradient-to-b from-gray-800 to-black w-full py-8"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Experiencia
          </p>
          <p className="py-6">Estas son algunas de las tecnologias que manejo</p>
        </div>

        <div className="w-full grid grid-cols-3 sm:grid-cols-3 gap-4 text-center py-4 px-4 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};

export default Experiencia;