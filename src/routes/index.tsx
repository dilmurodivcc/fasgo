import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import Layout from '../components/layout';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
