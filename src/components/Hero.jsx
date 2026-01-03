

const Hero = () => {
  return (
    <section className="hero py-20 px-6 text-center bg-gray-50">
      <h1 className="text-4xl font-bold mb-4">
        Hey, I’m <span className="highlight text-blue-500">Sabbir</span> 👋
      </h1>
      <p className="text-lg text-gray-700 mb-6 max-w-xl mx-auto">
        I’m an engineering student passionate about building scalable web apps 
        and exploring full-stack development with React and C++.
      </p>
      <a
        href="#projects"
        className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition"
      >
        See My Work 🚀
      </a>
    </section>
  );
};

export default Hero;
