import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [isNumber,setIsNumber]=useState<number>(0)
  const [isCorrect,setIsCorrect]=useState<number>(0)
  const [quizs,setQuizs]=useState
  ([
    {
      question:"今日は何を食べた？",
      answers:["とまと","りんご","ケーキ","バナナ"],
      correct:"とまと"
    },
    {
      question:"昨日は何を食べた？",
      answers:["かぼちゃ","ケーキ","りんご","バナナ"],
      correct:"ケーキ"
    },
    {
      question:"明日は何を食べる？",
      answers:["ぶどう","メロン","にんじん","バナナ"],
      correct:"バナナ"
    },
  ])
  const handleClick=(e:any)=>{
    if(e.target.textContent===quizs[isNumber].correct){
      // alert('正解')
      setIsCorrect((isCorrect)=>isCorrect+1)
    }else{
      // alert('不正解')
    }
    const nextIsNumber=isNumber+1
    if(nextIsNumber<quizs.length){
      setIsNumber((isNumber)=>isNumber+1)
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.question}>
        <p>{quizs[isNumber].question}</p>
      </div>
      <div className={styles.answers}>
        {quizs[isNumber].answers.map((answer)=>
          (
            <button onClick={handleClick} key={answer} className={styles.answer}>{answer}</button>
          )
        )}
      </div>
    </div>
  )
}
