import { useLoaderData } from "react-router-dom";
import AssignmentRow from "./AssignmentRow";
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import Particles from "react-particles";


const SubmittedAssignment = () => {

    const particlesInit = useCallback(async engine => {
        console.log(engine);

        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);


    const submissions = useLoaderData()
    return (
        <div className="min-h-screen p-10 lg:p-40 max-w-6xl mx-auto">

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
                            value: 10,
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


            <h2 className="text-3xl text-center">Total Submissions : {submissions.length}</h2>
            <div className="overflow-x-auto mt-6">
                <table className="table border border-accent">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Examinee Name</th>
                            <th>Tittle</th>
                            <th>Mark</th>
                            <th>Status</th>
                            <th>Give Mark</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            submissions.map(sub => <AssignmentRow key={sub._id} sub={sub} ></AssignmentRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SubmittedAssignment;