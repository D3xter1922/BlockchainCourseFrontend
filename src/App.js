import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
function App() {



  const [chain, setChain] = useState("");
  const [valid, setValid] = useState("");
  const [mine, setMine] = useState("");


  const getMineHandler = async() =>{

      
    fetch('/mine_block')
     .then(res=>res.json())
     .then((result)=>{
       setMine(JSON.stringify(result));
       console.log(result.chain);
     },
     (error) => {
       console.log(error);
     }
     )
 }
 const getValidHandler = async() =>{

      
  fetch('/valid')
   .then(res=>res.json())
   .then((result)=>{
     setValid(JSON.stringify(result));
     console.log(result.chain);
   },
   (error) => {
     console.log(error);
   }
   )
}
  

  useEffect(()=>{
    const getChainHandler = async() =>{

      
       fetch('/get_chain')
        .then(res=>res.json())
        .then((result)=>{
          setChain(JSON.stringify(result.chain));
          console.log(result.chain);
        },
        (error) => {
          console.log(error);
        }
        )
    } 
    getChainHandler();
  })
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <div class="card" style={{width: "18rem"}}>
          <div class="card-body">
            <h5 class="card-title">List of Blocks</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">Below are the hashes of each block</h6>
            <p class="card-text">{chain}</p>
            <button type="button" class="btn btn-primary" onClick={getMineHandler}>Mine</button>

            <button type="button" class="btn btn-secondary" onClick={getValidHandler}>Validate</button>

          </div>
        </div>
        <div class="card" style={{width: "18rem"}}>
          <div class="card-body">
            <h5 class="card-title">Messages</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">Mine Log</h6>
            <p class="card-text">{mine}</p>
            <h6 class="card-subtitle mb-2 text-body-secondary">Valid Log</h6>
            <p class="card-text">{valid}</p>
            

          </div>
        </div>
        
          
        </p>
        
    </div>
  );
}

export default App;
