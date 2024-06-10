import React, { useState } from 'react'

const Product = () => {

    const [state,setState] = useState({
        pName : "",
        cat : "",
        img : "",
        price : 0
    })

    const [arr,setArr] = useState([]);

    const getValue = (e) =>{
        let {name,value} = e.target;

        setState({
            ...state,
            [name] : value
        })
    }

    const complete = ()=>{
        // console.log(state);

        setArr([...arr,state])
    }

    console.log(arr);

  return (
    <div id='main'>
        <h1>Product Repository</h1>
        <div id="frm">
            <input type="text" className='form-control' placeholder='Enter Product Name' name='pName' onChange={getValue} />
            <input type="text" className='form-control' placeholder='Enter Product Category' name='cat' onChange={getValue} />
            <input type="text" className='form-control' placeholder='Enter Image URL' name='img' onChange={getValue}/>
            <input type="text" className='form-control' placeholder='Enter Product Price' name='price' onChange={getValue}/>
            <button className='btn btn-primary' onClick={complete}>SUBMIT</button>
        </div>
        
            <div id='output'>
                {
            arr.map((val)=>{
                return(<div id='fetch'>
                    <h1>{val.pName}</h1>
                    <img src={val.img} alt="" />
                    <h1>Price - {val.price}</h1>
                    <h3>Category - {val.cat}</h3>
                </div>)
            })
        }
            </div>
        
    </div>
  )
}

export default Product