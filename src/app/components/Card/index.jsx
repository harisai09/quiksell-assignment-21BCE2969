import React, { useMemo } from 'react'
import './Card.css'
import { getIcons, getInitials } from '../../utils/getIcons'
import { generateColor } from '../../utils/getColor'

function Card({ ticket }) {

    // Memoize the color to avoid recalculation on re-renders
    const userColor = useMemo(() => generateColor(ticket.userName), [ticket.userName]);

    return (
        <div className='card'>
            <div className='card-header'>
                <div className='card-header-title'>
                    { ticket.id }
                </div>
                <div className='user-icon' style={ { backgroundColor: userColor } }>
                    { getInitials(ticket.userName) }
                </div>
            </div>
            <div className='card-body'>
                <img src={ getIcons(ticket.status) } alt='status' />
                { ticket.title }
            </div>
            <div className='card-footer'>
                <div className='card-footer-item-icon'>
                    <img src={ getIcons(ticket.priority) } alt='priority' />
                </div>
                <div className='card-footer-item-tags'>
                    {
                        ticket.tag.map((tag, index) => (
                            <div className='card-footer-item-tag' key={ index }>
                                <div className='card-footer-tag-dot'></div>
                                <div className='card-footer-tag-text'>{ tag }</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Card
