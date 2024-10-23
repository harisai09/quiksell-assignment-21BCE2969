import urgentPriorityColorImage from '../assets/urgent-priority-color.svg'
import highPriorityColorImage from '../assets/high-priority.svg'
import mediumPriorityColorImage from '../assets/medium-priority.svg'
import lowPriorityColorImage from '../assets/low-priority.svg'
import noPriorityColorImage from '../assets/no-priority.svg'

import todoIcon from '../assets/todo.svg'
import inProgressIcon from '../assets/in-progress.svg'
import backLogIcon from '../assets/backlog.svg'
import doneIcon from '../assets/done.svg'
import closeIcon from '../assets/close.svg'

export const getIcons = (key) => {
    const images = {
        0: noPriorityColorImage,
        1: lowPriorityColorImage,
        2: mediumPriorityColorImage,
        3: highPriorityColorImage,
        4: urgentPriorityColorImage,
        'No priority': noPriorityColorImage,
        'Low': lowPriorityColorImage,
        'Medium': mediumPriorityColorImage,
        'High': highPriorityColorImage,
        'Urgent': urgentPriorityColorImage,
        'Todo': todoIcon,
        'In progress': inProgressIcon,
        'Backlog': backLogIcon,
        'Done': doneIcon,
        'Cancelled': closeIcon,
    }
    return images[key] || getInitials(key)
}

// Function to get initials from the user's name
export const getInitials = (name) => {
    return name
        .split(' ')
        .map(word => word[0].toUpperCase())
        .join('')
        .slice(0, 2);
}