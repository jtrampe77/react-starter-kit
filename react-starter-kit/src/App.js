// Function ===> Component JSX(markup/data)
// Components MUST START FROM A SINGLE NODE - element
// Wrap them in a single element - <div> or <> this is a react fragment

import Button from "./components/button/Button";

function App() {
  return (
    <>
    <header>
      <h1>React Starter Kit</h1>
      <Button title="Default Button" type="default"/>
      <Button title="Warning Button" type="warning"/>
      <Button title="Danger Button" type="danger"/>
      <Button title="Small Button" type="small"/>
      <Button title="Small Warning Button" type="smallWarning"/>
    </header>
    </>
    
  );
} 

export default App;
