import { useCallback, useState } from 'react';
import { Beer as IBeer } from '../../../../types';
import styles from './BeerAddresss.module.css';
import { Typography } from '@mui/material';

const BeerAddress: React.FC<{ beer: IBeer }> = ({ beer }) => {
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = useCallback(() => setShowMore(!showMore), [showMore]);

    return <div className={styles.listContainer}>
        <Typography variant="overline">
            <b>Location: </b> {beer.country}, {beer.city}, {beer.address_1}
        </Typography>
        <Typography variant="overline">
            <b>Contact phone: </b> +{beer.phone}
        </Typography>
        {
            !showMore && <Typography variant="overline">
                <a href='#' onClick={toggleShowMore}>Show more</a>
            </Typography>
        }

        {
            showMore && <>
                <Typography variant="overline">
                    <b>State: </b> {beer.state}
                </Typography>
                <Typography variant="overline">
                    <b>Province: </b> {beer.state_province}
                </Typography>
                <Typography variant="overline">
                    <b>Postal code: </b> {beer.postal_code}
                </Typography>
                <Typography variant="overline">
                    <a href='#' onClick={toggleShowMore}>Hide</a>
                </Typography>
            </>
        }
    </div>
}
export default BeerAddress;