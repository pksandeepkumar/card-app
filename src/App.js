import './App.css';
import CardView from './CardView';
import data from "./Data";


function App() {

  console.log(data); 

  const cardElements = data.map( element => {
    return <CardView 
            key = {element.id}
            title = {element.title} 
            image = {element.image}
            star = {element.star}
            />;
  })
  console.log(cardElements);

  return (
    <section>
      {cardElements}
    </section>
  );
}

export default App;
