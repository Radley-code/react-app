import { Link } from "react-router-dom";


function Layout({children}){
    return (
        <div  style={ {padding: "1rem", fontFamily: "system-ui"} }>
            <nav style={ {marginBottom: "1rem"} }>
                <Link to="/" style={{marginRight: "1rem"}} >DashBoard</Link>
                 <Link to="/tasks" style={{marginRight: "1rem"}}>Tasks</Link>
                  <Link to="/settings">Settings</Link>
            </nav>

           
            {children}
      </div>
    );
}

export default Layout;