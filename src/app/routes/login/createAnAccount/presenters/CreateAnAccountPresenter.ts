import { LocaleContextModel } from '../../../../type'

export default function CreateAnAccountPresenter({
    translate,
}: LocaleContextModel) {
    return {
        getText() {
            return translate('CreateAnAccount')
        },
        getLink() {
            return '/register'
        },
    }
}
