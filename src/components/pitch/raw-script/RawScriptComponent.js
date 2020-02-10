import React from 'react';

export default class RawScriptComponent extends React.Component {

  render(){
    const {
      data
    } = this.props;

    const red = {color: "red"};

    return (
      <div>
        <strong style={{float: "left"}}><span style={red}>({data.number})</span></strong>

        <br/>
        <br/>

        <div style={{textAlign: "left"}}>
          <i>*{data.description}*</i>
        </div>

        <br/>

        <div>{data.text}</div>

        <br/>

        <div style={{display: "flex", flexDirection: "column", alignItems: "flex-end"}}>
          {Object.keys(data.choices).map((key)=>{
            return (
              <strong>{`{${data.choices[key].text}}`}–><span style={red}>({data.choices[key].to})</span></strong>
            );
          })}
        </div>

        <br/>
        <hr/>

      </div>
    );
  }
}
