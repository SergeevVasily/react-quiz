import React  from 'react'
import './ActiveQuiz.scss'
import  AnswersList from  './AnswersList/AnswersList'

const ActiveQuiz = props => {
    console.log('ACtive', props);

    return(
    <div className={'ActiveQuiz'}>
        <p className={'Question'}>
            <span>
                <strong>{props.answerNumber}.</strong>&nbsp;
                {props.question}
            </span>
            <small> {props.answerNumber} out of  {props.quizLength}</small>
        </p>

        <AnswersList
            answers={props.answers}
            onAnswerClick ={props.onAnswerClick}
        />
    </div>
    )
}

export  default  ActiveQuiz