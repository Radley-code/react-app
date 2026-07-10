import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

function Layout( {children} ){
    const {darkMode, setDarkMode} = useContext(ThemeContext);
    return (
        <div  style={ {padding: "1rem", 
            display: "flex",
            flexDirection: "column",
        backgroundColor: darkMode ? "#222" : "#f9f9f9",
        color: darkMode ? "#f9f9f9" : "#222",
            minHeight: "100vh",
        fontFamily: "system-ui",
        width: "100%",
        height: "100vh",
        } }>
            <nav style={ {marginBottom: "1rem"} }>
                <Link to="/" style={{marginRight: "1rem"}} >DashBoard</Link>
                 <Link to="/tasks" style={{marginRight: "1rem"}}>Tasks</Link>
                  <Link to="/settings">Settings</Link>
                  <button
                  onClick={() => setDarkMode(!darkMode) }
                  style={{marginLeft: "1rem"}}
                  >
                    {darkMode ? "Light Mode" : "Dark mode"}
                  </button>
            </nav>

           {/* This is where pages render*/}
           {children}
       
      </div>
    );
}

export default Layout;