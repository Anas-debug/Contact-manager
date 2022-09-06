import React, {useState} from 'react';

const INITIAL_LIST = ["React", "Redux", "Redux-Toolkit", "GraphQL", "Remix"];

const ListWithAddItem = () => {
    const [value, setValue] = useState('');
    const [list, setList] = useState(INITIAL_LIST); 

    // inner function in the ListWithItem component
    const handleChange = (e) => {
        setValue(e.target.value);
    };

    // inner function in the ListWithItem component
    const handleSubmit = (e) => {
        if (value) {
            setList(list.concat(value));
        }
        setValue('');
        e.preventDefault();
    }

    return(
        <div>
            <ul>
                {list.map((item) => {
                    return <li key={item}> {item} </li>;
                })}
            </ul>

            <form onSubmit={handleSubmit}>
                <input type="text" value={value} onChange={handleChange}/>
                <button>Add Item</button>
            </form>
        </div>
    );
}

export default ListWithAddItem;