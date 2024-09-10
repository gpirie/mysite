// Imports
import Image from 'next/image'
import {FeaturedImage} from "../../types";
import {parseHTML} from "@/utils/utils";

// Props
type Props = {
    image: FeaturedImage;
};

const featuredImage =  ({ image }: Props) => {

    return (
        <figure>
            <Image
                src={image.sourceUrl} // Access sourceUrl from the image prop
                alt={image.altText || image.title} // Use altText or fallback to title
                width={image.mediaDetails.width}
                height={image.mediaDetails.height}
            />
            {
                image.caption ?
                    <figcaption>
                        { parseHTML( image.caption ) }
                    </figcaption>
                    : ''
            }
        </figure>
    )

}

export default featuredImage;