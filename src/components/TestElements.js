import React, { useState, useEffect } from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { TextField } from '@material-ui/core';

const TestElements = ({element, deleteForm, handleChange, index, text}) => {

    const [open, setOpen] = useState()

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div>
            <div style={{border: "3px solid gray", padding: '10px', margin: '10px'}}>
                {/* <FormControl className="mx-3" style={{width: '200px'}}>
                    <InputLabel id="demo-controlled-open-select-label">نوع ارز</InputLabel>
                    <Select
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        open={open}
                        onClose={handleClose}
                        onOpen={handleOpen}
                        value={element.currency}
                        onChange={(e) => handleChange(index, e)}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl> */}

                <TextField className="mx-3" id="standard-basic" label="هزینه مشتری" name="currency"
                    value={element.currency}
                    onChange={(e) => handleChange(index, e)}
                />
                <TextField className="mx-3" id="standard-basic" label="هزینه مشتری" name="price"
                    value={element.price}
                    onChange={(e) => handleChange(index, e)}
                />
                <TextField className="mx-3" id="standard-basic" label="هزینه شرکت" name="cost"
                    value={element.cost}
                    onChange={(e) => handleChange(index, e)}
                />
                <button style={{padding: '5px 15px', margin: '10px 40px', border:'none', borderRadius: '50px', background: 'gray', color: 'white'}}
                   onClick={() => deleteForm(index)} 
                >X</button>
                <p style={{fontSize: "20px", color: "pink"}}>{element.textError}</p>
            </div>
        </div>
    )
}

export default TestElements
