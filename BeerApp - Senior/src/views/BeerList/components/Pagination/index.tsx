import {  TablePagination  } from '@mui/material';
import styles from './Pagination.module.css';

const Pagination: React.FC<React.ComponentProps<typeof TablePagination>> = (props) => <div className={styles.paginationContainer}>
    <TablePagination {...props} />
</div>

export default Pagination;