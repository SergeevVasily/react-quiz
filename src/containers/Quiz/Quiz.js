import React, {Component} from 'react'
import './Quiz.scss'
import  ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class  Quiz  extends  Component{
    state = {
        activeQuestion: 0,
        quiz: [
            {
                question: 'What color is the sky?',
                rightAnswerId: 2,
                id: 1,
                answers: [
                    {text: 'Black', id: 1},
                    {text: 'Blue', id: 2},
                    {text: 'Red', id: 3},
                    {text: 'Green', id: 4}
                ]
            },
            {
                question: 'What year Seattle has been build?',
                rightAnswerId: 4,
                id: 2,
                answers: [
                    {text: '1876', id: 1},
                    {text: '1704', id: 2},
                    {text: '1689', id: 3},
                    {text: '1703', id: 4}
                ]
            },
            {
                question: 'What color is the sky?',
                rightAnswerId: 2,
                id: 3,
                answers: [
                    {text: '1700', id: 1},
                    {text: '1705', id: 2},
                    {text: 'Red', id: 3},
                    {text: 'Green', id: 4}
                ]
            }

        ]
    };

    onAnswerClickHandler = answerId =>{
        console.log('Answer Id ', answerId)

        this.setState({
            activeQuestion: this.state.activeQuestion + 1
        })
    };

    render() {
        return(
            <div className={'Quiz'}>
                <div className={'QuizWrapper'}>
                    <h1>Quiz</h1>
                    <ActiveQuiz
                        answers={this.state.quiz[this.state.activeQuestion].answers}
                        question={this.state.quiz[this.state.activeQuestion].question}
                        onAnswerClick={this.onAnswerClickHandler}
                        quizLength ={this.state.quiz.length}
                        answerNumber={this.state.activeQuestion + 1}
                    />
                </div>
            </div>
        )
    }
}

export default Quiz