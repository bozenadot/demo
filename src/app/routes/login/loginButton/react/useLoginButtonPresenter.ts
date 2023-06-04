import useLocaleContext from '../../../../useLocaleContext'
import LoginButtonPresenter from '../presenters/LoginButtonPresenter'

export default function useLoginButtonPresenter() {
    return LoginButtonPresenter(useLocaleContext())
}
