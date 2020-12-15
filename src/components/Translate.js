import React, {useState} from "react";
import Dropdown from "./Dropdown";

const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    }
];

const Translate = () => {
    const [language, SetLanguage] = useState(options[0]);


    return (
      <div>
          <Dropdown
              options={options}
              selected={language}
              onSelectedChange={SetLanguage}
          />
      </div>
    );
};

export default Translate;
