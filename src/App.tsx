import { matchPath, Route, Routes, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { ProjectModal } from './components/ProjectModal';
import { HomePage } from './pages/HomePage';

function AppRoutes() {
  const location = useLocation();
  const isProjectRoute = Boolean(matchPath('/project/:id', location.pathname));
  const background = (location.state as { background?: typeof location } | null)?.background;
  const routesLocation =
    background ??
    (isProjectRoute
      ? { ...location, pathname: '/', hash: '', search: '' }
      : location);

  return (
    <>
      <Routes location={routesLocation}>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>

      {isProjectRoute && (
        <Routes>
          <Route path="project/:id" element={<ProjectModal />} />
        </Routes>
      )}
    </>
  );
}

export default function App() {
  return <AppRoutes />;
}
