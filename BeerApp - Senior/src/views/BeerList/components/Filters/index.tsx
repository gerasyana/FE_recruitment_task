import styles from './Filters.module.css';
import { TypeFilter, SortingFilter } from './components';
import { FiltersList } from '../../types';

interface FiltersProps {
    filters: FiltersList;
    onChange: (filterKey: string, value: unknown) => void
}

const Filters: React.FC<FiltersProps> = ({ filters, onChange }) => <div className={styles.filtersContainer}>
    <TypeFilter filterKey='by_type' value={filters.type} onChange={onChange} />
    <SortingFilter filterKey='sort' value={filters.sort} onChange={onChange} />
</div>

export default Filters