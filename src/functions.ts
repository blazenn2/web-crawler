export function formatAMPM(date: Date) {
    let hours: number = date.getHours();
    let minutes: number | string = date.getMinutes();
    let ampm: string = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    const strTime: string = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}