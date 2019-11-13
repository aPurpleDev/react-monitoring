import React from 'react';

class Utilityclock extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }

    tick() {
        this.setState({date : new Date()});
    }

    render() {
        console.log(this.props.osmetrics);
        return (
            <>
                <div className="Utilityclock">
                    <h2>The time is NOW </h2>
                    <h2>{this.state.date.toLocaleTimeString()}</h2>
                </div>
            </>
        );
    }

    componentDidMount() {
        this.timerID = setInterval( () => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }
}

export default Utilityclock;