
class DrumMachine extends React.Component{

    constructor(props){
      super(props);
      this.state = {
          soundtext: 'BeatMachine',
          beatTarget: ''
      };
      this.handleClick=this.handleClick.bind(this)
      this.handlePress=this.handlePress.bind(this)
    }



   

      handlePress(event){
        let pressTarget= event.which;

        switch(pressTarget){
            case 81:
            this.setState({soundtext: 'Kick', beatTarget: 'q'})
            this.beatPlay(this.state.beatTarget)
            break;
            case 87:
            this.setState({soundtext: 'BigBass', beatTarget: 'w'})
            this.beatPlay(this.state.beatTarget)
            break;
            case 69:
            this.setState({soundtext: 'Clap', beatTarget: 'e'})
            this.beatPlay(this.state.beatTarget)
            break;
            case 65:
            this.setState({soundtext: 'Snare 1', beatTarget: 'a'})
            this.beatPlay(this.state.beatTarget)
            break;
            case 83:
            this.setState({soundtext: 'Snare 2', beatTarget: 's'})
            this.beatPlay(this.state.beatTarget)
            break;
            case 68:
            this.setState({soundtext: 'HiHat', beatTarget: 'd'})
            this.beatPlay(this.state.beatTarget)
            break;
            case 90:
            this.setState({soundtext: 'Chord 1', beatTarget: 'z'})
            this.beatPlay(this.state.beatTarget)
            break;
            case 88:
            this.setState({soundtext: 'Chord 2', beatTarget: 'x'})
            this.beatPlay(this.state.beatTarget)
            break;
            case 67:
            this.setState({soundtext: 'Chord 3', beatTarget: 'c'})
            this.beatPlay(this.state.beatTarget)
            break;
            default:
            return this.state;
        }
        
      }

    
    handleClick(event){ 
        var clickTarget= event.target.value;
        this.setState({beatTarget: clickTarget});
        switch(clickTarget){
            case 'q':
            this.setState({soundtext: 'Kick'})
            this.beatPlay(this.state.beatTarget)
            break;
            case 'w':
            this.setState({soundtext: 'BigBass'})
            this.beatPlay(this.state.beatTarget)
            break;
            case 'e':
            this.setState({soundtext: 'Clap'})
            this.beatPlay(this.state.beatTarget)
            break;
            case 'a':
            this.setState({soundtext: 'Snare 1'})
            this.beatPlay(this.state.beatTarget)
            break;
            case 's':
            this.setState({soundtext: 'Snare 2'})
            this.beatPlay(this.state.beatTarget)
            break;
            case 'd':
            this.setState({soundtext: 'HiHat'})
            this.beatPlay(this.state.beatTarget)
            break;
            case 'z':
            this.setState({soundtext: 'Chord 1'})
            this.beatPlay(this.state.beatTarget)
            break;
            case 'x':
            this.setState({soundtext: 'Chord 2'})
            this.beatPlay(this.state.beatTarget)
            break;
            case 'c':
            this.setState({soundtext: 'Chord 3'})
            this.beatPlay(this.state.beatTarget)
            break;
            default:
            return this.state;
        }

    }

    beatPlay(beatId){
        switch(beatId){
            case 'q':
            document.getElementById('Q').play();
            break;
            case 'w':
            document.getElementById('W').play();
            break;
            case 'e':
            document.getElementById('E').play();
            break;
            case 'a':
            document.getElementById('A').play();
            break;
            case 's':
            document.getElementById('S').play();
            break;
            case 'd':
            document.getElementById('D').play();
            break;
            case 'z':
            document.getElementById('Z').play();
            break;
            case 'x':
            document.getElementById('X').play();
            break;
            case 'c':
            document.getElementById('C').play();
            break;
            default:

        }

        this.setState({beatTarget:''})
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handlePress);
        window.addEventListener('click', this.handleClick)
      }
    
  
    render(){

      return(

        <div id="drum-machine">
            <div id="all-display">
                <div id="display">

                    <div id="title-text">
                        <span>Drum Machine v1.0</span>
                    </div>
                    
                    <div id="text-display-bar">
                        <span id="sound-name">{this.state.soundtext}</span>
                    </div>

                    <div id="drum-buttons-container">
                        <div id = "button-row-1" className="button-row">
                       
                         <button id="kick" className="drum-pad" value="q">Q<br/>
                                <span>Kick</span>
                                <audio id="Q" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3" preload="auto"></audio>
                        </button>    
                       
                        <button id="bigbass" className="drum-pad" value="w" >W<br/>
                            <span>BigBass</span>
                            <audio id="W" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" preload="auto"></audio>
                        </button>

                        <button id="clap" className="drum-pad" value="e" >E<br/>
                            <span>Clap</span>
                            <audio id="E" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" preload="auto"></audio>
                        </button>
                    </div>

                    <div id="button-row-2" className="button-row">
                        <button id="snare-1" className="drum-pad" value="a" >A<br/>
                            <span>Snare 1</span>  
                            <audio id="A" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3" preload="auto"></audio>  
                        </button>

                        <button id="snare-2" className="drum-pad" value="s" >S<br/>
                            <span>Snare 2</span>
                            <audio id="S" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3" preload="auto"></audio>
                        </button>

                        <button id="hihat" className="drum-pad" value="d" >D<br/>
                            <span>HiHat</span>
                            <audio id="D" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3" preload="auto"></audio>
                        </button>
                    </div>

                    <div id = "button-row-3" className="button-row">
                        <button id="chord1" className="drum-pad" value="z" >Z<br/>
                            <span>Chord 1</span>
                            <audio id="Z" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3" preload="auto"></audio>
                        </button>
                        <button id="chord2" className="drum-pad" value="x" >X<br/>
                            <span>Chord 2</span>
                            <audio id="X" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3" preload="auto"></audio>
                        </button>
                        <button id="chord3" className="drum-pad" value="c" >C<br/>
                            <span>Chord 3</span>
                            <audio id="C" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3" preload="auto"></audio>
                        </button>
                    </div>

                </div>
                
                
                </div>

                 <div id="instructions">
                     <span>Click or press a key to play a drum pad</span>
                 </div>

            </div>
        </div>
      );
    }
  
}
  

ReactDOM.render(<DrumMachine />, document.getElementById("app"));
