import React, { useEffect, useState } from 'react'
import Drumpad from './Drumpad'

const drumpads = [
    { item: 'Q', src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3', previewLabel: 'Chord 1' },
    { item: 'W', src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3', previewLabel: 'Chord 2' },
    { item: 'E', src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3', previewLabel: 'Chord 3' },
    { item: 'A', src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3', previewLabel: 'Kick n Hat' },
    { item: 'S', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3', previewLabel: 'Heater 1' },
    { item: 'D', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3', previewLabel: 'Heater 2' },
    { item: 'Z', src: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3', previewLabel: 'Break Snare' },
    { item: 'X', src: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3', previewLabel: 'Punchy Kick' },
    { item: 'C', src: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3', previewLabel: 'Side Stick' },
]

const DrumMachine = () => {

    const [display, setDisplay] = useState('')

    useEffect(() => {
        document.addEventListener('keydown', playAudio);
    }, [])

    const playAudio = (e) => {
        let keyPressed = String.fromCharCode(e.keyCode)
        const el = drumpads.find(element => element.item === keyPressed)

        if (el) {
            playSound(el.item, el.previewLabel)
        }
    }

    const playSound = (keyPressed, displayValue) => {
        let sound = document.getElementById(keyPressed)
        setDisplay(displayValue)
        sound.play();
    }

    return (<div id='drum-machine'>
        <div id='display'>{display}</div>
        <div className='drumpad-wrapper'>
            {drumpads.map((pad) => <Drumpad key={pad.item} {...pad} playSound={playSound} />)}
        </div>


    </div>

    )
}

export default DrumMachine