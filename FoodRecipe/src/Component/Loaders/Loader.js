import React, {Component} from 'react';
import './Loader.css'

class Loader extends Component {
    render() {
        return (
            <div className='loading'>
                <div className="lds-facebook">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <br/>
            </div>
        );
    }
}

export default Loader;