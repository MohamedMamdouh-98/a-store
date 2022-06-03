import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import axios from 'axios';

import Store from './components/store';

function App() {
  const [storeItems, seStoreItems] = useState([]);

  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products").then(({ data })=>{
      seStoreItems(data)
    })
  }, [])

  return (
    <div className="App">
      <Container>
        <Store items={storeItems} onItemAdd={ itemData => {
          seStoreItems([...storeItems, itemData])
        }}/>
      </Container>
    </div>
  );
}

export default App;
