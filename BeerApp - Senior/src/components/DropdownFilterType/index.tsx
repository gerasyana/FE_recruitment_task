import { useCallback } from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { DropdownFilterTypeProps } from './types';
import { Box, FormControl, InputLabel } from '@mui/material';

const DropdownFilterType: React.FC<DropdownFilterTypeProps> = ({ uniqueId, label, value, options, onSelect }) => {
  const handleChange = useCallback((event: SelectChangeEvent) => onSelect((event.target as HTMLInputElement).value), [onSelect]);

  if (!options) {
    return null;
  }

  return <div>
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
      <InputLabel>{label}</InputLabel>
      <Select defaultValue={value as string} onChange={handleChange} id={uniqueId}>
        {
          options.map((o, i) => <MenuItem value={o.value as string} key={`${o.label}_${i}_${o.value}`}>{o.label}</MenuItem>)
        }
      </Select>
    </FormControl>
  </div>
}

export default DropdownFilterType;