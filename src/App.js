
import './App.css';
import Person from './Person';
import Button from './Button';
import Header from './Header';
import List from './List';


function App() {
   const handleClick = ()=>{
    console.log('clicked');
  };

  const items = ['Item1','Item2',"Item3","item4"]
  return (
    <div className="App">
      {/* pass array in items */}
      <List items={items}></List> 
     <Person name='Arun' age='34'></Person>
     <Button text='Click' onClick={handleClick}></Button>
      
     <Header title='this is header '></Header>
    </div>
  );
}

export default App;
