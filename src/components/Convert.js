import React ,{useEffect} from "react";

const Convert = ({language, text}) => {
    useEffect(() => {
        console.log('New pick')
    }, [language, text]);

    return (
        <div>hello</div>
    );
}

export default Convert;