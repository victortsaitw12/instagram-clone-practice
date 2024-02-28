import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import AuthPage from "./pages/AuthPage/AuthPage"
import ProfilePage from "./pages/ProfilePage/ProfilePage"
import PageLayout from "./layouts/PageLayout/PageLayout"
function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
        <Route path="/auth" element={<AuthPage></AuthPage>} />
        <Route path="/:username" element={<ProfilePage />} />
      </Routes>
    </PageLayout>
  )
}

export default App
