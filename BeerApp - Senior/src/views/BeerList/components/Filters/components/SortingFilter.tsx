import DropdownFilterType from "../../../../../components/DropdownFilterType";
import { SOTRING_FILTERS } from "../../../../../constants/filters";
import { FilterProps } from "./types";

const SortingFilter: React.FC<FilterProps> = ({ filterKey, value, onChange }) => <DropdownFilterType
    options={SOTRING_FILTERS}
    uniqueId={filterKey}
    label="Order"
    value={value}
    onSelect={(value: unknown) => onChange(filterKey, value)}
/>

export default SortingFilter;