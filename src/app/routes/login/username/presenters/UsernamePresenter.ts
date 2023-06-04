import { LocaleContextModel } from '../../../../type'

export default function UsernamePresenter({ translate }: LocaleContextModel) {
    return {
        getLabel() {
            return translate('Username')
        },
    }
}
