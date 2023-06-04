import { LocaleContextModel } from '../../../../type'

export default function LoginInsteadPresenter({
    translate,
}: LocaleContextModel) {
    return {
        getText() {
            return translate('LoginInstead')
        },
        getLink() {
            return '/'
        },
    }
}
