import React from 'react';


class Header extends React.Component {

    constructor(){
        super();
    }

    render(){
        return(
            <div>
               <header>
                    <img src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png" 
                        alt="Problem?"
                    />
                </header>
                <p>Meme Generator</p>
            </div>            
            )
        }

}

export default Header;