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
                <p id={`tour-item-para-${id}`}>
                    {readMore?info :`${info.substring(0,200)}...`}
                    <button id={`see-more-${id}`} onClick={()=>setReadMore(!readMore)}>
                        {readMore?'See less':'See more'}
                    </button>
                </p>
                <button id={`delete-btn-${id}`} onClick={() => remove(id)}>Not Interested</button>

            </div>
        </div>
    </div>
  )
}

export default Tour
