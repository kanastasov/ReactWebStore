import React from 'react';
import PropTypes from 'prop-types';
const Header = (props) => (
        <header className="top">
        <h1>Fruit 
          <span className="ofThe">
              <span className="of">of</span>
              <span className="the">the</span>
              </span>  
             Day</h1>

        <h3 className="tagline">
    <span>{props.tagline}</span>
    </h3>
    </header>

    );


Header.propTypes = {
    tagline: PropTypes.string.isRequired
};

export default Header;