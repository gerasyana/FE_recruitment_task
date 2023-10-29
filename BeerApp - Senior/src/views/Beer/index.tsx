import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import { Beer as IBeer } from '../../types';
import { fetchData } from './utils';
import { useParams } from 'react-router-dom';
import { BeerAddress } from './components';
import styles from './Beer.module.css';

const Beer = () => {
  const { id } = useParams();
  const [beer, setBeer] = useState<IBeer>();

  // eslint-disable-next-line
  useEffect(fetchData.bind(this, setBeer, id), [id]);

  if (!beer) {
    return null;
  }

  return (
    <article>
      <section>
        <Typography variant="h6" gutterBottom> {beer.name} </Typography>
        <main className={styles.mainContainer}>
          <div className={styles.section}>
            {
              beer.website_url && <Typography variant="overline">
                <a href={beer.website_url} target='_blank' rel="noreferrer">Visit website</a>
              </Typography>
            }
            <Typography variant="overline">
              <b>Type: </b> {beer.brewery_type}
            </Typography>
          </div>

          <div className={styles.section}>
            <BeerAddress beer={beer} />
          </div>
        </main>
      </section>
    </article>
  );
};

export default Beer;
