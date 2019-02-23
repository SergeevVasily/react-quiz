import React  from 'react'
import './ActiveQuiz.scss'
import  AnswersList from  './AnswersList/AnswersList'

const ActiveQuiz = props => {
    console.log('ACtive', props)

    return(
    <div className={'ActiveQuiz'}>
        <p className={'Question'}>
            <span>
                <strong>2.</strong>&nbsp;
                {props.question}
            </span>
            <small> 4 out of 12 </small>
        </p>

        <AnswersList
            answers={props.answers}
            onAnswerClick ={props.onAnswerClick}
        />
    </div>
    )
}

export  default  ActiveQuiz