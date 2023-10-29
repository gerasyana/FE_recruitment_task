import { Avatar, List, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material';
import SportsBar from '@mui/icons-material/SportsBar';
import Filters from './components/Filters';
import Pagination from './components/Pagination';
import { useBeers } from './useBeers';

const BeerList = () => {
  const { beerList, filters, onBeerClick, onFiltersChange, onPageChange, onRowsPerPage } = useBeers()

  return (
    <article>
      <section>
        <header>
          <h1>BeerList page</h1>
        </header>
        <main>
          <Filters filters={filters} onChange={onFiltersChange} />
          <Pagination
            count={100}
            page={filters.page - 1 as number}
            onPageChange={onPageChange}
            rowsPerPage={filters.per_page as number}
            onRowsPerPageChange={onRowsPerPage} />
          <List>
            {beerList.map((beer) => (
              <ListItemButton key={beer.id} onClick={onBeerClick.bind(this, beer.id)}>
                <ListItemAvatar>
                  <Avatar>
                    <SportsBar />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={beer.name} secondary={beer.brewery_type} />
              </ListItemButton>
            ))}
          </List>
        </main>
      </section>
    </article >
  );
};

export default BeerList;
