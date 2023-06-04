import useLocaleContext from '../../../../useLocaleContext'
import PasswordPresenter from '../presenters/PasswordPresenter'

export default function usePasswordPresenter() {
    return PasswordPresenter(useLocaleContext())
}
