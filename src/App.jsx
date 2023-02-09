import React, { useState, useEffect } from 'react'
import darktheme from "./assets/darktheme.jpg"
import confused from "./assets/confused.png"
import timothy from "./assets/timothy.png"
import './App.css'

// function getActiveClassName(activeArticle, currentArticle) {
//   if (activeArticle === currentArticle) {
//     return 'show-article'
//   } else {
//     return 'hide'
//   }
// }

//className={`${getActiveClassName(props.activeArticle, 'article one')}`}

const Article1 = (props) => {
  return (
    <article className={`${props.activeArticle} 'article'`}>
      <h2>My experience!</h2>
      <section className='content-table'>
        <p>I touched my first code in high school, as we studied both web design and programming.
          The web design was basic html and Adobe Dreamweaver.
          I had the (not so much) pleasure of working in Wordpress for a short course in digital design.
          So far during the Frontend-education I've learnet HTML, CSS, JS Vanilla and jQuery. I'd like to dive into Javascript some more,
          it was fun and there's a lot of cool stuff you can do with it and ability to build beautiful webpages.
        </p>
        <img className="picture" src={timothy} alt=''></img>
      </section>
    </article>
  )
}

const Article2 = (props) => {
  return (
    <article className={`${props.activeArticle} 'article'`}>
      <h2>Date countdown.</h2>
      <section className='content-table'>
        <p>I always have a hard time remebering important dates and planning/budgeting for them, mostly because I always think "eeh, it's far away, I have time".
          So for my first project I'm going to make a countdown for important dates and happenings so I have a concrete number of days left and not just some half assed estimate.
          The idea is to make myself able to add more dates, but I'll start with one i keep forgetting, my name's day.
        </p>
        <img className="picture" src={confused} alt='' />
      </section>
    </article>
  )
}

const Article3 = (props) => {
  return (
    <article className={`${props.activeArticle} 'article'`}>
      <h2>My style.</h2>
      <section className='content-table'>
        <p>I have been a sucker for "dark theme" ever since it was first applied to 9gag.
          Not only is it really nice for the eyes any time of the day, it's clean, minimalistic but
          has more personality than just a white background. It's hard to go wrong with it.
          This time i chose a dark theme with dark cozy colors to improve my repertoire.
        </p>
        <a href='https://dribbble.com/shots/18577865-Ads-Dashboard?utm_source=Clipboard_Shot&utm_campaign=uixninja&utm_content=Ads%20Dashboard&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=uixninja&utm_content=Ads%20Dashboard&utm_medium=Social_Share' target={'_blank'}>
          <img className="picture" src={darktheme} alt='darktheme' /></a>
      </section>
    </article>
  )
}

function App() {
  const [activeArticle, setActiveArticle] = useState("first")

  const [current, setCurrent] = useState(0)

  const articlesArr = [0, 1, 2]

  useEffect(() => {
    if (current === 0) {
      setActiveArticle("first")
    }

    else if (current === 1) {
      setActiveArticle("second")
    }

    else {
      setActiveArticle("third")
    }
  }, [current])

  const [hide, setHide] = useState(false);

  const toggleClass = () => {
    setHide(!hide);
  };

  return (
    <>
      <header>
        <h1>Assignment 1</h1>
      </header>

      <main>

        <div className={hide ? "hide" : ""}>
          {
            activeArticle === "first" ? (<Article1 props={activeArticle}></Article1>) :
              activeArticle === "second" ? (<Article2 props={activeArticle}></Article2>) :
                activeArticle === "third" ? (<Article3 props={activeArticle}></Article3>) : null
          }
        </div>

        <div className={hide ? "" : "hide"}>
          <Article1 />
          <Article2 />
          <Article3 />
        </div>

        {/* <article className={`active ${getActiveClassName(activeArticle, 'article one')}`}>
          <h2>My experience!</h2>
          <section className='content-table'>
            <p>I touched my first code in high school, as we studied both web design and programming.
              The web design was basic html and Adobe Dreamweaver.
              I had the (not so much) pleasure of working in Wordpress for a short course in digital design.
              So far during the Frontend-education I've learnet HTML, CSS, JS Vanilla and jQuery. I'd like to dive into Javascript some more,
              it was fun and there's a lot of cool stuff you can do with it and ability to build beautiful webpages.
            </p>
            <img className="picture" src={timothy} alt=''></img>
          </section>
        </article> */}

        {/* <article className={`active ${getActiveClassName(activeArticle, 'article two')}`}>
          <h2>Date countdown.</h2>
          <section className='content-table'>
            <p>I always have a hard time remebering important dates and planning/budgeting for them, mostly because I always think "eeh, it's far away, I have time".
              So for my first project I'm going to make a countdown for important dates and happenings so I have a concrete number of days left and not just some half assed estimate.
              The idea is to make myself able to add more dates, but I'll start with one i keep forgetting, my name's day.
            </p>
            <img className="picture" src={confused} alt='' />
          </section>
        </article> */}

        {/* <article className={`active ${getActiveClassName(activeArticle, 'article three')}`}>
          <h2>My style.</h2>
          <section className='content-table'>
            <p>I have been a sucker for "dark theme" ever since it was first applied to 9gag.
              Not only is it really nice for the eyes any time of the day, it's clean, minimalistic but
              has more personality than just a white background. It's hard to go wrong with it.
              This time i chose a dark theme with dark cozy colors to improve my repertoire.
            </p>
            <a href='https://dribbble.com/shots/18577865-Ads-Dashboard?utm_source=Clipboard_Shot&utm_campaign=uixninja&utm_content=Ads%20Dashboard&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=uixninja&utm_content=Ads%20Dashboard&utm_medium=Social_Share' target={'_blank'}>
              <img className="picture" src={darktheme} alt='darktheme' /></a>
          </section>
        </article> */}

        <div className='switchArticle'>

          <button onClick={() => {

            if (current > 0) {
              setCurrent(prev => prev - 1)
              console.log(current)
            } else {
              //setCurrent(articlesArr.length - 1)
              console.log(current)
            }

          }}>Previous Article</button>

          <button onClick={() => {

            if (current < articlesArr.length - 1) {
              setCurrent(current + 1)
              console.log(current)

            } else {
              setCurrent(0)
              console.log(current)
            }

          }}>Next Article</button>

          <button
           className={hide ? "" : ""}
           onClick={toggleClass}>
            Show all</button>

        </div>
      </main>

      <footer>
        <h2>Timothy Karlsson</h2>
      </footer>
    </>
  )
}

export default App