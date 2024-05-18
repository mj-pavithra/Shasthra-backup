import React, { useState, useEffect } from "react";
import NavBar from "../Components/NavBar";
import HPmiddle from "../Containers/HPmiddle";
import Footer from "../Components/Footer";
import '../Styles/HomePage.css';

const navSegments: string[] = ["Home", "About", "Contact", "Services", "Portfolio"];

console.log("HomePage loaded.");

const HomePage: React.FC = () => {
    const [showNavBar, setShowNavBar] = useState<boolean>(true);
    const scrollThreshold = 200; 

    const handleScroll = () => {

        const scrollPosition = window.scrollY;

        const shouldShowNavBar = scrollPosition <= 0 || scrollPosition >= scrollThreshold;

        if (shouldShowNavBar !== showNavBar) {
            setShowNavBar(shouldShowNavBar);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [showNavBar]);

    return (
        <div className="HomePage">
            <NavBar
                className={showNavBar ? "navbar-visible" : "navbar-hidden"}
                segmentsList={navSegments}
            />
            <HPmiddle />
            <Footer />
        </div>
    );
};

export default HomePage;