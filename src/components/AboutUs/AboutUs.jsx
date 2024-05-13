import React from "react";
import divider from "../../assets/divider.png";

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center gap-10 font-body py-32 px-12 w-full">
      <div className="flex flex-col gap-4 max-w-1000px">
        <p className="font-bold text-5xl text-secondary-blue">
          Uniendo arte y tecnología en un mundo de posibilidades infinitas
        </p>
        <p className=" text-xl text-primary-blue">
          En nuestro Hub de NFTs, celebramos la diversidad creativa y fomentamos
          la conexión entre artistas y coleccionistas de todo el mundo. Descubre
          y apoya el arte digital más innovador mientras exploras un universo de
          oportunidades únicas e inmersivas.
        </p>
      </div>
      <img src={divider} alt="divider" className="w-20 h-3" />
      <div className="flex flex-col gap-4 max-w-1000px">
        <p className="font-bold text-4xl text-secondary-blue">
          Valores que nos definen
        </p>
        <p className="text-lg text-primary-blue">
          Enraizados en la transparencia, la autenticidad y la equidad, nuestros
          valores guían cada interacción y transacción en nuestra plataforma,
          creando un ambiente donde la confianza y la integridad son
          primordiales.
        </p>
      </div>
      <img src={divider} alt="divider" className="w-20 h-3" />
      <div className="flex flex-col gap-4 max-w-1000px">
        <div className="flex flex-col text-secondary-blue">
          <p className="font-bold text-4xl">Nuestra Historia</p>
          <p className="font-bold text-xl">
            Un Viaje de Pasión por las Criptomonedas y la Innovación Tecnológica
          </p>
        </div>
        <p className="text-lg text-primary-blue">
          Nuestro viaje comienza con una ferviente pasión por el mundo de las
          criptomonedas y la tecnología blockchain.
        </p>
        <p className="text-lg text-primary-blue">
          Desde 2022, nos hemos sumergido en comunidades criptográficas, donde
          hemos encontrado no solo entusiasmados seguidores de las
          criptomonedas, sino también brillantes desarrolladores que están
          moldeando el futuro de este ecosistema.
        </p>
        <p className="text-lg text-primary-blue">
          Inspirados por esta red de mentes creativas y visionarias, nos
          propusimos crear un "Hub" que sirviera como un punto de encuentro para
          la comunidad crypto. Más que un simple marketplace de NFTs, nuestra
          visión era integrar funcionalidades avanzadas, permitiendo no solo
          comprar y vender NFTs, sino también mintearlos y gestionar colecciones
          de manera intuitiva y completa.
        </p>
        <p className="text-lg text-primary-blue">
          Esta historia es un testimonio de nuestra dedicación a la innovación
          en el emocionante y siempre cambiante mundo de las criptomonedas.
          Estamos comprometidos a seguir explorando nuevas fronteras y aportando
          soluciones creativas que impulsen el crecimiento y la adopción de esta
          tecnología transformadora.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
