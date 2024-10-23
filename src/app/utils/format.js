export const getGroupedData = (data, groupBy) => {
    if (!data || !data.tickets || !data.users) return {};

    return data.tickets.reduce((acc, ticket) => {
        let key;
        switch (groupBy) {
            case 'status':
                key = ticket.status;
                break;
            case 'user':
                key = ticket.userId;
                break;
            case 'priority':
                key = ticket.priority;
                break;
            default:
                key = 'Ungrouped';
        }

        if (!acc[key]) {
            acc[key] = [];
        }
        // Add user name to the ticket object
        const user = data.users.find(u => u.id === ticket.userId);
        acc[key].push({
            ...ticket,
            userName: user ? user.name : 'Unknown User'
        });
        return acc;
    }, {});
};

export const getPriorityLabel = (priority) => {
    const labels = ['No priority', 'Low', 'Medium', 'High', 'Urgent'];
    return labels[priority] || 'Unknown';
};

export const getUserName = (users, userId) => {
    const user = users.find(u => u.id === userId);
    return user ? user.name : 'Unknown User';
};
