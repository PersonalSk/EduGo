import { createRoot } from 'react-dom/client'
import { store } from './store.tsx'
import Router from './Router.tsx'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={Router} />
  </Provider>
)
