import useLocaleContext from '../../../../useLocaleContext'
import LoginInsteadPresenter from '../presenters/LoginInsteadPresenter'

export default function useLoginInsteadPresenter() {
    return LoginInsteadPresenter(useLocaleContext())
}
