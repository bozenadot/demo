import useLocaleContext from '../../../../useLocaleContext'
import UsernamePresenter from '../presenters/UsernamePresenter'

export default function useUsernamePresenter() {
    return UsernamePresenter(useLocaleContext())
}
