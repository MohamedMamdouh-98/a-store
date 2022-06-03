import React from "react";
import {useRef} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Form } from 'react-bootstrap';
const StoreItems = ({title, price})=>{
    return (
            <div className="row">
                <div className="col-lg-3 col-sm-12 bg-info">
                    <Card>
                        {title}
                        <p>{price}</p>  
                    </Card>
                </div>
            </div>
    )
}   

const Store =({items, onItemAdd})=>{
    const itemNameRef = useRef()
    const itemPriceRef = useRef()
    return (
        <div className="">
                {items.map((item)=>{
                    return (
                        <StoreItems title={item.title} price={item.price} />
                    )
                    
                })}
                <Form.Control ref={itemNameRef} className="mt-3 py-2"
                placeholder="Item Name"
                />
                <Form.Control ref={itemPriceRef} className="mt-3 py-2"
                type="number"
                placeholder="Item Name"
                />
                <Button onClick={ () => {
                    onItemAdd({
                        title: itemNameRef.current.value,
                        price: itemPriceRef.current.value
                    })
                }} 
                variant="primary" className="my-3">Add Item</Button>
        </div>
    )
}

export default Store;