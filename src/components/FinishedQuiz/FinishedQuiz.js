import React from 'react'
import './FinishedQuiz.scss'

const FinishedQuiz = props => {
    return(
        <div className={'FinishedQuiz'}>
           <ul>
               <li>
                   <strong>1</strong>
                   How are you
                   <i className={''}/>
               </li>
           </ul>
            <p>Correct 4 out of 10</p>
            <div>
                <button>Repeat</button>
            </div>
        </div>
    )
}

export default FinishedQuiz