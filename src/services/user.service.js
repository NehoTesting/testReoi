import HttpService from './HttpService.js'

export default {
    login,
    signup,
    logout

}


async function login(userCred) {
    const user = await HttpService.post('auth/login', userCred)
    try {
        return _handleLogin(user)
    } catch (err) {
        console.log('error when login, err:', err);
    }

}
async function signup(userCred) {
    const user = await HttpService.post('auth/signup', userCred)
    try {
        return _handleLogin(user)
    } catch (err) {
        console.log('had issue loggin, err:', err);
    }
}

async function logout() {
    await HttpService.post('auth/logout');
    sessionStorage.clear();
}

function _handleLogin(user) {
    sessionStorage.setItem('user', JSON.stringify(user))
    console.log('login success. user:', user);
    return user;
}