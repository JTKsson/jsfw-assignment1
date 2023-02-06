import { useState } from 'react'
import france from "./assets/france.jpg"
import './App.css'

function App() {
  const [activeArticle, setActiveArticle] = useState("first article")
  

  return (
    <>
      <article className={activeArticle === "first article" ? ".show-article" : ".hide-article"}>
        <h1>About me</h1>
        <p>I like disc golf, a bit too much</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. </p>
        <img className="france" src={france} alt=''></img>
      </article>

      <article className='article'>
        <h1>My ideas</h1>
        <p>I like disc golf, a bit too much</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. </p>
        <img className="france" src={france} alt='' />
      </article>
      <div>
        <button onClick={() => { 
          setActiveArticle("second-article")
        }}>Switch article</button>
      </div>
    </>
  )
}

export default App
