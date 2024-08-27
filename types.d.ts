declare module 'types' {

    export type Menu = {
        id: string | null;
        name: string;
        menuItems: {
            nodes: MenuItem[];
        }
    }

    export type MenuItem = {
        id: string;
        label: string;
        cssClasses: string[];
        target: string | null;
        uri: string;
        title: string | null;
    };
}
