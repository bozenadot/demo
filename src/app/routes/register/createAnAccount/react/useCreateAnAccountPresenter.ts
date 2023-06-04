import useLocaleContext from '../../../../useLocaleContext'
import CreateAnAccountPresenter from '../presenters/CreateAnAccountPresenter'

export default function useCreateAnAccountPresenter() {
    return CreateAnAccountPresenter(useLocaleContext())
}
