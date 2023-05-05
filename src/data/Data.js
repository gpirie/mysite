import {useEffect, useState} from 'react';

const BASE_URL = 'https://graemepirie.com/wp-json';

export const SiteDataFetch = (props) => {

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
