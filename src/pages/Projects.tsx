import { useNavigate } from 'react-router-dom';

function Projects() {
    const navigate = useNavigate();
    const goToLogin = () => navigate("/login");
    const goToRegister = () => navigate("/register");

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-20 py-6">
            <div className="w-full max-w-3xl bg-zinc-900/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 shadow-xl text-center">
                <p className="text-xl mb-6 text-gray-100">
                    Modern e-commerce backend built with:
                </p>

                <ul className="list-disc list-outside space-y-2 text-gray-300 inline-block text-left mx-auto">
                    <li>Clojure 1.12</li>
                    <li>Ring + Compojure</li>
                    <li>Buddy (JWT / Authentication)</li>
                    <li>next.jdbc</li>
                    <li>HoneySQL</li>
                    <li>HikariCP</li>
                    <li>PostgreSQL</li>
                    <li>Flyway (migrations)</li>
                    <li>Malli (validation)</li>
                    <li>Aero (configuration)</li>
                    <li>Kaocha + Testcontainers (testing)</li>
                </ul>

            </div>

            {/* Botones */}
            <div className="flex gap-4 mt-8">
                <button
                    onClick={goToLogin}
                    className="px-7 py-3 bg-teal-400 text-black font-medium rounded-lg
                               hover:bg-teal-600 transition-colors duration-200 shadow-sm
                               active:bg-teal-700"
                >
                    Sign in
                </button>

                <button
                    onClick={goToRegister}
                    className="px-7 py-3 bg-white text-black font-medium rounded-lg
                               border-2 border-teal-500 hover:bg-teal-50 transition-colors duration-200 shadow-sm
                               active:bg-teal-100"
                >
                    Register
                </button>
            </div>

        </div>
    );
}

export default Projects;
