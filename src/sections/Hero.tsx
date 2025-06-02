import Typewriter from 'typewriter-effect';
import backgroundImage from '../assets/bttrbckgrnd2.png';
import WordCloud from '../components/WordCloud';   // ← ajusta la ruta si es distinta

function Hero() {
  return (
    <section
      className="relative w-full bg-cover bg-center px-4 py-80"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Contenido principal */}
      <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          I&apos;m Edgar,<br />
          <span className="text-yellow-500">Software Engineer</span>
        </h1>

        <h2 className="text-2xl md:text-3xl font-medium mt-4 flex justify-center items-center gap-2">
          <span>I build</span>
          <span className="text-yellow-300">
            <Typewriter
              options={{ loop: true }}
              onInit={(tw) =>
                tw
                  .typeString('projects').pauseFor(1500).deleteAll()
                  .typeString('solutions').pauseFor(1500).deleteAll()
                  .typeString('APIs').pauseFor(1500).deleteAll()
                  .typeString('software').pauseFor(1500).deleteAll()
                  .typeString('mobile apps').pauseFor(1500)
                  .start()
              }
            />
          </span>
        </h2>
        {/* Frase adicional */}
        <a href="#contact" className="mt-4 inline-block px-6 py-2 bg-yellow-500 text-white font-semibold rounded-full hover:bg-yellow-400 transition">
  Let's work together!
</a>
      </div>

      {/* Word-cloud flotante */}
      
      {/* mobile */}
<div className="md:hidden absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-30">
  <WordCloud />
</div>

{/* desktop */}
<div className="hidden md:block absolute bottom-10 left-1/2 w-[800px] h-[400px] opacity-40">
  <WordCloud />
</div>

    </section>
  );
}

export default Hero;
