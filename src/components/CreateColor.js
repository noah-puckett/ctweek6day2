import React from 'react';
import PropTypes from 'prop-types';

function CreateColor({ addColor, handleChange }) {

    return (<> 
        <form id='form' name='createColor' onSubmit={addColor}>Pick yer color, pal
            <input name='name' onChange={handleChange}></input>
            <input name='hex' type='color' onChange={handleChange}></input>
            <button>add new colah</button>
        </form>
    </>);
}
CreateColor.propTypes = {
    addColor: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
}; 

export default CreateColor;

//this is how you pass multiple event??? arguments???
//onSubmit={(event) => {addColor(event); resetForm(); }} 
