export interface FilterProps {
    filterKey: string;
    value: unknown;
    onChange: (key: string, value: unknown) => void
}