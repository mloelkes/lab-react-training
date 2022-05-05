import './App.css';
import IdCard from './components/IdCard.js';
import Greetings from './components/Greetings.js';
import Random from './components/Random.js';
import BoxColor from './components/BoxColor.js';
import CreditCard from './components/CreditCard.js';
import Rating from './components/Rating.js';
import DriverCard from './components/DriverCard.js'

const users = [
  {
    lastName: 'Doe',
    firstName: 'John',
    gender: 'male',
    height: 178,
    birth: '1992-07-14',
    picture: "https://randomuser.me/api/portraits/men/44.jpg"
  },
  {
    lastName: 'Delores',
    firstName: 'Obrien',
    gender: 'female',
    height: 172,
    birth: '1988-05-11',
    picture: "https://randomuser.me/api/portraits/women/44.jpg"
  }
];

const creditCards = [
  {
    type: "Visa",
    number: "0123456789018845",
    expirationMonth: 3,
    expirationYear: 2021,
    bank: "BNP",
    owner: "Maxence Bouret",
    bgColor: "#11aa99",
    color: "white" 
  },
  {
    type: "Master Card",
    number: "0123456789010995",
    expirationMonth: 3,
    expirationYear: 2021,
    bank: "N26",
    owner: "Maxence Bouret",
    bgColor: "#eeeeee",
    color: "#222222"
  },
  {
    type: "Visa",
    number: "0123456789016984",
    expirationMonth: 12,
    expirationYear: 2019,
    bank: "Name of the Bank",
    owner: "Firstname Lastname",
    bgColor: "#ddbb55",
    color: "white" 
  }
];

function App() {
  return (
    <div className="App">
      <h1>IdCard</h1>
      <IdCard user={users[0]}></IdCard>
      <IdCard user={users[1]}></IdCard>
      <h1>Greetings</h1>
      <Greetings lang="fr">Michael</Greetings>
      <h1>Random</h1>
      <Random min={1} max={100}></Random>
      <h1>BoxColor</h1>
      <BoxColor r={138} g={60} b={100}></BoxColor>
      <h1>CreditCard</h1>
      <CreditCard creditCard={creditCards[0]}></CreditCard>
      <CreditCard creditCard={creditCards[1]}></CreditCard>
      <CreditCard creditCard={creditCards[2]}></CreditCard>
      <h1>Rating</h1>
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>
      <h1>DriverCard</h1>
      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: "Toyota Corolla Altis",
          licensePlate: "CO42DE"
        }}
      />
    </div>
  );
}

export default App;
