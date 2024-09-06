import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const LazyHome = lazy(() => import('./pages/Home/Home'))
const LazyNewList = lazy(() => import('./pages/List/NewList'))
const LazyProfile = lazy(() => import('./pages/Profile/Profile'))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<>Loading...</>}>
        <Routes>
          <Route path="/" element={<LazyHome />} />
          <Route path="/new-list" element={<LazyNewList />} />
          <Route path="/profile" element={<LazyProfile />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
