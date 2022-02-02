import React from 'react';
import Petal from './../Petal';

function Home() {
    return (
        <div className='Wrapper'>

        <style>
        @import url('https://fonts.googleapis.com/css2?family=Ephesis&family=Parisienne&family=Shadows+Into+Light&display=swap');
        </style>
  
        <header className="Notebook-Page">
            <p className='Title'>
                Welcome to your journal!
            </p>
            <Petal></Petal>
            <p className='Signature'>Signature</p>
        </header>
      </div>
    )
}

export default Home