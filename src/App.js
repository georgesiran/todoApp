import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList'
function iterateArray (arr){
  return arr.map((item)=>{
    return <li>{item.text}</li>
  })
}

function iterateArrayCheckedOnly (arr){
  return arr.filter((item)=>item.checked).map((item)=>{
    return <li>{item.text}</li>
  })
}

function App() {
  const arr  = [
    {text: "water", checked: false},
    {text: "bread", checked: true},
    {text: "milk", checked: false},
    {text: "eggs", checked: true},
  ];
  
  return (
    <div className="App">
      <TodoList></TodoList>
    </div>
  );
}

export default App;
