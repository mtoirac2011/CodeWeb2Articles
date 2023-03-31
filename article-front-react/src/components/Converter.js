import { useEffect, useState } from 'react';
import Axios from 'axios';
import Dropdown from 'react-dropdown';
import { HiSwitchHorizontal } from 'react-icons/hi';
import 'react-dropdown/style.css';

const Converter = () => {
 
// Initializing all the state variables 
const [info, setInfo] = useState([]);
const [input, setInput] = useState(0);
const [from, setFrom] = useState("usd");
const [to, setTo] = useState("inr");
const [options, setOptions] = useState([]);
const [output, setOutput] = useState(0);

// Calling the api whenever the dependency changes
useEffect(() => {
  Axios.get(
`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`)
 .then((res) => {
    setInfo(res.data[from]);
  })
}, [from]);

// Calling the convert function whenever
// a user switches the currency
useEffect(() => {
  setOptions(Object.keys(info));
  convert();
}, [info])
  
// Function to convert the currency
function convert() {
  var rate = info[to];
  setOutput(input * rate);
}

// Function to switch between two currency
function flip() {
  var temp = from;
  setFrom(to);
  setTo(temp);
  
  convert();
}

return (
  <div className="App1">
        <div className="heading">
            <h2 className='subtitle'>Currency converter</h2>
        </div>
        <div className="container1 d-flex">
            <div className="left">
                <h3>Amount</h3>
                <input type="text" 
                placeholder="Enter the amount" 
                onChange={(e) => setInput(e.target.value)} />
            </div>
            <div className="middle">
                <h3>From</h3>
                <Dropdown options={options} 
                        onChange={(e) => { setFrom(e.value) }}
                value={from} placeholder="From" />
            </div>
            <div className="switch">
                <HiSwitchHorizontal size="30px" 
                            onClick={() => { flip()}}/>
            </div>
            <div className="right">
                <h3>To</h3>
                <Dropdown options={options} 
                        onChange={(e) => {setTo(e.value)}} 
                value={to} placeholder="To" />
            </div>
        </div>
        {/* {
        input > 0 &&
            <div className='boton'>
                <button type="button" className='btn btn-primary' onClick={()=>{convert()}}>Convert</button>
            </div>
        } */}
        
        {
        input != 0 &&
            <div className="result">
                <p className='texto1'>{input+" "+from+" = "+output.toFixed(2) + " " + to}</p>
            </div>
        }
        
    </div>
);
}

export default Converter;