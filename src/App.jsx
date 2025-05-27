import { useState } from 'react'
import data from './data'



function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState([])

  const handleSubmit = (e) => {
   e.preventDefault()
    let amount = parseInt(count)
    if(count<= 0){
      amount= 1
    }
    if(count >= 8){
      amount= 8
    }


    setText(data.slice(0, amount))
  }
  return (
   <section className='section-center py-5 px-0 align-center'>
    <h3 className='text-3xl text-center pt-[100px] mb-2'>Tired of boring lorem ipsum?</h3>
    <form className='lorem-form' onSubmit={handleSubmit}>
      <label htmlFor="amount " className='text-xl'>Paragraphs:</label>
      <input type="number" id='amount' value={count}  onChange ={(e)=> setCount(e.target.value)} />
      <button className='btn'>Generate</button>
    </form>
    <article className='lorem-text'>
      {text.map((item, index) => {
        return <p key={index}>{item}</p>
      })}
    </article>
   </section>
  )
}

export default App
