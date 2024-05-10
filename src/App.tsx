import React, { useState } from 'react';
import { hot } from "react-hot-loader/root";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BucketListItemProps, BucketListItem } from './components/BucketListItem';

const App = () => {
    const [bucketListItems, setBucketListItems] = useState<BucketListItemProps[]>([
        {
            id: "123345345",
            title: "Restaurant",
            description: "Restaurant description",
            location: "London",
            completed: true,
        },
        {
            id: "7563534",
            title: "Museum",
            description: "Museum description",
            location: "Berlin",
            completed: false
        }
    ]);

    const [newItem, setNewItem] = useState<BucketListItemProps>({
        id: '',
        title: '',
        description: '',
        location: '',
        completed: false
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const {name, value} = event.target;
        setNewItem({
            ...newItem,
            [name]: value
        })
    }

    const addItem = (): void => {
        if (newItem.title.trim() !== '') {
            setBucketListItems([...bucketListItems, newItem]);
            setNewItem({
                id: '',
                title: '',
                description: '',
                location: '',
                completed: false
            });
        }
    };

    return (
        <>
            <div className="d-flex justify-content-center align-items-center flex-column">
                <h1 className="my-5">Bucket List</h1>
                <div className='gap-1 p-4 rounded border'>
                    <h5 className="fw-bold">New item</h5>
                    <div className="d-flex flex-column gap-4">
                        <div style={{width:'300px'}} className="d-flex align-items-center justify-content-between">
                            Title
                            <input 
                                type="text"
                                name="title"
                                value={newItem.title}
                                onChange={handleChange}
                            />
                        </div>
                        <div style={{width:'300px'}} className="d-flex align-items-center justify-content-between">
                            Description
                            <input 
                                type="text"
                                name="description"
                                value={newItem.description}
                                onChange={handleChange}
                            />
                        </div>

                        <div style={{width:'300px'}} className="d-flex align-items-center justify-content-between">
                            Location
                            <input 
                                type="text"
                                name="location"
                                value={newItem.location}
                                onChange={handleChange}
                            />
                        </div>
                  
                </div>
                <button className="btn btn-success ms-auto mt-3" onClick={addItem}>Add</button>
                </div>
                <div className="d-flex flex-column gap-3 my-5" id="items-container">
                    {bucketListItems.map(item => <BucketListItem key={item.id} {...item} />)}
                </div>
            </div>
        </>
    );
};

export default hot(App);
