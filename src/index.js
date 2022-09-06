import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';


function AddPersonForm(props){
  const [person, setPerson] = useState("");

  function handleChange(e){
    setPerson(e.target.value);
  }

  function handleSubmit(e){
    props.handleSubmit(person);
    setPerson('');
    e.preventDefault();
  }

  return (
    <form onSubmit ={handleSubmit}>
      <input type="text"
        placeholder='New Contact Name'
        onChange={handleChange}
        value ="person"/>
        <button type='submit'>Add New Contact</button>
    </form>
  );
}

function PeopleList(props){
  const arr = props.data;
  const listItems = arr.map((value, index) => <li key={index}>{ value }</li>);

  return(<ul>{listItems}</ul>);
}

function ContactManager(props){
  const [contacts, setContacts] = useState(props.data);

  function addPerson(name){
    setContacts([...contacts, name]);
  }

  return(
    <div>
      <AddPersonForm handleChange={addPerson}/>
      <PeopleList data={contacts} />
    </div>
  );
}

const contacts = ["John Fontain", "Bilal Philips", "Yusuf Estes"]; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContactManager data ={contacts}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
