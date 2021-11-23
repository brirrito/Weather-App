import logic from './functions/logic';
import view from './functions/view';

const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
});

searchBtn.addEventListener('click', async() => {
  if (searchInput.value === '') return;
  const weatherData = await logic.getData(searchInput.value);
  view.setSearchResult(weatherData);
});