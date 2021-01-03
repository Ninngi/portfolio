import React from 'react'
import styled from 'styled-components'
import { About } from '../styles.js'

const FaqSection = () => {
  return (
    <Faq className='faq'>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <div className='question'>
        <h4>How Do I Start? </h4>
        <div className='answer'>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Sint deserunt minim culpa Lorem commodo non sit ipsum adipisicing
            adipisicing incididunt. Reprehenderit ad nostrud exercitation dolor
            consequat deserunt. Aute minim laborum amet ea duis laborum
            incididunt nisi cillum excepteur sint nostrud voluptate.
          </p>
        </div>
        <div className='faq-line'></div>
      </div>
      <div className='question'>
        <h4>Payment methods</h4>
        <div className='answer'>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Sint deserunt minim culpa Lorem commodo non sit ipsum adipisicing
            adipisicing incididunt. Reprehenderit ad nostrud exercitation dolor
            consequat deserunt. Aute minim laborum amet ea duis laborum
            incididunt nisi cillum excepteur sint nostrud voluptate.
          </p>
        </div>
        <div className='faq-line'></div>
      </div>
      <div className='question'>
        <h4>How Deep? </h4>
        <div className='answer'>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Sint deserunt minim culpa Lorem commodo non sit ipsum adipisicing
            adipisicing incididunt. Reprehenderit ad nostrud exercitation dolor
            consequat deserunt. Aute minim laborum amet ea duis laborum
            incididunt nisi cillum excepteur sint nostrud voluptate.
          </p>
        </div>
        <div className='faq-line'></div>
      </div>
      <div className='question'>
        <h4>How Do I Start?XXX </h4>
        <div className='answer'>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Sint deserunt minim culpa Lorem commodo non sit ipsum adipisicing
            adipisicing incididunt. Reprehenderit ad nostrud exercitation dolor
            consequat deserunt. Aute minim laborum amet ea duis laborum
            incididunt nisi cillum excepteur sint nostrud voluptate.
          </p>
        </div>
        <div className='faq-line'></div>
      </div>
    </Faq>
  )
}

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`

export default FaqSection
