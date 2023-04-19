import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import UserListPage from "./pages/UserListPage/UserListPage";
import HomePage from "./pages/HomePage/HomePage";
import UserDetailPage from "./pages/UserDetailPage/UserDetailPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import PostListPage from "./pages/PostListPage/PostListPage";
import PostDetailPage from "./pages/PostDetailPage/PostDetailPage";
import AlbumsPage from "./pages/AlbumListPage/AlbumListPage";
import AlbumDetailPage from "./pages/AlbumDetailPage/AlbumDetailPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import Layout from "./Layout/Layout";
import Reports from "./pages/ReportsPage/Reports";
import UserListPage2 from "./pages/UserListPage2/UserListPage2";
import UserDetailPage2 from "./pages/UserDetailPage2/UserDetailPage2";
import PokemonList from "./pages/PokemonList/PokemonList";

const App = () => {
  const [token, setToken] = useState(true);

  if (!token) {
    return <LoginPage setToken={setToken} />;
  }
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="user-list" element={<UserListPage />} />
            <Route path="/user-detail/:id" element={<UserDetailPage />} />
            <Route path="/post-list" element={<PostListPage />} />
            <Route path="/post-detail/:id" element={<PostDetailPage />} />
            <Route path="/album-list" element={<AlbumsPage />} />
            <Route path="/album-detail-page/:id" element={<AlbumDetailPage />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/user-list-two" element={<UserListPage2 />} />
            <Route path="/user-detail/:id" element={<UserDetailPage2 />} />
            <Route path="/pokemon-list" element={<PokemonList />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
          <Route path="/login-page" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
