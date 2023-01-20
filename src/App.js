import { useEffect, useState } from 'react';
import './App.css';

function App() {
  
  const [occupations, setOccupations] = useState({});
  const [states, setStates] = useState({});
  const [name, setName] = useState('');
  const [email, setEmail] = useState('')
  
  //fetches data for locations and occupations select
  const getFormData = async () => {
    try {
      const response = await fetch('https://frontend-take-home.fetchrewards.com/form')
      const data = await response.json();

      setStates(data.states);
      setOccupations(data.occupations);

    } catch (error) {
      console.log("There was an error:", error)
    }
  }

  useEffect(()=> {
    getFormData();
  }, [])

  return (
    <div className="wrapper">
      <form className="form centered">
        <h1>Join the Fun!</h1>
          <label>Full Name:
            <br />  
            <input  type="text" 
                    value={name} 
                    onChange={(e)=>{setName(e.target.value)}}
                    placeholder="Full name..."
                    alt="full-name-input" 
                    required />
          </label>
          <label> Email: 
            <br/>
            <input  type="email"
                    value={email} 
                    onChange={(e)=>{setEmail(e.target.value)}}
                    placeholder="email@emailaddress.com"
                    alt="email-input" 
                    required />
          </label>
          <label> Password: <br />
            <input  type="text"
                    placeholder="Password..." 
                    required /><br />
                  Confirm Password: <br />
            <input  type="text"
                    placeholder="Make sure it matches..." 
                    required /><br /> 
          </label>
          <label> Occupation: <br />
            <select placeholder="Occupation..." required >
              { //hydrates occupation select with fetched data
                occupations.length &&
                  occupations?.map((job, index) => {
                    return <option 
                      alt={job} 
                      key={index} 
                      value={job}
                      >{job}</option>
              })}
            </select>
          </label>
          <label> State: <br />
            <select  required>
              { states.length &&
                  states.map((state, index) => {
                    return <option
                              alt={state.name}
                              key={index} 
                              value={`${state.name}, ${state.abbreviation}`}
                              > {`${state.name}, ${state.abbreviation}`}
                            </option>
              })}
            </select>
          </label> 
      </form>
    </div>
  );
}

export default App;
