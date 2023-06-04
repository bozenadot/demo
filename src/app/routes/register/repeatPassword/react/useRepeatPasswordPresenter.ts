import useLocaleContext from '../../../../useLocaleContext'
import RepeatPasswordPresenter from '../presenters/RepeatPasswordPresenter'

export default function useRepeatPasswordPresenter() {
    return RepeatPasswordPresenter(useLocaleContext())
}
