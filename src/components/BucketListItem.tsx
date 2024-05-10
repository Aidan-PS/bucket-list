import React, {useState} from 'react';

export interface BucketListItemProps{
    id: string;
    title: string;
    category: string;
    location: string;
    completed: boolean;
}


export const BucketListItem = (
    props: BucketListItemProps
    & {
        onDelete: (id: string) => void,
        onEdit: (id: string, data: BucketListItemProps) => void
    }
): JSX.Element => {


    const [editMode, setEditMode] = useState<boolean>(false);
    const [formData, setFormData] = useState<BucketListItemProps>({
        id: props.id,
        title: props.title,
        category: props.category,
        location: props.location,
        completed: false
    });

    const handleEditClick = (): void => {
        setEditMode(true);
     
    };

    const handleCancelEdit= (): void => {
        setEditMode(false);
    };

    const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleEditSubmit = (event: React.FormEvent): void => {
        event.preventDefault();
        props.onEdit(props.id, formData);
        setEditMode(false);

    }


    const [isChecked, setIsChecked] = useState<boolean>(props.completed);

    const handleCheckboxChange = (): void => {
        setIsChecked(!isChecked);
    }


    return (
        <div data-item-id={props.id} className="bg-light p-3 shadow-sm rounded d-flex flex-column gap-2" style={{width:"500px"}}>
            {!editMode ? (
                <>
                    <div className="fw-bold">{props.title}</div>
                    <div>{props.category}</div>
                    <div>{props.location}</div>
                    <label>
                        Completed:
                        <input
                            type="checkbox"
                            checked={props.completed}
                            className="ms-2"
                            onChange={handleCheckboxChange}
                        />
                    </label>
                    <div className="d-flex align-items-center gap-3">
                        <button 
                            className="btn btn-info"
                            onClick={handleEditClick}
                        >
                            Edit
                        </button>
                        <button 
                            className="btn btn-danger me-auto"
                            onClick={() => props.onDelete(props.id)}
                        >
                            Delete
                        </button>
                    </div>
                </>
            ) : (
                <form onSubmit={handleEditSubmit} className="d-flex flex-column gap-3">
                    <label style={{width:"300px"}} className='d-flex justify-content-between align-items-center'>
                        Title
                        <input 
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleFormChange}
                        />
                    </label>
                    <label style={{width:"300px"}} className='d-flex justify-content-between align-items-center'>
                        Category
                        <input 
                            type="text"
                            name="category"
                            value={formData.category}
                            onChange={handleFormChange}
                        />
                    </label>
                    <label style={{width:"300px"}} className='d-flex justify-content-between align-items-center'>
                        Location
                        <input 
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleFormChange}
                        />
                    </label>
                    <div className="d-flex align-items-center gap-3">
                        <button type="submit" className='btn btn-success'>Save</button>
                        <button type="button" className='btn' onClick={handleCancelEdit}>Cancel</button>
                    </div>
                </form>
            )}
        </div> 
    );
}
