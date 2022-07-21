import './App.css';
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer"
import Todos from './MyComponents/Todos';



function App() {

  const onDelete =() => {
    console.log("I am onDelete of todo");
}

  let todos = [
    {
    sno: 1,
    title: "Go to the market",
    desc: "You need to go to the market to buy sugar"
    },
    {
      sno: 2,
      title: "Go to the gym",
      desc: "You need to build some muscles"
    },
    {
      sno: 3,
      title: "Go to the mall",
      desc: "You need to stalk"
    }
  ]
  return (
    <>
        <Header title= "My Todos List" searchBar= {true}/>
        <Todos todos = {todos} onDelete={onDelete} />
        <Footer/>
    </>
  );
}

export default App;
