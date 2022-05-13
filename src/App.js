import React from 'react';
import './App.css';

function App() {
  const [userInput, setUserInput] = React.useState('');
  const [answer, setAnswer] = React.useState('8');
  const [getAnswer, setGetAnswer] = React.useState(false);

  React.useEffect(() => {
    document.title = 'Magic 8 Ball';
  });

  const ask = () => {
    if (userInput) {
      setUserInput('');
      setGetAnswer(true);
    }
  };

  React.useEffect(() => {
    const acquireAnswer = async () => {
      // Refactor code Start

      setAnswer("Help! I'm broken");

      // Refactor code End
    };

    if (getAnswer) {
      acquireAnswer();
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
            setAnswer('8')
          }}
        />
        <button onClick={ask}>
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

export default App;
