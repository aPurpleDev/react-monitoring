import React from 'react';
import axios from 'axios';
import Osmetrics from "./osmetrics";

import logo from './softia_logo.png';
import './App.css';
import Rammetrics from "./rammetrics";

const softiaStyle = {
    overflow: 'hidden',
    height: 'auto',
    width: '25%',
    border: '1px solid black',
    borderRadius: '5px',
    padding: '5px',
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            osmetrics: [],
            rammetrics: [],
            timer: 0
        }
    }

    getStates = () => {
        axios.get('http://localhost:8060/osjson/latest/1')
            .then((response) => {
                this.setState({
                    osmetrics: response.data.data,
                });
                console.log('Osmetrics', this.state.osmetrics);
            });

        axios.get('http://localhost:8060/ramjson')
            .then((response) => {
                this.setState({
                    rammetrics: response.data.data
                });
                console.log('Rammetrics', this.state.rammetrics);
            })
    };

    componentDidMount() {
        this.interval = setInterval( () => this.getStates(), 5000 );
    }

    componentWillUnmount() {
        clearInterval( this.interval );
    }

    /*componentDidUpdate(prevProps, prevState, snapshot) {

            setInterval(() => {
                axios.get('http://localhost:8060/osjson/latest/1')
                    .then((response) => {
                        this.setState({
                            osmetrics: response.data.data,
                        });
                    });
            }, 10000);

            setInterval(() => {
                axios.get('http://localhost:8060/ramjson')
                    .then((response) => {
                        this.setState({
                            rammetrics: response.data.data
                        });
                    })
            }, 10000);

    }*/

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1> Monitoring Dashboard </h1>
                    <img src={logo} className="App-logo" alt="logo" style={softiaStyle}/>
                    <h1>
                        Live CPU Usage
                    </h1>
                    <Osmetrics osmetrics={this.state.osmetrics}/>
                    <h1>
                        Live Free RAM
                    </h1>
                    <Rammetrics rammetrics={this.state.rammetrics}/>
                </header>
            </div>
        );
    }
}

export default App;
