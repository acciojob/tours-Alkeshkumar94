import React from 'react'
import Tour from './Tour'
function Tours({tours,remove}) {
  return (
    <div>
        <div className='title'>
            <h1>Our Tours</h1>
            <div className='underline'></div>
        </div>
        <div>
            {
                tours.map(tour=>{
                     return <Tour key={tour.id} {...tour} remove={remove} />
                })
            }
        </div>
    </div>
  )
}

export default Tours