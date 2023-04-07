import React from 'react';
import { Spinner } from 'react-bootstrap';

const PBSpinner = () => {
    return (
        <div className='PBSpinner'>
            <Spinner
                animation="border"
                variant="success">
            </Spinner>
        </div>
    );
};

export default PBSpinner;