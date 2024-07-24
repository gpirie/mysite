import {useEffect, useState} from 'react';

const BASE_URL = 'http:/localhost:8000/wp-json';

export const SiteDataFetch = () => {

    const [siteData, setSiteData] = useState([])

    useEffect(() => {

        fetch( BASE_URL )
            .then((response) => response.json())
            .then((data) => setSiteData(data));
    }, []);

    return siteData;
}

export const SiteData = () => {
    return SiteDataFetch().map(
        ( site, index ) => (
            {
                id               : index,
                title            : site.name,
            }
        )
    )
}
