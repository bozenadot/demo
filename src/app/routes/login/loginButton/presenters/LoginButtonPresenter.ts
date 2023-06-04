import { LocaleContextModel } from '../../../../type'

export default function LoginButtonPresenter({
    translate,
}: LocaleContextModel) {
    return {
        onClick() {
            console.log('click')
        },
        getText() {
            return translate('LogIn')
        },
    }
}
