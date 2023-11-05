import faq from '../../assets/faq.json'
import Lottie from 'lottie-react';
const Faq = () => {
    return (
        <div className='max-w-7xl mx-auto mt-10 mb-10'>
            <h1 className='text-4xl font-extrabold mb-5'>Frequently Asked Questions (FAQ)</h1>
            <div className="hero  ">
            <div className="hero-content flex-col ">
                <Lottie className='w-1/2' animationData={faq}></Lottie>
                <div>
                    <div className="collapse bg-base-200 border-accent border-2 mb-5">
                        <input type="radio" name="my-accordion-1" />
                        <div className="collapse-title text-2xl font-medium">
                        Can I collaborate with my friends on assignments?
                        </div>
                        <div className="collapse-content">
                            <p>Yes, anyone can collaborate by inviting friends to assignments</p>
                        </div>
                    </div>
                    <div className="collapse bg-base-200 border-accent border-2 mb-5">
                        <input type="radio" name="my-accordion-1" />
                        <div className="collapse-title text-2xl font-medium">
                        How do I grade my friends assignments?
                        </div>
                        <div className="collapse-content">
                            <p>Review submissions, assign grades based on criteria</p>
                        </div>
                    </div>
                    <div className="collapse bg-base-200 border-accent border-2 ">
                        <input type="radio" name="my-accordion-1" />
                        <div className="collapse-title text-2xl font-medium">
                        Can I delete an assignment after creating it?
                        </div>
                        <div className="collapse-content">
                            <p>Yes, as the creator,you can delete assignments by accessing the assignment</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Faq;