
import React from 'react';
function AsteroidsMap() {
    return (
        <div className='asteroid-map'>
        <div className="big">
            <iframe className="hello" width="100%" height="100vh" seamless="seamless"  src="https://eyes.nasa.gov/apps/asteroids/" title='asteroids'></iframe>
        </div>
        </div>
    );
}
export default AsteroidsMap;