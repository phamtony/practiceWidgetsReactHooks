import React, {useState} from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";


const items = [
    {
        title: 'What is react?',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'Why use react?',
        content: 'React is a fav JS lib among engineers.'
    },
    {
        title: 'How do you use react?',
        content: 'You use React by creating components'
    }
]

const options = [
    {
        label: 'The color red',
        value: 'red'
    },
    {
        label: 'The color green',
        value: 'green'
    },
    {
        label: 'the shade of blue',
        value: 'blue'
    }
]

export default () => {
    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);

    return (
        <div>
            {/*<Accordion items={items}/>*/}
            {/*<Search />*/}
            <button onClick={() =>
            {
                setShowDropdown(!showDropdown)
            }}
            >
                Toggle Dropdown
            </button>
            {showDropdown ?
                <Dropdown
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                /> : null
            }
        </div>
    );
}