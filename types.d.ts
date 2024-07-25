declare module 'types' {
    // Define specific types or use `any` for a temporary solution
    // e.g., export type MyType = { foo: string; bar: number };
    export type Menu = {
        id: string | null;
        label: string | null;
        uri: string | null;
    }
}
