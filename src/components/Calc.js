
import React, { useState } from 'react'

const Calc = () => {
    const [input,setinput]=useState("");
    const handle_change=(e)=>{
setinput(e.target.value);

    }
    const [result,setresult]=useState("");
    const get_result=()=>{
        setresult(eval(input))

    }
    const clear=()=>{
        setresult("")
        setinput("")
    }


  return (<>
 
    
    <div className='flex flex-col items-center w-[100%] h-[100vh]'>
    <div className='text-center mt-24 text-lg font-semibold'>Calculator application</div>
      
        <div className='flex flex-col  justify-center items-center w-[30%] h-[400px] rounded-2xl shadow-lg bg-blue-200'>

<div class="for_input flex justify-center    ">


    <div>
    
        <input type="text"  className='rounded-lg shadow-lg h-[30px] text-center' value={input} onChange={handle_change}/> &nbsp;
        
        <button className='btn bg-gray-500 rounded shadow-lg px-3 py-1 text-white' onClick={get_result}>
            Get Result
        </button>
        {result?<div className='text-center'>  <p className='text-dark'>result:{result}</p></div>:null}
      
    </div>
   
</div>

<div class="for_buttons mt-7">
    <div className='flex flex-wrap justify-between items-center w-[300px]'>
        <div>
           <button className='btn bg-white rounded shadow-md px-7 py-1 m-3' onClick={()=>{setinput(input +'1')}}>1</button> 
        </div>
        <div>
        <button className='btn bg-white rounded shadow-md px-7 py-1 m-3' onClick={()=>{setinput(input +'2')}}>2</button> 
        </div>
        <div>
        <button className='btn bg-white rounded shadow-md px-7 py-1 m-3 ' onClick={()=>{setinput(input +'3')}}>3</button> 
        </div>
        <div>
        <button className='btn bg-white rounded shadow-md px-7 py-1 m-3 ' onClick={()=>{setinput(input +'4')}}>4</button> 
        </div>
        <div>
        <button className='btn bg-white rounded shadow-md px-7 py-1 m-3 ' onClick={()=>{setinput(input +'5')}}>5</button> 
        </div>
        <div>
        <button className='btn bg-white rounded shadow-md px-7 py-1 m-3' onClick={()=>{setinput(input +'6')}}>6</button> 
        </div>
        <div>
        <button className='btn bg-white rounded shadow-md px-7 py-1 m-3' onClick={()=>{setinput(input +'7')}}>7</button> 
        </div>
        <div>
        <button className='btn bg-white rounded shadow-md px-7 py-1 m-3' onClick={()=>{setinput(input +'8')}}>8</button> 
        </div>
        <div>
        <button className='btn bg-white rounded shadow-md px-7 py-1 m-3' onClick={()=>{setinput(input +'9')}}>9</button> 
        </div>
        <div>
        <button className='btn bg-white rounded shadow-md px-7 py-1 m-3' onClick={()=>{setinput(input +'+')}}>+</button> 
        </div>
        <div>
        <button className='btn bg-white rounded shadow-md px-7 py-1 m-3' onClick={()=>{setinput(input +'-')}}>-</button> 
        </div>
        <div>
        <button className='btn bg-white rounded shadow-md px-7 py-1 m-3' onClick={()=>{setinput(input +'/')}}>/</button> 
        </div>
        <div>
        <button className='btn bg-white rounded shadow-md px-7 py-1 m-3' onClick={()=>{setinput(input +'%')}}>%</button> 
        </div>
        <div>
        <button className='btn bg-white rounded shadow-md px-7 py-1 m-3' onClick={()=>{setinput(input +'*')}}>*</button> 
        </div>
        <div>
        <button className='btn bg-white rounded shadow-md px-7 py-1 m-3' onClick={()=>{
            clear()
    
    }}>Clr</button> 
        </div>

    </div>

</div>


</div>

    </div>
    </>

    
  )
}

export default Calc