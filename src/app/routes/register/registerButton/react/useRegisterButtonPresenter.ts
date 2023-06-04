import useLocaleContext from '../../../../useLocaleContext'
import RegisterButtonPresenter from '../presenters/RegisterButtonPresenter'

export default function useRegisterButtonPresenter() {
    return RegisterButtonPresenter(useLocaleContext())
}
