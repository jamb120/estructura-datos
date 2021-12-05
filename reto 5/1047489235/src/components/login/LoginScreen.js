    import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';


export const LoginScreen = () => {

    const navigate = useNavigate();
    const { dispatch } = useContext( AuthContext )

    const handleLogin = () => {

        const action = {
            type: types.login,
            payload: { nombre: 'archinaldo' }
        }

        dispatch();

        const lastPath = localStorage.getItem('lastPath') || '/dc';


        navigate( lastPath, {
            replace: true
        });
    }


    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />

            <button 
                className="btn btn-primary"
                onClick={ () => console.log('no tengo manejador') }
                >
                    Login
            </button>
        </div>
    )
}
