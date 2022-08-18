import { Route, Routes } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import GeneratorPage from './pages/GeneratorPage';

function App() {
  return (
    <DefaultLayout>
      <Routes>
        <Route path="/" element={<GeneratorPage />} />
      </Routes>
    </DefaultLayout>
  );
}

export default App;
