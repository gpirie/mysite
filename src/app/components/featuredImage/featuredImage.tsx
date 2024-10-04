// Imports
import Image from 'next/image'
import {objectFeaturedImage} from "../../types";
import {parseHTML} from "@/utils/utils";

// Props
type Props = {
    image: objectFeaturedImage;
    showCaption: boolean;
};

const isValidImage = (image: objectFeaturedImage) => {
    return image && true &&
        typeof image.mediaDetails?.width === 'number' &&
        typeof image.mediaDetails?.height === 'number';
};

const defaultImage = {
    sourceUrl: '/path/to/fallback.jpg',
    altText: 'Default Image',
    title: 'Fallback Title',
    mediaDetails: { width: 300, height: 300 },
};

const featuredImage =  ({ image, showCaption }: Props) => {

    const safeImage = isValidImage(image) ? image : defaultImage;

    // Return null if the image is invalid and no default image is needed
    if ( ! isValidImage( image ) ) {
        return null;
    }

    const width = safeImage.mediaDetails.width || 300;
    const height = safeImage.mediaDetails.height || 300;

    return (

        <figure>
            <Image
                src={safeImage.sourceUrl} // Access sourceUrl from the image prop
                alt={safeImage.altText || safeImage.title} // Use altText or fallback to title
                width={width}
                height={height}
            />

            {
                showCaption && image?.caption ?
                    <figcaption>
                        { parseHTML(image.caption)}
                    </figcaption>
                    : ''
            }
        </figure>
    )

}

export default featuredImage;