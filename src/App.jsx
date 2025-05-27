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
   <section className='section-center py-5 px-0 items-center'>
    <h3 className='text-3xl text-center pt-[100px] mb-2'>Tired of boring lorem ipsum?</h3>
    <form className='lorem-form text-center' onSubmit={handleSubmit}>
      <label htmlFor="amount " className='text-xl'>Paragraphs:</label>
      <input type="number" id='amount' value={count} className='py-0.25 px-0.5 w-10 bg-gray-300 rounded-md border-0 outline-none' onChange ={(e)=> setCount(e.target.value)} />
      <button className='btn bg-green-500  transition-300 cursor-pointer rounded-md p-1 text-center items-center  m-5 hover:bg-green-700 shadow-md text-white'>Generate</button>
    </form>
    <article className='lorem-text text-center px-5 py-2 mt-4 mb-5  '>
      {text.map((item, index) => {
        return <p className='mb-3' key={index}>{item}</p>
      })}
    </article>
   </section>
  )
}

export default App
