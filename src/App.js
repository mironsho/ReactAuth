import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./components/Profile";
import Register from "./components/Register";
import VerifyEmail from "./components/VerifyEmail";
import Login from "./components/Login";
import { useState, useEffect } from "react";
import { AuthProvider } from "./contexts/AuthContext";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);
  return (
    <Router>
      <AuthProvider value={{ currentUser, timeActive, setTimeActive }}>
        <Switch>
          <Route exact path="/" component={Profile} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/verify-email" component={VerifyEmail} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
