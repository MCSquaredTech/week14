import logo from './logo.svg';
import { comments } from './comment-data.js';
import './App.css';
import Post from './components/post';

function App() {
  return (
    <div className="App">
      <div className='container'> 
        <div className='row'>
          <div className='col-sm col-md-6 offset-3 col-lg-10 offset-lg-2'>
            <Post {...{comments: comments, content: 'The Culture Reveloution and the Coming War!'}} />
          </div>
        </div>
      </div>  
    </div>
  );
}

export default App;