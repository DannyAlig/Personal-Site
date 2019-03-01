
class Calculator extends React.Component{

    constructor(props){
      super(props);
      this.state = {
          displayText: '0',
          runningEquation: '',
          clickNumber: 0,
          inputCount: 0,
          lastInputType: '',
          decimalUsed: false,
          numberInProg: false,
          justComped: false
      };
      this.handleClick=this.handleClick.bind(this)
    }




    handleClick(event){ 
        
        var clickTarget= event.target.value;
        var running= this.state.runningEquation;
        var updatedRunning= running+clickTarget;
        this.state.clickNumber += 1;
        var newInputCount = this.state.inputCount+1;
        var runningNumber = this.state.runningNum + clickTarget;
        

        switch(clickTarget){

            case 'clear':
            this.setState({
                displayText: '0',
                runningEquation: '',
                runningNum: '',
                clickNumber: 0,
                inputCount: 0,
                decimalUsed: false,
                lastInputType: '',
                justComped: false,
                numberInProg: false
            });
            break;

            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':

            if (this.state.numberInProg== true && this.state.runningNum == "0"){
                break;
            }

            if(this.state.runningEquation=="0"){
                break;
            }

        
                this.setState({
                    runningEquation: updatedRunning,
                    displayText: updatedRunning,
                    lastInputType: "number",
                    justComped: false,
                    inputCount: newInputCount,
                    numberInProg: true,
                    runningNum: runningNumber
                })
            break;

            case '.':
            
            if(this.state.inputCount==0){
               this.setState({
                   runningEquation: '0.',
                   displayText: '0.',
                   lastInputType: "decimal",
                   decimalUsed: true,
                   justComped: false,
                   inputCount: newInputCount,
                   runningNum: "0.",
                   numberInProg: true
                })
                break;
            }

        
            if (this.state.decimalUsed == false && this.state.lastInputType == 'number'){
                this.setState({
                    runningEquation: updatedRunning,
                    displayText: updatedRunning,
                    lastInputType: 'decimal',
                    decimalUsed: true,
                    justComped: false,
                    inputCount: newInputCount,
                    runningNum: runningNumber
                })
            }
            break;

            case '+':
            case '-':
            case '*':
            case '/':

            

            if(this.state.lastInputType != 'number'){
                if(this.state.lastInputType =='operator'){
                    let replacement=(running.substring(0,(running.length-1)))+clickTarget;
                    console.log('replacement: '+replacement)
                    this.setState({
                        runningEquation: replacement,
                        displayText: replacement,
                    })
                }else{
                break;
                }
            } else { 
                this.setState({
                    runningEquation: updatedRunning,
                    displayText: updatedRunning,
                    lastInputType: 'operator',
                    decimalUsed: false,
                    justComped:false,
                    inputCount: newInputCount,
                    runningNumber: ''
                })
            }
            break;

            case '=':
            if(this.state.lastInputType=='number'){
                
                var rawAns= eval(running);
                var ans;
                var strAns= `${rawAns}`;
                console.log("strAns: "+strAns);
                var y = strAns.split(".");

                if (y.length==2){
                    var decimals= y[1];
                    var w = decimals.length;
                    var consecZero = 0;
                    var firstZeroIndex =1000;
                    console.log('orig decimal places: '+w)
                    if(w < 6){
                        ans=rawAns;
                    } else{
                    
                    for (var i = 0; i<w; i++){
                        if(decimals[i]=='0' && decimals[i+1]=='0'){

                            if (firstZeroIndex==1000){
                                firstZeroIndex= i;
                            }
                            consecZero++;
                          
                        } 
                    }

                        if (consecZero>3 && rawAns>0.00001){
                            let correctDecimal= decimals.slice(0,firstZeroIndex);
                            let correctedAns= y[0]+"."+correctDecimal;
                            ans = eval(correctedAns);
                            console.log("corrected ans: "+ans);
                        } else if(consecZero >3 && w<8){
                            ans= parseFloat(Math.round(rawAns * 1000000) / 1000000).toFixed(6);
                            } else {
                            ans= parseFloat(Math.round(rawAns*100000000)/100000000).toFixed(8);
                        }
                    }
                } else {
                    ans = rawAns;
                }
                
              
                
                
                updatedRunning= ans;
                this.setState({
                    runningEquation: updatedRunning,
                    displayText: ans,
                    lastInputType: 'number',
                    justComped: true,
                    inputCount: 1,
                    runningNum: ans
                })
                 
                
            }

            break;


            default:
            return this.state;

            
        }

        if(this.state.justComped){
            $("#display-text").css("color", "var(--equalsColor)");
        } else{
            $('#display-text').css("color","var(--displayTextColor");
        }
        
    }

 
    componentDidMount() {
        window.addEventListener('click', this.handleClick)
      }



    
  
    render(){

      return(

        <div id="app-wrap">
            <div id="all-display">
                <div id="display-container">

                    <div id="title-text">
                         <span>Danny's Awesome Calculator</span>
                     </div>

                    <div id="display">
                        <span id="display-text">{this.state.displayText}</span>
                    </div>

                    <div id="buttons-container">
                        <button id="zero" className="calcbutton" value='0'>
                            <span>0</span>
                        </button>
                        <button id="one" className="calcbutton" value='1'>
                            <span>1</span>
                        </button>
                        <button id="two" className="calcbutton" value='2'>
                            <span>2</span>
                        </button>
                        <button id="three" className="calcbutton" value="3">
                            <span>3</span>
                        </button>
                        <button id="four" className="calcbutton" value="4">
                            <span>4</span>
                        </button>
                        <button id="five" className="calcbutton" value="5">
                            <span>5</span>
                        </button>
                        <button id="six" className="calcbutton" value="6">
                            <span>6</span>
                        </button>
                        <button id="seven" className="calcbutton" value="7">
                            <span>7</span>
                        </button>
                        <button id="eight" className="calcbutton" value="8">
                            <span>8</span>
                        </button>
                        <button id="nine" className="calcbutton" value="9">
                            <span>9</span>
                        </button>
                        <button id="decimal" className="calcbutton" value =".">
                            <span>.</span>
                        </button>
                        <button id="equals" className="calcbutton" value="=">
                            <span>=</span>
                        </button>
                        <button id="add" className="calcbutton" value="+">
                            <span>+</span>
                        </button>
                        <button id="subtract" className="calcbutton" value="-">
                            <span>-</span>
                        </button>
                        <button id="multiply" className="calcbutton" value="*">
                            <span>&#215;</span>
                        </button>
                        <button id="divide" className="calcbutton" value="/">
                            <span>&#247;</span>
                        </button>
                        <button id="clear" className="calcbutton" value='clear'>
                            <div id="clear-text-holder">
                                <span id="ac">AC</span>
                                <span id="clear-text">CLEAR</span>
                            </div>
                        </button>

                </div>
                
                
                </div>

                 <div id="instructions">
                     <span>Use your mouse to make a calculation.<br/> Hit the clear key to reset.</span>
                     <br/><br/>
                     <span>Designed and Coded by Danny Alig</span>

                 </div>

            </div>
        </div>
      );
    }
  
}
  

ReactDOM.render(<Calculator />, document.getElementById("app"));


$(document).ready(function() {
    
    $(".calcbutton").click(handleClick());
        
});




