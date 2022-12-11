import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './componen/Home/Home';
import ContactsDetails from './componen/ContactsDetails/ContactsDetails';
import EdittedContacs from './componen/EdittedContacs/EdittedContacs';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/:id',
        element: <ContactsDetails></ContactsDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/${params.id}`)
      },
      {
        path: '/:id',
        element: <EdittedContacs></EdittedContacs>,
        loader: ({ params }) => fetch(`http://localhost:5000/${params.id}`)


      },
    ]
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
