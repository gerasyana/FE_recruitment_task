import { useCallback, useEffect, useState } from 'react';
import { ApiParams, Beer } from '../../types';
import { fetchData } from './utils';
import { FiltersList } from './types';
import { useNavigate } from 'react-router-dom';

const defaultFilters = {
    type: null,
    'per_page': 10,
    sort: 'asc',
    page: 1,
}

export const useBeers = () => {
    const navigate = useNavigate();
    const [beerList, setBeerList] = useState<Array<Beer>>([]);
    const [filters, setFilters] = useState<FiltersList>(defaultFilters);

    const onBeerClick = useCallback((id: string) => navigate(`/beer/${id}`), [navigate])

    const onFiltersChange = useCallback((key: string, value: unknown) => {
        let newFilters = { ...filters, [key]: value };

        if (newFilters.sort) {
            newFilters.sort = newFilters.type ? `type,name:${value}` : `name:${value}`;
        }

        if (key === 'by_type') {
            newFilters.page = 1;
        }

        setFilters(newFilters)
    }, [filters])

    const onRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setFilters({ ...filters, page: 1, 'per_page': parseInt(event.target.value, 10) })
    };

    const onPageChange = useCallback((event: React.MouseEvent<HTMLButtonElement> | null, page: number) => {
        setFilters({ ...filters, page: page + 1 })
    }, [filters])

    // eslint-disable-next-line
    useEffect(() => {
        fetchData.call(this, setBeerList, filters as ApiParams)
    }, [filters]);

    return {
        beerList,
        filters,
        onBeerClick,
        onFiltersChange,
        onPageChange,
        onRowsPerPage,
    }
}