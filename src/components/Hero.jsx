import { logo } from '../assets';

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />
      </nav>
      <h1 className="head_text">
        Resumen de Artículos con <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplifica tus lecturas con Resumy, un resumidor de artículos de fuente
        abierta que transforma extensos artículos en resúmenes claros y
        concisos.
      </h2>
    </header>
  );
};

export default Hero;
