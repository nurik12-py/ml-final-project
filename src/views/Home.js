import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Input from '../components/Input';
import ReviewStatus from '../components/ReviewStatus';
import Button from '../components/Button';
import ReviewStat from '../components/ReviewStat';

const Home = () => {
    const [review, setReview] = useState("");

    const handleSubmit = () => {
        console.log(review);
    }

    return (
        <div>
            <Navbar />
            <div className="px-3 lg:px-96 py-2 lg:py-20">
                <div class="bg-white dark:bg-gray-900 rounded-lg px-6 pt-6 pb-4 ring-1 ring-gray-200  ring-gray-900/5 shadow-xl">
                    {/* <ReviewStatus status={2} /> */}
                    <h1 className="text-lg font-medium">Review: </h1>

                    <Input value={review} onChange={(e) => setReview(e.target.value)} />
                    <h1 className="text-lg font-medium mt-4">Results: </h1>
                    <div className="mt-1 flex flex-col lg:flex-row items-start lg:items-center gap-1 lg:gap-6">
                        <ReviewStat status={0} level={"90%"} />
                        <ReviewStat status={1} level={"10%"} />
                        <ReviewStat status={2} level={"20%"} />
                    </div>

                    <h1 className="text-lg font-medium mt-4">Overall: </h1>
                    <div className="mt-1 flex items-center gap-6">
                        <ReviewStatus status={0} />
                    </div>
                    <div className="flex justify-center">
                        <Button isLoading={false} onClick={handleSubmit} />
                    </div>
                </div>
            </div>
        </div>
    );


}

export default Home;