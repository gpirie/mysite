declare module 'types' {
    // Define specific types or use `any` for a temporary solution
    // e.g., export type MyType = { foo: string; bar: number };
    export type Menu = {
        id: number | null;
        name: string | null;
        menuItems: {
            nodes: MenuItem[];
        }
    }

    export type MenuItem = {
        id: string;
        label: string;
        cssClasses: string[];
        target: string;
        uri: string;
        connectedNode: any; // Adjust the type as needed
    };
}
