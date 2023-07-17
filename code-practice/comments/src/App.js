import React, {useState} from 'react';
import './App.css';
import UserComment from './components/comment';

function App() {
  const [comments, setComments] = useState([]);
  const { id, value } = comments


  const handleSave = (comment) => { 
    // console.log('handleSave Event Called');
    setComments([ ...comments, { 
        id: comments.length, 
        value: comment 
    }])
    console.log(comments);
  }

  return (
    <div className="App">
      <div className="form">
        <UserComment onClick={handleSave} />
      </div>  
      <ul> 
        {comments.map(comment => (
          <li key={comment.id}>{comment.value.review} {comment.value.stars}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
