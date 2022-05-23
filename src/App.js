import React from 'react';
import './App.css';

function App() {
  const [userInput, setUserInput] = React.useState('<Enter Name Here>');
  const [answer, setAnswer] = React.useState('Hi!');
  const [getAnswer, setGetAnswer] = React.useState(false);

  React.useEffect(() => {
    document.title = 'Make a Request';
  });

  const ask = () => {
    if (userInput) {
      //setUserInput('');
      setGetAnswer(true);
    }
  };

  React.useEffect(() => {
    var acquireAnswer = async () => {
      // Refactor code Start

        var response = null;
        try {
            setAnswer('Waiting...');
            response = await fetch('https://localhost:7022/Hello?name=' + userInput);
        } catch (err) {
            console.log(err);
            setAnswer('Help! I\'m broken - failed to get a response from the desired endpoint.');
        }

        if (response != null) {
            if (response.status >= 200 && response.status <= 299) {
                const responseText = await response.text();
                console.log(responseText);
                setAnswer(responseText);
            } else {
                console.log(response.status, response.statusText);
                setAnswer('Help! I\'m broken - received invalid response code.');
            }
        }
      // Refactor code End
    };

    if (getAnswer) {
        acquireAnswer();
        setUserInput('');
      setGetAnswer(false);
    };

  }, [getAnswer]);

  return (
    <div>
      <div className="question-container">
        <input
          type="text"
          value={userInput}
          onChange={(event) => { 
            setUserInput(event.target.value)
            setGetAnswer(false)
            setAnswer('Hi!')
          }}
        />
        <button onClick={ask}>
          Say Hello to Someone!
        </button>
      </div>

      <div className="ball-container">
        <div className="ball-black-outer">
          <div className="ball-white-inner">
            <div>
              {(answer !== 'Hi!') ?
                answer
                :
                <div className='eight'>Hi!</div>
              }
            </div>
          </div>
        </div>
        <div className="ball-shadow"></div>
      </div>

    </div>
  );
}

export default App;
