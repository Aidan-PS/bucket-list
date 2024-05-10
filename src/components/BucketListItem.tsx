import React, {useState} from 'react';

export interface BucketListItemProps{
    id: string;
    title: string;
    description: string;
    location: string;
    completed: boolean;
}


export const BucketListItem = (props: BucketListItemProps): JSX.Element => {

    const [isChecked, setIsChecked] = useState<boolean>(props.completed);

    const handleCheckboxChange = (): void => {
        setIsChecked(!isChecked);
    }

    return (
        <div>
            <div data-item-id={props.id} className="fw-bold">{props.title}</div>
                <div>{props.description}</div>
                <div>{props.location}</div>
                <label>
                    Completed:
                    <input
                        type="checkbox"
                        checked={isChecked}
                        className = 'ms-2'
                        onChange={handleCheckboxChange}
                    />
                </label>
        </div> 
    )
}
