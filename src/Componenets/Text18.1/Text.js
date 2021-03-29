import React, { useState } from 'react'


function MyFirstFunc( {myText , length = 30}) {

    myText = 'In a series of interviews aired by CNN, Dr. Deborah Birx, Dr. Anthony Fauci, and other Trump veterans tell of their own pandemic battles. Variants and eased restrictions are pushing cases up around the United States.';

    const [showLess , setShowLess] = useState(true)

    if (myText.length < length) {
        return <p>{myText}</p>
    }
    
    
        return (
            <div>
               {showLess ? `${myText.slice(0, length)}` : myText}
               <p style={{color : 'blue'}} onClick={() => setShowLess(!showLess)}>
                   {showLess ? '...See More' : 'See Less'}
               </p>
            </div>
        );
    };

    export default MyFirstFunc;

