import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
    return (
        <BrowserRouter>
            <div className="min-h-screen bg-zinc-800 text-gray-100">
                <nav className="sticky top-0 z-50 backdrop-blur-md bg-zinc-900 border-b border-white/10">
                    <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
                        <h1 className="text-white font-semibold text-lg tracking-tight">
                            Enrique Bravo
                        </h1>

                        <div className="flex gap-8 text-sm font-medium">
                            <Link
                                to="/"
                                className="text-gray-300 hover:text-teal-400 transition-colors duration-200"
                            >
                                Home
                            </Link>
                            <Link
                                to="/about"
                                className="text-gray-300 hover:text-teal-400 transition-colors duration-200"
                            >
                                Projects
                            </Link>
                            <Link
                                to="/about"
                                className="text-gray-300 hover:text-teal-400 transition-colors duration-200"
                            >
                                Posts
                            </Link>
                            <Link
                                to="/about"
                                className="text-gray-300 hover:text-teal-400 transition-colors duration-200"
                            >
                                About
                            </Link>
                        </div>
                    </div>
                </nav>

                <main className="max-w-4xl mx-auto p-6">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;

