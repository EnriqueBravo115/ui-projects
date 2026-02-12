import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Posts from "./pages/Posts";

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
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-teal-400 underline underline-offset-4 decoration-teal-400"
                                        : "text-gray-300 hover:text-teal-400 transition-colors duration-200"
                                }
                            >
                                Home
                            </NavLink>

                            <NavLink
                                to="/projects"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-teal-400 underline underline-offset-4 decoration-teal-400"
                                        : "text-gray-300 hover:text-teal-400 transition-colors duration-200"
                                }
                            >
                                Projects
                            </NavLink>

                            <NavLink
                                to="/posts"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-teal-400 underline underline-offset-4 decoration-teal-400"
                                        : "text-gray-300 hover:text-teal-400 transition-colors duration-200"
                                }
                            >
                                Posts
                            </NavLink>
                        </div>
                    </div>
                </nav>

                <main className="max-w-4xl mx-auto px-6 pt-6">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/posts" element={<Posts />} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
