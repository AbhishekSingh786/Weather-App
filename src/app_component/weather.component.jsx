import React from "react";

const Weather = (props) =>{
    return(
        <div className="container">
            <div className="cards pt-4">
                <h1>{props.city}</h1>
                <h5 className="py-4">
                <i class={`fas ${props.weatherIcon} fa-3x`}></i>
                </h5>
                {props.temp_celsius?  <h1 className="py-2">{props.temp_celsius} &deg;C</h1>:null}

                {/* Show Min Max Temp */}
                {minmaxTemp(props.temp_max,props.temp_min)}

                <h4 className="py-3">{props.description}</h4>
            </div>
        </div>
    );
};

function minmaxTemp(max,min){
if(max&&min){
    return(<h3>
        <span className="px-2">{max}&deg;</span>
        <span className="px-2">{min}&deg;</span>
    </h3>);
}   
}

export default Weather;