
import {Link} from 'react-router-dom'
import Image from '../images/main_header.jpg'

const MainHeader = () =>{
    return (
        <header className="main__header">
            <div className="container main__header-container">
                <div className="main__header-left">
                    <h4>##CalculateyourTripCost</h4>
                    <h1>Discover Toll tax charges</h1>
                    <p>
                    “Find Toll charges between two cities! 
                    Calculate how many Toll Plazas are on the route! 
                    Find Toll rates for Car,Bus,Truck and Multi axle vehicles!”
                    Don't worry this is all you want.
                    </p>
                    <Link to="/TollCalculation" className="btn lg">Get Started</Link>
                </div>
                <div className="main__header-right">
                    <div className="main__header-circle"></div>
                    <div className="main__header-image">
                        <img src={Image} alt="Main Header Image"/>

                        
                                            </div>
                </div>
            </div>
        </header>
    )
}
export default MainHeader;