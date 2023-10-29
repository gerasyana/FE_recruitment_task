import DropdownFilterType from "../../../../../components/DropdownFilterType";
import { BEER_TYPES_FILTERS } from "../../../../../constants/filters";
import { FilterProps } from "./types";

const TypeFilter: React.FC<FilterProps> = ({ filterKey, value, onChange }) => <DropdownFilterType
    options={BEER_TYPES_FILTERS}
    uniqueId={filterKey}
    label="Type"
    value={value}
    onSelect={(value: unknown) => onChange(filterKey, value)} />

export default TypeFilter;