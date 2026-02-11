function Home() {
    return (
        <>
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl px-6 py-3 text-center">
                Hello, I'm a Java developer based in Mexico!
            </div>

            <div className="mt-8 space-y-6">
                <h2 className="text-2xl font-semibold text-white underline underline-offset-4 decoration-4 decoration-teal-400">
                    Bio
                </h2>

                <p>
                    Hello, I'm an indie app developer based in Japan!
                    I specialize in building minimal, joyful mobile experiences
                    with React Native, Expo, Tailwind CSS and a bit of obsession
                    for clean animations and micro-interactions.
                </p>
                <p className="mt-4">
                    Currently focused on creating tools that help creators
                    and small teams ship faster without sacrificing quality.
                    When I'm not coding, you'll find me exploring Tokyo's
                    hidden coffee spots or playing with my film camera.
                </p>

            </div>
        </>
    );
}

export default Home;
