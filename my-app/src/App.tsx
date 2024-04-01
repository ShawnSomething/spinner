import React, {useState} from 'react';
import Title from './title';
import Counter from './counter';
import Button from './button';
import Comments from './comments';
import robot_idle from './robot_idle.png';
import robot_left from './robot_left.png';
import robot_back from './robot_back.png';
import Robot_right from './Robot_right.png';

function App() {
  const [count, setCount] = useState(0)
  const [positionId, setPositionId] = useState(0)
  const [randomComment, setRandomComment] = useState('')

  const positions = [robot_idle, robot_left, robot_back, Robot_right]

  const comments = ['Keep Going', 'There is going to be something cool coming up', 'You are going to love it', 'uhm...', 'Are you still spinning?', 'Just a little more!', 'Cannot believe that you have been spinning this long', 'You still going? What a nerd.']

  const handleButtonClick = () => {
    setCount((prevCount) => {
      const newCount = prevCount + 1;
      if (newCount % 5 === 0) {
        const randomIndex = Math.floor(Math.random() * comments.length);
        setRandomComment(comments[randomIndex]);
      } else {
        setRandomComment('');
      }
      return newCount;
    });

    let currentPosition = positionId
    const intervalId = setInterval(() => {
    currentPosition = (currentPosition + 1) % positions.length;
    setPositionId(currentPosition);
    if (currentPosition === positionId) {
      clearInterval(intervalId);
    }
  }, 120)
  }

  const pageStyle = {
    backgroundColor: 'lightgrey',
    margin: 0,
    height: '100vh'
  }

  const imageStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0px auto',
    width: '300px',
    height: 'auto'
}

  return (
    <main style={pageStyle}>
        <Title />
        <Counter count={count} />
        <img src={positions[positionId]} style={imageStyle} alt="robot"/>
        <Button onClick={handleButtonClick}/>
        <Comments comment={randomComment}/> //hope this works
    </main>
  );
}

export default App;
