import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, useParams } from "react-router-dom";

export default class UserCenter extends Component {
    constructor(props) {
        super(props);
        console.info('props', props);
    }

    render() {
        return (
            <Router>
                <div>
                    <h2>Accounts</h2>

                    <ul>
                        <li>
                            <Link to="/netflix">Netflix</Link>
                        </li>
                        <li>
                            <Link to="/zillow-group">Zillow Group</Link>
                        </li>
                        <li>
                            <Link to="/yahoo">Yahoo</Link>
                        </li>
                        <li>
                            <Link to="/modus-create">Modus Create</Link>
                        </li>
                    </ul>

                    <Switch>
                        <Route path="/:id" children={<Child />} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

function Child() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { id } = useParams();

    console.info('1212');

    return (
        <div>
            <h3>ID: {id}</h3>
        </div>
    );
}

// class Child extends Component {
//     constructor(props) {
//         super(props);

//         console.info('props', props);
//     }

//     componentWillReceiveProps(props) {
//         console.info('new-props', props);
//     }
//     componentDidMount(props){
//         console.info('componentDidMount-props', props);
//     }

//     render() {
//         console.info('1212', 1212);

//         return (<div>
//             <h3>ID: 1212</h3>
//         </div>)
//     }
// }

