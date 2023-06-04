import { LocaleContextModel } from '../../../../type'

export default function RepeatPasswordPresenter({
    translate,
}: LocaleContextModel) {
    return {
        getLabel() {
            return translate('RepeatPassword')
        },
    }
}
