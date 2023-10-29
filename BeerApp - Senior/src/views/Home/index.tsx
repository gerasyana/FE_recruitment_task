import { useCallback, useEffect, useState } from 'react';
import { fetchData } from './utils';
import { Beer } from '../../types';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Checkbox, Paper, TextField, Link } from '@mui/material';
import styles from './Home.module.css';

const LOCAL_CACHE_KEY = 'saved_items_cache';

const Home = () => {
  const [beerList, setBeerList] = useState<Array<Beer>>([]);
  const [savedList, setSavedList] = useState<Array<Beer>>([]);

  const onBeerChecked = useCallback((index: number) => {
    const beer = beerList[index];

    if (!beer || savedList.some(({ id }) => beer.id === id)) {
      return
    }

    let newBeerList = [...savedList, beer];
    setSavedList(newBeerList);
    localStorage.setItem(LOCAL_CACHE_KEY, JSON.stringify(newBeerList))
  }, [beerList, savedList, setSavedList]);

  const onSavedBeerUnchecked = useCallback((index: number) => {
    const newBeerList = [...savedList]
    newBeerList.splice(index, 1);

    setSavedList(newBeerList);
    localStorage.setItem(LOCAL_CACHE_KEY, JSON.stringify(newBeerList))
  }, [savedList]);

  useEffect(() => {
    const items = localStorage.getItem(LOCAL_CACHE_KEY);

    if (!items) {
      return;
    }

    setSavedList(JSON.parse(items));
  }, []);

  // eslint-disable-next-line
  useEffect(fetchData.bind(this, setBeerList), []);

  return (
    <article>
      <section>
        <main>
          <Paper>
            <div className={styles.listContainer}>
              <div className={styles.listHeader}>
                <TextField label='Filter...' variant='outlined' />
                <Button variant='contained' onClick={fetchData.bind(this, setBeerList)}>Reload list</Button>
              </div>
              <ul className={styles.list}>
                {beerList.map((beer, index) => (
                  <li key={beer.id}>
                    <Checkbox checked={false} onClick={() => onBeerChecked(index)} />
                    <Link component={RouterLink} to={`/beer/${beer.id}`}>
                      {beer.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Paper>

          <Paper>
            <div className={styles.listContainer}>
              <div className={styles.listHeader}>
                <h3>Favorites</h3>
              </div>
              <ul className={styles.list}>
                {savedList.map((beer, index) => (
                  <li key={index.toString()}>
                    <Checkbox checked onClick={() => onSavedBeerUnchecked(index)} />
                    <Link component={RouterLink} to={`/beer/${beer.id}`}>
                      {beer.name}
                    </Link>
                  </li>
                ))}
                {!savedList.length && <p>No saved items</p>}
              </ul>
            </div>
          </Paper>
        </main>
      </section>
    </article>
  );
};

export default Home;
