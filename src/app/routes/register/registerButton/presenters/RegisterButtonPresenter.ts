import { LocaleContextModel } from '../../../../type'

export default function RegisterButtonPresenter({
    translate,
}: LocaleContextModel) {
    return {
        onClick() {
            console.log('click')
        },
        getText() {
            return translate('Register')
        },
    }
}
