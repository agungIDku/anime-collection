import { Routes, Route } from 'react-router-dom';

import { Home, NotFound, AnimeDetail, Collection, ColletionDetail } from '@pages'
import routeConst from '@constants/route'

import './reset.css';

function App() {
  return (
    <Routes>
      <Route path={routeConst.HOME} element={<Home />} />
      <Route path={routeConst.ANIME} element={<Home />} />
      <Route path={routeConst.ANIME_DETAIL} element={<AnimeDetail />} />
      <Route path={routeConst.COLLECTION} element={<Collection />} />
      <Route path={routeConst.COLLECTION_DETAIL} element={<ColletionDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
