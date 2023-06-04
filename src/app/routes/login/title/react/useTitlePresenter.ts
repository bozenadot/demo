import useLocaleContext from '../../../../useLocaleContext'
import TitlePresenter from '../presenters/TitlePresenter'

export default function useTitlePresenter() {
    return TitlePresenter(useLocaleContext())
}
