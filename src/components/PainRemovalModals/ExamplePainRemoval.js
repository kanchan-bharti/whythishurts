import React from 'react';

// Images: 
import pain from '../../assets/pain.png';

class PainRemoval extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <p className="col-9 p-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br/> <br/> Laudantium quod doloribus, enim reiciendis dicta cumque tempore consectetur quisquam obcaecati optio.</p>
                    <div className="col-3 d-flex">
                        <img className="w-100 align-self-center p-2" src={pain} alt="Pain-symbol" />
                    </div>
                </div>
            </div>

        )
    }
}

export default PainRemoval;