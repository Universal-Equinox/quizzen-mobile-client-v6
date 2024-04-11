export default (dateString: string) => {
    const date = new Date(dateString);
    const timeString = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    return timeString;
}