import React  from 'react'
import './ActiveQuiz.scss'
import  AnswersList from  './AnswersList/AnswersList'

const ActiveQuiz = props => (
    <div className={'ActiveQuiz'}>
        <p className={'Question'}>
            <span>
                <strong>2.</strong>&nbsp;
                How are you?
            </span>

            <small> 4 out of 12 </small>
        </p>

        <AnswersList
            answers={props.answers}
        />
    </div>
)

export  default  ActiveQuiz