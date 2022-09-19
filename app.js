// TODO
//import ReactDOM from 'react-dom';
const { useState } = React;

const Coffee = () => (
  <li>coffee</li>
);

const Milk = () => (
  <li>Milk</li>
);


const GroceryListItem = (props) => {
  const [isDone, setIsDone] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const onListItemClick = (event) => {
    console.log('I got clicked');
  }

  const clickStyle = { textDecoration: isDone? 'line-through' : 'none'};
  const hoverStyle = {fontWeight: isHovered? 'bold' : 'none'}

  return (
    <li style={hoverStyle}
      onClick={() => {
        setIsDone(!isDone);
        onListItemClick();
      }}
      onMouseOver={() => {
        setIsHovered(!isHovered);
        console.log('hovered')
      }}
      onMouseOut={() => {
        setIsHovered(!isHovered);
        console.log('moved away');
      }}>
      {props.groceryitem}
    </li>
  )
};


const GroceryList = (props) => (
  <ul>
    {props.groceryitems.map((item) => (
      <GroceryListItem groceryitem = {item} />
    ))}
  </ul>
);

ReactDOM.render(<GroceryList groceryitems = {['coffee', 'milk', 'lemons', 'fish']}/>, document.getElementById("app"));



//----------Method 1------------//
//const GroceryListItem = (props) => {
//  return (
//    <ul>
//      {props.groceryitems.map(item => (
//        <li>{item}</li>
//      ))}
//    </ul>
//  )
//};
//
//const GroceryList = () => (
//  <GroceryListItem groceryitems = {['coffee', 'milk', 'lemons', 'fish']}/>
//);
//
//ReactDOM.render(<GroceryList />, document.getElementById("app"))

//--------Method 2-------------//
//const GroceryListItem = (props) => (
//  <li>{props.groceryitem}</li>
//);
//
//
//const GroceryList = (props) => (
//  <ul>
//    {props.groceryitems.map((item) => (
//      <GroceryListItem groceryitem = {item} />
//    ))}
//  </ul>
//);
//
//ReactDOM.render(<GroceryList groceryitems = {['coffee', 'milk', 'lemons', 'fish']}/>, document.getElementById("app"));
//