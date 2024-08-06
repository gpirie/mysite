declare module 'types' {
    // Define specific types or use `any` for a temporary solution
    // e.g., export type MyType = { foo: string; bar: number };
    export type Menu = {
        id: number | null;
        label: string | null;
        uri: string | null;
        cssClasses?: [] | null;
        target?: string | null;
    }
}
