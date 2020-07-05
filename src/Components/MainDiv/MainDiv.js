import React from 'react';
import './MainDiv.css'
// import Cardd from '../../card1.svg'

const MainDiv = () => {
    return (
        <div>
            <div className="main-div">
                <div className="main-div_left">
                    <div>
                        <div className="f-30 main-div_head-one">Master Your</div>
                        <div className="f-30 main-div_head-two">Destiny With</div>
                        <div className="bold-head f-30 main-div_head-three">PlacementSaga</div>
                    </div>
                    <div className="btn-qus">
                        <button className="button-styled">View Sample Question</button>
                    </div>
                </div>
                <div className="main-div_right">
                    <div className="card-cont">
                        <div className="card-1">
                            <div>
                                <img src={require('../../card1.svg')} alt=""/>
                            </div>
                            <div>
                                <h3>
                                    MOCK TESTS
                                </h3>
                            </div>
                        </div>
                        <div className="backface1"></div>
                    </div>
                    <div className="card-cont2">
                        <div className="card-2">
                            <div>
                                {/* <img src={require('../../card1.svg')} alt=""/> */}
                            </div>
                            <div>
                                <h3>
                                    HIGHLY QUALIFIED MENTORS FROM LEADING TEXT GIANTS
                                </h3>
                            </div>
                        </div>
                        <div className="backface2"></div>
                    </div>
                </div>
            </div>
            <div className="logo-flex">
                <div className="logo-flex_logo">
                    <img src={require('../../logos/Google.11e04b4f - Copy.svg')} style={{ animationDelay: '100ms' }} alt=""/>
                </div>
                <div className="logo-flex_logo">
                    <img src={require('../../logos/Adobe.6fbebcd0.svg')} style={{ animationDelay: '300ms' }} alt=""/>
                </div>
                <div className="logo-flex_logo">
                    <img src={require('../../logos/Amazon.d21f098e.svg')} style={{ animationDelay: '600ms' }} alt=""/>
                </div>
                <div className="logo-flex_logo">
                    <img src={require('../../logos/Microsoft.db8b21a8.svg')} style={{ animationDelay: '200ms' }} alt=""/>
                </div>
                <div className="logo-flex_logo">
                    <img src={require('../../logos/Paytm.b67bc6ae.svg')} style={{ animationDelay: '600ms' }} alt=""/>
                </div>
                <div className="logo-flex_logo">
                    <img src={require('../../logos/Google.11e04b4f.svg')} style={{ animationDelay: '500ms' }} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default MainDiv;
