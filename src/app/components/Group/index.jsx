import React, { useMemo } from 'react'
import './Group.css'
import Card from '../Card'
import addIcon from '../../assets/add.svg'
import moreIcon from '../../assets/more.svg'
import { getIcons, getInitials } from '../../utils/getIcons'
import { generateColor } from '../../utils/getColor'
function Group({ title, tickets, orderBy, groupBy }) {
    const userColor = useMemo(() => generateColor(title), [title]);
    const sortedTickets = orderBy === 'Priority' ? tickets.sort((a, b) => b.priority - a.priority) : tickets.sort((a, b) => a.title.localeCompare(b.title));
    return (
        <div className='group'>
            <div className='group-header'>
                <div className='group-header-left'>
                    { groupBy === 'user' ? <div className='user-header-icon' style={ { backgroundColor: userColor } }>{ getInitials(title) }</div> :
                        <img src={ getIcons(title) } alt={ title } /> }
                    <div className='group-header-title'>
                        { title }
                    </div>
                </div>
                <div className='group-header-right'>
                    <img src={ addIcon } alt='add' />
                    <img src={ moreIcon } alt='more' />
                </div>
            </div>
            <div className='group-body'>
                { sortedTickets.map((ticket) => (
                    <Card key={ ticket.id } ticket={ ticket } />
                )) }
            </div>
        </div>
    )
}

export default Group
