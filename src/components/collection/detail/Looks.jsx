import React, { useEffect } from 'react'
import { dresses } from '../db'
import { Link } from 'react-router-dom'

export const Looks = (props) => {

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <div className='collection-grid-container'>
            <div className='breadcrum'>
                <p>
                    <Link to='/collection'>COLLECTION</Link> / 
                    <Link to={`/collection/${props.match.params.collection}`}>
                        {props.match.params.collection === 'fall' ? 
                            ' FALL'
                            : props.match.params.collection === 'preFall' ? 
                            ' PRE FALL 2019'
                            : props.match.params.collection === 'all' ? 
                            ' ALL'
                            : null
                        }
                    </Link> / 
                    <span> {props.match.params.look.toUpperCase()}</span>
                </p>
            </div>
            <div className='look-detail'>
                <div className='look-description'>
                    <h2>{props.match.params.look.toUpperCase()}</h2>
                </div>
                <div className='look-photos'>
                    {dresses.filter(dress => dress.indexOf(props.match.params.collection) !== -1 && dress.indexOf(`${props.match.params.look}/`) !== -1).map(dress => 
                        <img key={dress} src={`${dress}`} alt="dress"/>
                    )}
                </div>
            </div>
        </div>
    )
}
