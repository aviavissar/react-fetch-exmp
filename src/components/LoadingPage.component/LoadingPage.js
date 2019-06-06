import React from 'react'

const LoadingPage = () => (
    <div className="loader container">
        <div className="row">
            <div className="col-12">
                <img className='loader__img' src='/images/loader.gif' />
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <h1>Loading Page....</h1>
            </div>
        </div>
    </div>
);

export default LoadingPage;