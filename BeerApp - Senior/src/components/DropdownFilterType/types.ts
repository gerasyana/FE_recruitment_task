export interface DropdownFilterTypeOption {
    value: unknown;
    label: string;
}

export interface DropdownFilterTypeProps {
    uniqueId: string;
    label: string;
    value: unknown;
    options: DropdownFilterTypeOption[]
    onSelect: (value: unknown) => void
}