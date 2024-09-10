// Imports
import {fetchFeaturedImage, fetchSinglePage} from "@/data/Data";
import {parseHTML} from "@/utils/utils";
import FeaturedImage from "@/components/featuredImage/featuredImage";

// Styles
import styles from "@/styles/home.module.scss";

const HomePage = async () => {

    // Get Page data
    const pageData = await fetchSinglePage('/');
    const featuredImage = await fetchFeaturedImage('/');

    return (

        <div className={styles['container']}>

            <FeaturedImage image={featuredImage} />

            <div className={styles['intro']}>
                { parseHTML(pageData.content) }
            </div>

        </div>

    )
}

export default HomePage;