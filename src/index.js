import ReactDOM from 'react-dom/client';
import React from 'react';
import { getAnswer } from './getAnswer';

import './index.css';
// import App from './App';

class MagicEightBall extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userInput: '',
            randomIndex: false
        }
        this.ask = this.ask.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    ask() {
        if (this.state.userInput) {
            this.setState({
                randomIndex: true,
                userInput: ''
            });
        }
    }

    handleChange(event) {
        this.setState({
            userInput: event.target.value,
            randomIndex: false
        });
    }

    render() {
        let answer = '8';

        if (this.state.randomIndex) {
            answer = getAnswer();
        }

        return (
            <div>

                <div className="question-container">
                    <input
                        type="text"
                        value={this.state.userInput}
                        onChange={this.handleChange}
                    />
                    <button onClick={this.ask}>
                        Ask the Magic Eight Ball!
                    </button>
                </div>

                <div className="ball-container">
                    <div className="ball-black-outer">
                        <div className="ball-white-inner">
                            <div>
                                {(answer !== '8') ?
                                    answer
                                    :
                                    <div className='eight'>8</div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="ball-shadow"></div>
                </div>

            </div>
        );
    }
};


class App extends React.Component {
    render() {
        return (
            <MagicEightBall />
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);