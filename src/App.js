import './App.css';
import React, {useState} from 'react';
import Heading from './Components/Heading';
import MarkDown  from './Components/MarkDown';
import Preview  from './Components/Preview';
import Markdown from 'marked-react';

function App() {

  const [ markdown, setMarkdown ] = useState('Hello');

  const handleMarkdownChange = (e) => {
    setMarkdown(e);
  }

  return (
    <div className="App">
      {/* <h1> Convert your Markdown</h1>
      <div className='row'>
        <div className='col-6'>
          <textarea id='editor' value={markdown} onChange={handleChange}/>
        </div>
        <div className='col-6' id = 'preview'>
          <Markdown value={markdown}>
            
          </Markdown>
        </div>
      </div> */}

      <Heading></Heading>
      <MarkDown markdown = {markdown}
                onMarkdownChange = {handleMarkdownChange}>
      </MarkDown>
      <Preview></Preview>
    </div>
  );
}

export default App;
