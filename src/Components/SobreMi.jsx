import React from "react";

const SobreMi = () => {
  return (
    <div
      name="SobreMi"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white py-8"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div /* className="pb-1" */>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Sobre Mi
          </p>
        </div>

        <p className="text-xl mt-10 ">
          Soy un Desarrollador FullStack, con ganas de trabajar para el 🌍. Gran capacidad para cooperar en equipo y consolidar proyectos web con el mayor entusiasmo.
          Soy una persona muy curiosa y creativa, apasionada por el aprendizaje y los desafíos. En esta industria IT estoy decidido a crecer y nunca dejar de aprender. 
        </p>
        <br />
        <p className="text-xl">
          Mi objetivo es poder desempeñar mi labor diario en un ambiente empresarial que permita explotar mis capacidades, aportando a la capacitación y el crecimiento personal. Entendiendo eso como un crecimiento mutuo.
        </p>
        <br />
        <p className="text-xl">
          Mi experiencia académica mas destacada en el rubro fue la del ultimo año, ya que me desempeñe como estudiante de desarrollador Full Stack en Henry, en donde aprendí y perfeccione mis bases de Back-end y Front-end, sumándole un excelente uso de JavaScript, con sus librerías y frameworks.
          También me recibí de Contador Publico, en el cual ejercí la profesión durante 3 años, por lo cual tengo experiencia laboral.
          Mi nivel de Ingles actual se encuentra en B2 siempre buscando realizar mas cursos para pulirlo.
        </p>
      </div>
    </div>
  )
};

export default SobreMi;