import routerMeta from './lib/routerMeta';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from '@/components/HOC/ProtectedRoute';

const lazyImport = (pageName: string) =>
  lazy(() => import(`./pages/${pageName}`));

const assignedRouter = Object.keys(routerMeta).map((componentKey: string) => {
  return {
    Component: lazyImport(componentKey),
    props: routerMeta[componentKey],
  };
});

const Router = () => (
  <Routes>
    {assignedRouter.map(({ Component, props }: any) => (
      <Route
        key={props.path}
        path={props.path}
        element={
          <ProtectedRoute path={props.path}>
            <Suspense fallback={<div>Loading...</div>}>
              <Component />
            </Suspense>
          </ProtectedRoute>
        }
      />
    ))}
  </Routes>
);

export default Router;
