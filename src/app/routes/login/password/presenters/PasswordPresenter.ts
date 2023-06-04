import { LocaleContextModel } from '../../../../type'

export default function PasswordPresenter({ translate }: LocaleContextModel) {
    return {
        getLabel() {
            return translate('Password')
        },
    }
}
