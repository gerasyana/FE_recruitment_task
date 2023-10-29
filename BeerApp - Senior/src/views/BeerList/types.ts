export interface FiltersList {
    type?: string | null;
    sort?: string | null;
    per_page?: number;
    page: number;
}

export interface FiltersProps {
    filters: FiltersList
}

