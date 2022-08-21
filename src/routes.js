import { Routes, Route } from "react-router-dom"

import AuthPage from "./AuthPage/AuthPage"
import ProfilePage from "./ProfilePage/ProfilePage"

export const useAppRoutes = (isAuthenticated, setIsAuthenticated) => {
    if (isAuthenticated) {
        return (
            <Routes>
                <Route path="/profile" element={<ProfilePage setIsAuthenticated={setIsAuthenticated} />} />
                <Route path="*" element={<ProfilePage setIsAuthenticated={setIsAuthenticated} />} />
            </Routes>
        )
    }

    return (
        <Routes>
            <Route path="/login" element={<AuthPage setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="*" element={<AuthPage setIsAuthenticated={setIsAuthenticated} />} />
        </Routes>
    )
}