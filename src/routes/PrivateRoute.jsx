import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const { user } = useContext(AuthContext);
    // jdi user thake taile children show korbe
    if(user){
        return children;
    }
    // jdi na thake taile navigate korbe login e ;
    return <Navigate to="/signin"></Navigate>;
};

export default PrivateRoute;