import en from './en'

function typeGuard<T extends Record<keyof typeof en, string>>(object: T) {
    return object
}

const pl = typeGuard(
    Object.freeze({
        LogIn: 'Zaloguj się',

        Password: 'hasło',
        Username: 'nazwa użytkownika',

        CreateAnAccount: 'stwórz nowe konto',
        Register: 'zarejestruj się',
        RepeatPassword: 'powtórz hasło',
    })
)

export default pl
