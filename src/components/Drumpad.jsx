import React, { useEffect, useState } from 'react'

const spaceReplacer = (str) => {
    return str.replace(' ', '-')
}
const Drumpad = (props) => {
    return (<div className='drum-pad' onClick={() => props.playSound(props.item, props.previewLabel)}
        id={spaceReplacer(props.previewLabel)}>
        {props.item}
        <audio className='clip' src={props.src} id={props.item} />
    </div>)
}


export default Drumpad