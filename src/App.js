import React, {useState} from 'react';
import './App.css';
import Card from './Card';
import { faker } from '@faker-js/faker';

function App() {
  const [name, setName] = useState('Allan Smith');
  const [showCard, setShowCard] = useState(true)
  const toggleShowCard = () => setShowCard(!showCard)
  const cardMarkup = showCard && 
  <Card 
    avatar='https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/809.jpg'
    name={name}
    title='Chief Intranet Manager'
  />

  // avatar='https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/477.jpg'
  // name='Miranda Langworth'
  // title='Product Accountability Executive'

  // avatar='https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/758.jpg'
  // name='Phillip Schoen I'
  // title='Investor Group Coordinator'

  // avatar='https://avatars.githubusercontent.com/u/22411976'
  // name='Randy O'Hara Sr.'
  // title='Forward Brand Coordinator'

  return (
    <div className="App">
      <button className="button" onClick={toggleShowCard}>Toggle</button>
      {cardMarkup}
      <Card
        avatar={faker.image.avatar()}
        name={faker.person.fullName()}
        title={faker.person.jobTitle()}
      />
    </div>
  );
}

export default App;
