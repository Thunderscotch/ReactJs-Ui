import React from 'react'
import { Button } from '../components/Button/Button'
import './creator.css'

export const Creator = ({ isDark }) => {
    return (
        <div>
            <br /><br /><br /><br /><br />
            <h1 className='creator_title'>Creator Story</h1>
            <div className='creator'>
                <div className={`creator_author ${isDark ? "creator_author-dark" : "creator_author-light"}`}>
                    <img src="https://upload.wikimedia.org/wikipedia/en/4/42/Richard_Feynman_Nobel.jpg" alt="Richard Phillips Feynman" />
                    <h2>Richard Phillips Feynman</h2>
                    <p>To Richard Feynman — you taught us that genius isn’t only in equations and <br />
                        experiments, but in the courage to love so deeply that loss could not silence it. <br />
                        Your letter to Arline is more than words on paper; it is proof that love outlives <br />
                        death, and that even in the quiet ache of grief, beauty can still be written.</p>
                </div>
                <div className={`creator_poem ${isDark ? "creator_poem-dark" : "creator_poem-light"}`}>
                    <h2>Where Silence Still Remembers</h2>
                    <p>I write to you, beloved, though the air holds no reply,<br />
                        for grief has made a home in me, yet love refuses to die. <br />
                        Your laughter still lingers in corners of thought,<br />
                        a melody unfinished, a presence time forgot.<br />
                        <br />
                        What is love when absence grows deep as the sea?<br />
                        It is tending the garden though none comes to see.<br />
                        It is speaking your name where no echo remains,<br />
                        it is living half-whole, yet carrying the chains.<br />
                        <br />
                        I build little worlds where your hand once would guide,<br />
                        projects of the heart where our dreams still reside.<br />
                        The books we would open, the plans we once made,<br />
                        now whisper like ghosts in the life we displayed.<br />
                        <br />
                        They say I must heal, that the heart will grow new,<br />
                        but each face I encounter dissolves into you.<br />
                        For none can be real when the truest is gone,<br />
                        and I walk with your shadow, still urging me on.<br />
                        <br />
                        So let the world mock me, call sorrow a crime,<br />
                        I will love you beyond the last silence of time.<br />
                        For my darling, my dearest, though death holds you apart,<br />
                        you live on unbroken, carved deep in my heart.<br />
                        <br />-Richard Phillips Feynman
                    </p>
                </div>
            </div>
            <Button isDark={isDark} className='creator_button'>
                <a href="https://en.wikipedia.org/wiki/Richard_Feynman" className='creator_button-link'>
                    Read More
                </a>
            </Button>
        </div>
    )
}