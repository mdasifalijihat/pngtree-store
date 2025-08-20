import React from 'react';
import App from '../pages/App';
import Banner from '../pages/appsCard/Banner';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Banner></Banner>
            <App></App>
        </div>
    );
};

export default Home;