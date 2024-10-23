import React, { useState } from 'react'
import downArrowIcon from '../../assets/down.svg'
import './Dropdown.css'
import OnOutsideClick from '../OnOutSideClick';

function Dropdown({ label, selected, options, onChange }) {
    const [showOptions, setShowOptions] = useState(false);

    const handleOptionClick = (option) => {
        setShowOptions(false);
        onChange(option);
    }

    return (
        <div className='dropdown'>
            <div className='dropdown-label'>
                { label }
            </div>
            <div onClick={ () => setShowOptions(!showOptions) } className='dropdown-item dropdown-icon'>
                { selected }
                <img src={ downArrowIcon } alt='down' />
                { showOptions && <OnOutsideClick onOutsideClick={ () => setShowOptions(false) }>
                    <div className='dropdown-options'>
                        { options.map((option) => (
                            <div className='dropdown-option' onClick={ () => handleOptionClick(option) }>
                                { option }
                            </div>
                        )) }
                    </div>
                </OnOutsideClick> }
            </div>
        </div>
    )
}

export default Dropdown
