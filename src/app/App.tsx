import React from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import LocaleProvider from './locale/LocaleProvider'
import AppThemeProvider from './theme/AppThemeProvider'
import Login from './routes/login/Login'
import Error404 from './routes/404/react/Error404'
import Register from './routes/register/Register'

function App() {
    return (
        <LocaleProvider>
            <AppThemeProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="*" element={<Error404 />} />
                    </Routes>
                </Router>
            </AppThemeProvider>
        </LocaleProvider>
    )
}

export default App
