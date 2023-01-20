import { useCallback, useEffect, useState } from 'react';
import './App.css';

function App() {
  
  const [occupations, setOccupations] = useState({});
  const [states, setStates] = useState({});
  const [name, setName] = useState('')
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
    console.log(states, occupations)
  }, [])

  return (
    <div className="wrapper">
      <div className="form centered">
        <h1>Join the Fun!</h1>
        <form >
          <input type="text" value={name}placeholder="Full name..."/>
          <textarea placeholder="Email..." />
          <textarea placeholder="Password..." />
          <textarea placeholder="Occupation..." />
          <textarea placeholder="State..." />
          <label>
            <select>
              {/*states?.map(x => {
                <option value={`${x.name}, ${x.abbreviation}`} />
              })*/}
            </select>
          </label>
        </form>
      </div>
    </div>
  );
}

export default App;
