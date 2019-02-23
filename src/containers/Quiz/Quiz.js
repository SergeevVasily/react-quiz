import React, {Component} from 'react'
import './Quiz.scss'
import  ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class  Quiz  extends  Component{
    state = {
        quiz: [
            {
                answers: [
                    {text: 'answer 1 '},
                    {text: 'answer 2'},
                    {text: 'answer 3'},
                    {text: 'answer 4'}
                ]
            }
        ]
    };

    render() {
        return(
            <div className={'Quiz'}>
                <div className={'QuizWrapper'}>
                    <h1>Quiz</h1>
                    <ActiveQuiz answers={this.state.quiz[0].answers} />
                </div>
            </div>
        )
    }
}

export default Quiz