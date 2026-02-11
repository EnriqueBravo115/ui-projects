import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
    return (
        <BrowserRouter>
            <div className="min-h-screen bg-gray-100">
                <nav className="bg-blue-600 text-white p-4 shadow-md">
                    <div className="max-w-4xl mx-auto flex gap-6">
                        <Link
                            to="/"
                            className="hover:text-gray-200 transition"
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            className="hover:text-gray-200 transition"
                        >
                            About
                        </Link>
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
