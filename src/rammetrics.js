import React from 'react';

class Rammetrics extends React.Component{

    render() {
        console.log(this.props.rammetrics);
        return (
            <>
                <div className="Rammetrics">
                    {this.props.rammetrics.slice(0,1).map((entry) =>{
                        return <h1>{(entry.FreeRAM / 100000).toFixed(2)} GB</h1>
                    })
                    }
                </div>
            </>
        );
    }
}

export default Rammetrics;