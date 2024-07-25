// Imports
import Link from "next/link";

// Types
import { Menu } from "types";

type Props = {
    menu: Menu[];
}

const NavigationMenu = ( { menu } : Props ) => {
    console.log(menu);
    return (
        <ol>
            {
                menu?.map((e, index) => {
                    return (
                        <Link
                            key={index}
                            href={e.uri}>
                            {e.label}
                        </Link>
                    )
                })
            }
        </ol>
    );
}

export default NavigationMenu;