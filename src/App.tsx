import React, { useState } from 'react';
import { hot } from "react-hot-loader/root";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BucketListItem, BucketListItemProps } from './components/BucketListItem';

const App = () => {

    const deleteItem = (id: string): void => {
        setBucketListItems(bucketListItems.filter(item => item.id !== id));
    };

    const editItem = (id: string, data: BucketListItemProps): void => {
        setBucketListItems(bucketListItems.map(item => {
            if (item.id === id) {
                return { ...item, ...data };
            }
            return item;
        }));
    };

    const addItem = (): void => {
        if (newItem.title.trim() !== '') {
            setBucketListItems([...bucketListItems, newItem]);
            setNewItem({
                id: '',
                title: '',
                category: '',
                location: '',
                completed: false
            });
        }
    };



    const initialItems: BucketListItemProps[] = [
        {
            id: "123345345",
            title: "Black Lock",
            category: "Restaurant",
            location: "London",
            completed: true
        },
        {
            id: "7563534",
            title: "British Museum",
            category: "Museum",
            location: "Berlin",
            completed: false
        }
    ];

    const [bucketListItems, setBucketListItems] = useState<BucketListItemProps[]>(initialItems);

    const [newItem, setNewItem] = useState<BucketListItemProps>({
        id: '',
        title: '',
        category: '',
        location: '',
        completed: false
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target;
        setNewItem({ ...newItem, [name]: value });
    };


    return (
        <div className="container mt-5 d-flex justify-content-center align-items-center flex-column gap-4">
            <div className="gap-3 p-4 rounded border">
                <h5 className="fw-bold">New item</h5>
                <div className="d-flex flex-column gap-4">
                    <label style={{width:"300px"}} className='d-flex justify-content-between align-items-center'>
                        Title
                        <input 
                            type="text"
                            name="title"
                            value={newItem.title}
                            onChange={handleChange}
                        />
                    </label>
                    <label style={{width:"300px"}} className='d-flex justify-content-between align-items-center'>
                        Category
                        <input 
                            type="text"
                            name="category"
                            value={newItem.category}
                            onChange={handleChange}
                        />
                    </label>
                    <label style={{width:"300px"}} className='d-flex justify-content-between align-items-center'>
                        Location
                        <input 
                            type="text"
                            name="location"
                            value={newItem.location}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <button className="btn btn-success mt-4" onClick={addItem}>Add</button>
            </div>
            <div className="d-flex flex-column gap-3 my-5" id="items-container">
                {bucketListItems.map(item => (
                    <BucketListItem 
                        {...item}
                        onDelete={deleteItem}
                        onEdit={editItem}
                    />
                ))}
            </div>
        </div>
    );
};

export default hot(App);
