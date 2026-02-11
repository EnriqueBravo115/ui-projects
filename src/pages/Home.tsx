function Home() {
  return (
    <>
      <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl px-8 py-6 text-center max-w-2xl mx-auto">
        <h1 className="md:text-2xl font-bold text-white tracking-tight">
          Hi, I'm a Java developer
        </h1>
        <p className="mt-3 text-lg text-gray-300">
          based in Mexico • deeply passionate about technology
        </p>
      </div>

      <div className="mt-10 md:mt-16 space-y-12 max-w-3xl mx-auto">
        <section>
          <h2 className="md:text-2xl font-semibold text-white underline underline-offset-8 decoration-4 decoration-teal-500/70 mb-6">
            About Me
          </h2>
          
          <div className="space-y-6 text-gray-200 leading-relaxed text-lg">
            <p>
              I'm a software engineer with solid bases in <strong className="text-teal-300">Java</strong> and <strong className="text-teal-300">Clojure</strong>.
              I specialize in designing and building reliable, scalable <strong>microservices</strong> and distributed systems.
            </p>

            <p>
              I love the expressiveness and power of Clojure, but I’m equally comfortable and productive in the mature Java ecosystem — Spring Boot.
            </p>

            <p>
              Linux has been my daily driver for years (mostly Arch + Hyprland these days). I enjoy tweaking workflows, diving deep into tooling, and understanding how systems really work under the hood.
            </p>
          </div>
        </section>

        <section className="pt-8 border-t border-white/10">
          <h3 className="text-xl font-medium text-white/90 mb-6">
            Core Tools & Technologies
          </h3>
          
          <div className="flex flex-wrap gap-3">
            {[
              "Java", "Clojure", "Spring Boot", "Kafka", "PostgreSQL", "Linux", "Docker", "Git"
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-200 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      </div>

      <div className="mt-16 text-center text-gray-400 text-sm">
        <p>© 2026 Enrique Bravo. All Rights Reserved.</p>
      </div>
    </>
  );
}

export default Home;
