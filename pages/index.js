import { useState } from 'react';
import Link from 'next/link'
import Head from 'next/head'

const getAdvice = async () => {
  const response = await fetch('https://api.adviceslip.com/advice')
  const data = await response.json()
  return data.slip;
}

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [advice, setAdvice] = useState({ id: 117, advice: "It is easy to sit and take notice, what's difficult is getting up and taking action."});

  const clickHandler = async () => {
    setLoading(true);
    const data = await getAdvice();
    setAdvice(data);
    setLoading(false);
  }

  return (
    <>
      <Head>
        <title>Advice Generator App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="app">
        <div className="container">
          <header>ADVICE #{advice.id}</header>

          <main>
            <h1>"{advice.advice}"</h1>
            <div className="divider">
              <picture>
                <source srcSet="images/pattern-divider-desktop.svg"
                media="(min-width: 640px)" />
                <img src="images/pattern-divider-mobile.svg" />
              </picture>
            </div>
          </main>

          <button className={`dice ${(loading)? 'loading' : ''}`} onClick={clickHandler}>

            <img src="images/icon-dice.svg" alt="" />
          </button>
        </div>
      </div>
    </>
  )
}

export default Home