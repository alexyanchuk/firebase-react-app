import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { AuthProvider } from "./utils/auth-context";
import SignIn from "./containers/SignIn";
import SignUp from "./containers/SignUp";
import Main from "./containers/Main";

// Styles
import classes from "./App.module.css";

// Constants
import { ROUTES } from "./constants/routes";

const App = () => {
  // const existingUser = JSON.parse(localStorage.getItem("user"));
  // const [authUser, setAuthUser] = useState(existingUser);
  // const accountData = useSelector(state => {
  //     return state.accountReducer;
  // });

  // useEffect(() => {
  //     const fetchData = async () => {
  //         if (!Object.values(accountData).length) {
  //             await dispatch(getUser());
  //         }
  //     };
  //     fetchData();
  // }, [accountData]);
  //
  // const setTokens = async data => {
  //     if (!data) {
  //         setAuthUser(null);
  //         await logout();
  //     } else {
  //         setAuthUser(data);
  //         // storeAuthentication(data);
  //     }
  // };

  return (
      <AuthProvider value={true}>
        <BrowserRouter>
            <CssBaseline />
              <div className={classes.App}>
                <Switch>
                  <Route exact path="/" component={Main} />
                  <Route
                      exact
                      path={`${ROUTES.signIn}`}
                      component={SignIn}
                  />
                  <Route
                      exact
                      path={`${ROUTES.signUp}`}
                      component={SignUp}
                  />
                </Switch>
              </div>
        </BrowserRouter>
      </AuthProvider>
  );
};

export default App;
