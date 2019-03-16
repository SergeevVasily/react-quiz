import React, {Component} from 'react'
import './Quiz.scss'
import  ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'

class  Quiz  extends  Component{
    state = {
        results: {},  // {[id]: 'success' 'error'}
        isFinished: false,
        activeQuestion: 0, 
        answerState: null,
        quiz:[
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
                question: 'Are you ok?',
                rightAnswerId: 3,
                id: 3,
                answers: [
                    {text: 'ok', id: 1},
                    {text: 'i dont know', id: 2},
                    {text: 'i think so', id: 3},
                    {text: 'lol', id: 4}
                ]
            }
                 ]
    };

    onAnswerClickHandler = answerId => {
        if(this.state.answerState){
            const key = Object.keys(this.state.answerState)[0];
            if (this.state.answerState[key] === 'success'){
                return
            }
        }


        const question = this.state.quiz[this.state.activeQuestion];
        const results = this.state.results;
        if(question.rightAnswerId === answerId){                                    //right answer
            if(!results[question.id]){
                results[question.id] = 'success'
            }

            this.setState({
                answerState: {[answerId]: 'success'},
                results
            });
            const timeout = window.setTimeout(() => {
                if(this.isQuizFinished()){
                    this.setState({
                        isFinished: true
                    })
                }else{
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    })
                }

                window.clearTimeout(timeout)
            }, 1000)

        }else{
            results[question.id] = 'error';                                    //wrong answer
            this.setState({
                answerState: {[answerId]: 'error'},
                results
            })
        }
    };
    
    isQuizFinished(){
            return this.state.activeQuestion + 1 === this.state.quiz.length          //check if  quiz is finished
        }

        retryHandler = () =>{
        this.setState({
            activeQuestion: 0,
            answerState: null,
            isFinished: false,
            results: {}
        })
        };

    render() {
        return(
            <div className={'Quiz'}>
                <div className={'QuizWrapper'}>
                    <h1>Quiz</h1>
                    {
                        this.state.isFinished
                        ? <FinishedQuiz
                            results={this.state.results}
                            quiz = {this.state.quiz}
                            onRetry = {this.retryHandler}
                            />
                            : <ActiveQuiz
                                answers={this.state.quiz[this.state.activeQuestion].answers}
                                question={this.state.quiz[this.state.activeQuestion].question}
                                onAnswerClick={this.onAnswerClickHandler}
                                quizLength={this.state.quiz.length}
                                answerNumber={this.state.activeQuestion + 1}
                                state={this.state.answerState}

                            />
                    }
                </div>
            </div>
        )
    }
}

export default Quiz