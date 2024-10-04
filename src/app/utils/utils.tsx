import parse from 'html-react-parser';

export function getDate(date: string | number | Date){
    return new Date(date).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    });
}

export function parseHTML(html: string) {
    return parse( html );
}

// Helper function to determine ordinal suffix
const getOrdinal = (day: number) => {
    if (day > 3 && day < 21) return 'th'; // Special case for 11th to 19th
    switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
    }
}

export const formatDateTime = (str: string, textMonth: boolean) => {
    let date = new Date(str);

    let year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
    let dayNumeric = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
    let day = parseInt(dayNumeric); // Convert to a number to determine the ordinal suffix
    let ordinal = getOrdinal(day); // Get the correct ordinal suffix
    let month;
    let formattedDate;

    // Check if month is set to render as text or numerals and assign accordingly
    if (textMonth) {
        month = new Intl.DateTimeFormat('en', { month: 'short' }).format(date);
        formattedDate = `${day}<sup>${ordinal}</sup> ${month} ${year}`;
    } else {
        month = new Intl.DateTimeFormat('en', { month: 'numeric' }).format(date);
        formattedDate = `${year}-${month}-${day}${ordinal}`;
    }

    return parseHTML(formattedDate);
}
