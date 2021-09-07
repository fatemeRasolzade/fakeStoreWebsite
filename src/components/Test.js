import React, { useState } from 'react';
import TestElements from './TestElements';

const Test = () => {

    const [elements, setElements] = useState([
        {
            currency: "",
            price: "1000",
            cost: "2000",
            textError: ""
        },
    ])

    const addForm = () => {
        let element = {
            currency: "",
            price: "",
            cost: "",
            textError: ""
        }
        let newElements = [...elements]
        newElements.push(element)
        setElements(newElements)
    }

    const handleChange = (index, e) => {
        let newArr = [...elements];
        newArr[index] = {
                ...newArr[index],
                [e.target.name]: e.target.value
        };
        setElements(newArr)
    }

    const deleteForm = (index) => {
        let filterElements = elements.filter((_,e) => e !== index)
        setElements(filterElements)
    }

    const handleSubmit = () => {
        let el 
        let newArr = [...elements]
        for(el in elements){
            if(elements[el].currency === "" || elements[el].price === "" || elements[el].cost === ""){
                newArr[el] = {
                    ...newArr[el],
                    textError: `همه فیلد های سطر ${parseInt(el)+1} باید پر شود`
                }
            }else{
                newArr[el] = {
                    ...newArr[el],
                    textError: ""
                }
            }
            setElements(newArr)
        }
    }

    return (
        <div>
            {elements.map((element, index) => (
                <TestElements
                element={element}
                deleteForm={deleteForm}
                handleChange={handleChange}
                index={index}/>
            ))}
                <button style={{padding: '5px 15px', margin: '10px 40px', border:'none', borderRadius: '50px', background: 'gray', color: 'white'}}
                   onClick={addForm} 
                >+</button>
                <button style={{padding: '5px 15px', margin: '10px 40px', border:'none', borderRadius: '50px', background: 'gray', color: 'white'}}
                    onClick={handleSubmit}
                >ثبت نهایی</button>
        </div>
    )
}

export default Test
