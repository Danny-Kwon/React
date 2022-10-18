// import React from "react";
// const IterationSample = ()=>{
//     const names = ["눈사람","얼음","눈","바람"];
//     // const namelist = names.map(name=><li>{name}</li>);
//     const namelist = names.map((name,idx)=><li key={idx}>{name}</li>);
//     return <ul>{namelist}</ul>
// }

// export default IterationSample;

// import {useState} from 'react';

// const IterationSample = () => {
//     const [names, setNames] = useState([
//         {id:1, text:'눈사람'},
//         {id:2, text:'얼음'},
//         {id:3, text:'눈'},
//         {id:4, text:'바람'}
//     ])
//     const [inputText, setInputText] = useState('');
//     const [nextId, setNextId] = useState(5);

//     const onChange = e => setInputText(e.target.value);
//     const onClick = () => {
//         const nextNames = names.concat({
//             id : nextId,
//             text : inputText
//         })
//         setNextId(nextId + 1);
//         setNames(nextNames);
//         setInputText('');
//     }

//     const namesList = names.map(name => <li key={name.id}>{name.text}</li>)
//     return(
//         <>
//             <input value={inputText} onChange={onChange} />
//             <button onClick={onClick}>추가</button>
//             <ul>{namesList}</ul>
//         </>
//     )
// }

// export default IterationSample;

import {useState} from 'react';

const IterationSample = () => {
    const [names, setNames] = useState([
        {id:1, text:'철수'},
        {id:2, text:'영희'},
        {id:3, text:'민수'},
        {id:4, text:'지영'}
    ])
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);

    const onChange = e => setInputText(e.target.value);
    const onClick = () => {
        const nextNames = names.concat({
            id : nextId,
            text : inputText
        })
        setNextId(nextId + 1);
        setNames(nextNames);
        setInputText('');
    }

    const onDelete = id => {
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);
    }

    const onDelete_1 = () => {
        const nextNames = names.filter(name => name.text !== inputText);
        setNames(nextNames);
    }

    const namesList = names.map(name => 
        <li key={name.id} onDoubleClick={() => onDelete(name.id)}>
            {name.text}
        </li>
    )
   
    return(
        <>
            <input value={inputText} onChange={onChange} />
            <button onClick={onClick}>추가</button>
            <button onClick={onDelete_1}>삭제</button>
            <ul>{namesList}</ul>
        </>
    )
}

export default IterationSample;