import 'antd/dist/reset.css';
import './assets/styles/index.scss'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import routes from './config/routes';
function App() {
  console.log(routes);
  return (
    <BrowserRouter>
      <Routes>
        {
          routes.map((route, index) => (
            <Route
              key={toString(index)}
              path={route.path}
              element={
                <route.layout>
                  <route.element/>
                </route.layout>
              }
            />
          ))
        }
      </Routes>
    </BrowserRouter>
  );
}

export default App;
