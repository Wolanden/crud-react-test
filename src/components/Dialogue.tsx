import React from 'react'
import './Dialogue.css'

interface Props {
    open: boolean
}

const Dialogue: React.FC<Props> = (props) =>{
    return(
        <>
            {props.open ? (
                <div className="dialogue">
                    {props.children}
                </div>
            ) : null}        
        </>
    )
}

export default Dialogue