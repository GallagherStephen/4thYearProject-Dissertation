import React, { Component } from "react";
var __html = require('./chatpage.html.js');
var template = { __html: __html };

class chatPageDisplay extends Component {
  render() {
    return (
      <div className="screen-share">
        <span dangerouslySetInnerHTML={template} />
      </div>
    );
  }
}
export default chatPageDisplay;