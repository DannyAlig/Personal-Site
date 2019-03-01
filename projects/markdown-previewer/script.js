class Editor extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      editorInput: {content: "# Welcome to the Markdown Previewer\n## Written with React, JS, HTML, CSS\n\n#### Feel free to change this input and test it out!\n\nThere's also [links](https://www.freecodecamp.com)\n\nHere is some inline   `<p>Code</p>` between backticks.\n\n```\n//And here we can create some multi-line code:\n\nfunction adder(num1, num2) {\n\treturn(num1+num2);\n}\n```\n\n>Here we're making a block quote!\n\nIt's also possible to create bold text with **double asterisks**.\n\n1. Red\n1. Blue\n1. Yellow\n\nImages are a piece of cake:\n\n![Pizza](pizza_small.jpg)"}
    };
    this.handleChange = this.handleChange.bind(this);
  }
  
  //a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.

  handleChange(event){
    let flux = this.state.editorInput;
    flux.content= event.target.value;
    this.setState({editorInput: flux});
  }

  markedGenerator(raw){
    let rawMarked = marked(raw, {sanitize: true});
    return {__html: rawMarked};
  }

  render(){
    return(
      <div id = "appwrapper">

        <div id="header">
          <h1><u>Markdown Previewer</u></h1>
          <span>Created by Danny Alig as a project for <a href="https://freecodecamp.org" target="_blank">FreeCodeCamp</a></span>
          <a id="marked-link" href="https://marked.js.org/#/README.md" target="_blank">Find out more about Marked.js</a>
          
        </div>

        <div id ="main-app">

          <div id="editor-side">
              <h3 id="input-title">Markdown Input: (Edit me!)</h3>
              <textarea id= "editor" onChange={this.handleChange} value={this.state.editorInput.content}></textarea>
          </div>

          <div id="preview-side">
              <h3 id='output-title'>Markdown Output:</h3>
              <div id="preview" dangerouslySetInnerHTML={this.markedGenerator(this.state.editorInput.content)}></div>
          </div>

        </div>
          
        
      
      </div>
    );
  }

}

ReactDOM.render(<Editor />, document.getElementById("app"));

