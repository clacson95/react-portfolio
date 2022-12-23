import React, { useState } from "react";
import "./App.css";
// pages
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
// components
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
    const [currentPage, setCurrentPage] = useState("About");

    const renderPage = () => {
        if (currentPage === "About") {
            return <About />;
        }
        if (currentPage === "Portfolio") {
            return <Portfolio />;
        }
        if (currentPage === "Contact") {
            return <Contact />;
        }
        if (currentPage === "Resume") {
            return <Resume />;
        }
    }

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div className="body" style={{ backgroundColor: "white" }}>
            <Header />
            {/* We are passing the currentPage from state and the function to update it */}
            <Navigation
                currentPage={currentPage}
                handlePageChange={handlePageChange}
            />
            {/* Here we are calling the renderPage method which will return a component  */}
            {renderPage()}
            <Footer />
        </div>
    );
}

export default App;
