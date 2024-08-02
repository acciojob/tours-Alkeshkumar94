import React, { useState } from 'react'

function Tour({id,image,info,price,name,remove}) {
    const [readMore,setReadMore]=useState(false);
  return (
    <div>
        <div className='tourpage'>
            <img src={image} alt='image' />
            <div className='footer'>
                <h4>{name}</h4>
                <p>{price}</p>
                <p id="tour-item-para">
                    {readMore?info :`${info.substring(0,200)}...`}
                    <button onClick={()=>setReadMore(!readMore)}>
                        {readMore?'show less':'show more'}
                    </button>
                </p>
                <button id="delete-btn" onClick={() => remove(id)}>Not Interested</button>

            </div>
        </div>
    </div>
  )
}

export default Tour