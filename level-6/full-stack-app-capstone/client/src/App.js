import React, { useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Navbar from './components/Navbar.js'
import Auth from './components/Auth.js'
import Profile from './components/Profile.js'
import Public from './components/Public.js'
import Classes from './components/Classes.js'
import Features from './components/Features.js'
import Spells from './components/Spells.js'
import ProtectedRoute from './components/ProtectedRoute.js'
import { UserContext } from './context/UserProvider.js'

export default function App(){
    const { token, logout } = useContext(UserContext)
    return (
        <div className="app">
        { token && <Navbar token={token}/> }
        <Switch>
          <Route 
            exact path="/" 
            render={()=> token ? <Redirect to="/profile"/> : <Auth />}
          />
          <ProtectedRoute 
            path="/profile"
            component={Profile}
            redirectTo="/"
            token={token}
            logout={logout}
          />
          <ProtectedRoute 
            path="/public"
            component={Public}
            redirectTo="/"
            token={token}
          />
          <ProtectedRoute
            path="/classes"
            component={Classes}
            redirectTo="/"
            token={token}
          />
          <ProtectedRoute
            path="/features"
            component={Features}
            redirectTo="/"
            token={token}
          />
          <ProtectedRoute
            path="/spells"
            component={Spells}
            redirectTo="/"
            token={token}
          />
        </Switch>
      </div>
    )
}