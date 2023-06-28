import ListGroup from './components/ListGroup';
import Alert from './components/Alert';
import Button from './components/Button';
import { useState } from 'react';

function App() {
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  // return (
  //   <div>
  //     <ListGroup
  //       items={['New York', 'Tallinn', 'Tartu', 'Rakvere', 'Tokyo']}
  //       heading="Citites"
  //       onSelectItem={handleSelectItem}
  //     ></ListGroup>
  //   </div>
  // );

  // return (
  //   <div>
  //     <Alert>
  //       Hello <h1>World!</h1>
  //     </Alert>
  //   </div>
  // );

  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>Achtung!</Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>My button</Button>
    </div>
  );
}

export default App;
