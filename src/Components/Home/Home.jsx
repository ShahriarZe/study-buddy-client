import { useCallback } from "react";
import Banner from "../Banner/Banner";
import Faq from "../FAQ/Faq";
import Features from "../Features/Features";
import Gallery from "../Gallery/Gallery";

import { loadSlim } from "tsparticles-slim";
import Particles from "react-particles";

const Home = () => {


    const particlesInit = useCallback(async engine => {
        console.log(engine);
        
        await loadSlim(engine);
    }, []);
    
    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);


    return (
        <div>


            <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "bubble",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 100,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#000000",
                    },
                    links: {
                      color: "#000000",
                      distance: 150,
                      enable: true,
                      opacity: 0.5,
                      width: 1,
                  },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 6,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 20,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />


            <Banner></Banner>
            <Features></Features>
            <Gallery></Gallery>
            <Faq></Faq>
        </div>
    );
};

export default Home;