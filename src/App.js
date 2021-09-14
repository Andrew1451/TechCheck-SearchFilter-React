import { useState } from 'react';
import './App.css';

function App() {
  const namesFromDatabase = [
    {id: 1, username: 'Van Halen'}, 
    {id: 2, username: 'Shred Flanders'}, 
    {id: 3, username: 'Jimi Hendrix'}, 
    {id: 4, username: 'James Hetfield'}, 
    {id: 5, username: 'Kirk Hammet'}, 
    {id: 6, username: 'Eric Clapton'}, 
    {id: 7, username: 'Synyster Gates'}, 
    {id: 8, username: 'Zacky Vengeance'}, 
    {id: 9, username: 'Paul Gilbert'}, 
    {id: 10, username: 'Yngwie Malmsteen'}, 
    {id: 11, username: 'Andy James'}, 
    {id: 12, username: 'Steve Vai'}, 
    {id: 13, username: 'Zakk Wylde'},
    {id: 14, username: 'Eric Johnson'}
  ]

  const [names, setNames] = useState(namesFromDatabase)

  const filterNames = e => {
    const search = e.target.value.toLowerCase()
    const filteredNames = namesFromDatabase.filter(names => names.username.toLowerCase().includes(search))
    setNames(filteredNames)
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h2>Usernames</h2>
        <hr/>
        <input type='text' onChange={(e) => filterNames(e)} />
        <button>Search</button>
        <ul>
          {names.map(name => {
            return <li key={name.id}>{name.username}</li>
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;
