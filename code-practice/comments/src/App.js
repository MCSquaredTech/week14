import React, {useState} from 'react';
import './App.css';
import UserComment from './components/comment';
import DisplayReview from './components/DisplayReview';

function App() {
  const [comments, setComments] = useState([]);
  const { id, value } = comments


  const handleSave = (comment) => { 
    // console.log('handleSave Event Called');
    setComments([ ...comments, { 
        id: comments.length, 
        value: comment 
    }])
  }

  let comment
  if (comments) { 
    comment = comments.map(function (comment, key) {
      return <DisplayReview key={key} comment={comment} />
    })
  }

  return (
    <div className="App">
      <div className="form">
        <UserComment onClick={handleSave} />
      </div>  
      <div className='App'>
        {comment} 
      </div>
    </div>
  );
}

export default App;
