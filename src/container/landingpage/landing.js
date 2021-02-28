import React ,{ Component } from "react";
import '../landingpage/landing.css';
import Content from './contentLanding/Contentlanding';


class Landing extends Component {

    render(){
        return(
            <div className="container">
                <Content/>
            </div>
        );
    }
}
export default Landing;