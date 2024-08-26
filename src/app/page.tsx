// Imports
import {fetchSinglePage} from "@/data/Data";
import {parseHTML} from "@/utils/utils";

const HomePage = async () => {

    // Get Page data
    const pageData = await fetchSinglePage('home');

    return (
        <>
            {
                parseHTML(pageData.content)
            }
        </>
    )
}

export default HomePage;