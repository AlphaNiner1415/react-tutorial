import React from 'react';
//WithClass is now withClass, a normal function that returns a component
const withClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent />
        </div>
    );
};


export default withClass;