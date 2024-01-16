export default function getPriorityColor(priority) {
    return {
        high: '#f44336', // Or any other color you prefer for high priority
        medium: '#f59e0b',
        low: '#4caf50',
    }[priority] || '#b8b8b8'; // Default color if priority is not found
}
