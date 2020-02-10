import React from 'react';

import ComicNavigator     from '../ComicNavigator.js';
import RawScriptComponent from './raw-script/RawScriptComponent.js';
import raw_script_text    from './raw-script/raw-script-text.js';

export default class ComicExcerptPage extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      current_page: "1"
    }
  }

  setCurrentPage = (current_page, callback)=>{
    this.setState({
      current_page
    }, callback);
  };

  render(){
    const { current_page } = this.state;

    const red = {color: "red"};

    return (
      <div>
        <h1 className="p-5 m-0">Comic Excerpt</h1>

        <p style={{textAlign: "justify"}}>
          Everything here has been generated 100% on my own. I created the music, wrote the excerpt and drew the storyboard. The purpose of pointing this out is to demonstrate the range of what I can offer / help with when working on this comic with others.
          <br/>
          <hr/>
          <strong>Setting:</strong>
          <br/>
          Jack, Evelyn, and Clint have just stepped through a portal created by their instruments for the first time. They are met by an army of stray notes. Their environment is a long barren white hallway, a horde of stray notes screeching in their path.
          <hr/>
        </p>

        <h2>Example Functional Comic:</h2>
        <h4>[The Highway to Hallways]</h4>

        <ComicNavigator setCurrentPage={this.setCurrentPage} page_data={raw_script_text[current_page]}/>

        <hr/>
        <p style={{textAlign: "justify"}}>
          <strong>Important Notes:</strong>
          <br/>
          – The <span style={red}>red</span> numbers inside parentheses denote a new page number. e.g. <strong><span style={red}>(1)</span></strong>
          <br/>
          – Italics within asterisks denote the panel description. This text does not show in the actual panel. e.g. *This is an example of a visual description for the artist*
          <br/>
          – Narration and dialog appears below the image, not within it (barring special / fun cases).
          <br/>
          – Because the story is not always linear and because it has a choose your own adventure flare, <strong>bold</strong> text between the braces at the bottom of each section is a link pointing to what the next section is. e.g. <strong>{"{This is an example}"}–><span style={red}>(2)</span></strong>
        </p>
        <hr/>

        <h2>Raw Script:</h2>
        <h4>[The Highway to Hallways]</h4>

        {Object.keys(raw_script_text).sort((a, b)=>{
          return parseFloat(a) - parseFloat(b);
        }).map((key)=>{
          return (
            <RawScriptComponent data={raw_script_text[key]}/>
          );
        })}
      </div>
    );
  }
}
