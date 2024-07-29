import parse from 'html-react-parser';

export function getDate(date: string | number | Date){
    return new Date(date).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    });
}

export function parseHTML( html: string ) {
    return parse( html );
}