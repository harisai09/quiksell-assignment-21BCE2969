import React, { useState } from 'react'
import './Select.css'
import filterIcon from '../../assets/filter.svg'
import downArrowIcon from '../../assets/down.svg'
import Dropdown from '../DropDown'
import OnOutsideClick from '../OnOutSideClick'

function Select({ selectedGroupBy, selectedOrderBy, onChange }) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='select'>
            <div onClick={ () => setIsOpen(!isOpen) } className='select-header'>
                <img src={ filterIcon } alt='filter' />
                <span>Display</span>
                <img src={ downArrowIcon } alt='down-arrow' />
            </div>
            { isOpen && <OnOutsideClick onOutsideClick={ () => setIsOpen(false) }>
                <div className='select-container'>
                    <Dropdown label={ 'Grouping' } selected={ selectedGroupBy } options={ ['status', 'user', 'priority'] } onChange={ (value) => onChange('groupBy', value) } />
                    <Dropdown label={ 'Ordering' } selected={ selectedOrderBy } options={ ['Priority', 'Title'] } onChange={ (value) => onChange('orderBy', value) } />
                </div>
            </OnOutsideClick> }
        </div>
    )
}

export default Select
