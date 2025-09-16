// import React, { useContext, useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { UserContext } from '../context/user.context'

// const UserAuth = ({ children }) => {

//     const { user } = useContext(UserContext)
//     const [ loading, setLoading ] = useState(true)
//     const token = localStorage.getItem('token')
//     const navigate = useNavigate()




//     useEffect(() => {
//         if (user) {
//             setLoading(false)
//         }

//         if (!token) {
//             navigate('/login')
//         }

//         if (!user) {
//             navigate('/login')
//         }

//     }, [])

//     if (loading) {
//         return <div>Loading...</div>
//     }


//     return (
//         <>
//             {children}</>
//     )
// }

// export default UserAuth



import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/user.context';
import { useNavigate } from 'react-router-dom';

const UserAuth = ({ children }) => {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!token) {
           
        } else if (!user) {
            // Optionally, you can fetch user info here or wait for it
            setLoading(false);
            //  navigate('/login');
        } else {
            setLoading(false);
        }
    }, [user, navigate]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return <>{children}</>;
};

export default UserAuth;
