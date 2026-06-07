import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AppShell } from './components/AppShell/AppShell'
import { Toast } from './components/Toast/Toast'
import { shell } from './components/AppShell/AppShell.css'
import { AppProvider, useApp } from './context/AppContext'
import { CreatePage } from './pages/CreatePage/CreatePage'
import { HomePage } from './pages/HomePage/HomePage'
import { MyPage } from './pages/MyPage/MyPage'
import { NotificationsPage } from './pages/NotificationsPage/NotificationsPage'
import { OnboardingPage } from './pages/OnboardingPage/OnboardingPage'
import { PostDetailPage } from './pages/PostDetailPage/PostDetailPage'
import { detailMain } from './pages/PostDetailPage/PostDetailPage.css'

function ToastContainer() {
  const { toastMessage, hideToast } = useApp()
  if (!toastMessage) return null
  return <Toast message={toastMessage} onClose={hideToast} />
}

function OnboardingGuard({ children }: { children: React.ReactNode }) {
  const { onboardingComplete } = useApp()
  if (!onboardingComplete) {
    return <Navigate to="/onboarding" replace />
  }
  return <>{children}</>
}

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/onboarding" element={<OnboardingPage />} />
        <Route
          element={
            <OnboardingGuard>
              <AppShell />
            </OnboardingGuard>
          }
        >
          <Route index element={<HomePage />} />
          <Route path="create" element={<CreatePage />} />
          <Route path="my" element={<MyPage />} />
        </Route>
        <Route
          path="post/:id"
          element={
            <OnboardingGuard>
              <div className={shell}>
                <main className={detailMain}>
                  <PostDetailPage />
                </main>
              </div>
            </OnboardingGuard>
          }
        />
        <Route
          path="notifications"
          element={
            <OnboardingGuard>
              <div className={shell}>
                <main className={detailMain}>
                  <NotificationsPage />
                </main>
              </div>
            </OnboardingGuard>
          }
        />
      </Routes>
      <ToastContainer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </BrowserRouter>
  )
}
