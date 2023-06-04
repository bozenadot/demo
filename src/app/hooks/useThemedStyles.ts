import { Theme, useTheme } from '@mui/material'
import { Styles, createUseStyles } from 'react-jss'

export default function useThemedStyles(
    styles: (theme: Theme) => Styles<string, unknown, Jss.Theme>
) {
    const theme = useTheme()

    return createUseStyles(styles(theme))
}
