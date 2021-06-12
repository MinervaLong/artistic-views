/* Authentication actions */

// LOGIN
export const login = (props, values) => {
    if (values.email === 'user@mail.com' && values.password === 'password') {
        localStorage.setItem('auth', values)
        props.history.push('/dashboard');
        console.log('Login Success')
    }
    else {
        console.log('Login Failed')
    }
}

// LOGOUT
export const logout = () => {
    localStorage.removeItem('auth')
    console.log('Logout Success')
}

// LOGIN STATUS
export const isLogin = () => {
    if (localStorage.getItem('auth')) return true;
    return false;
}
