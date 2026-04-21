import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Layout from './layouts/Layout';
import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';
import ContentHubPage from './pages/ContentHubPage';
import ContentDetailPage from './pages/ContentDetailPage';
import AboutPage from './pages/AboutPage';
import RoadmapPage from './pages/RoadmapPage';
import SubscribePage from './pages/SubscribePage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="chat" element={<ChatPage />} />
          <Route path="content" element={<ContentHubPage />} />
          <Route path="content/:id" element={<ContentDetailPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="roadmap" element={<RoadmapPage />} />
          <Route path="subscribe" element={<SubscribePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
