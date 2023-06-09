import { blue } from '@mui/material/colors'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import React, { useEffect, useState } from 'react'

function useMediaQuery(query: string) {
    const [matches, setMatches] = useState(window.matchMedia(query).matches)

    useEffect(() => {
        function listener() {
            setMatches(window.matchMedia(query).matches)
        }

        window.matchMedia(query).addEventListener('change', listener)

        return () => {
            window.matchMedia(query).removeEventListener('change', listener)
        }
    }, [query])

    return matches
}

function spacing(arg: number) {
    return `${arg * 8}px`
}

export default function AppThemeProvider({
    children,
}: {
    children: JSX.Element
}) {
    const matches = useMediaQuery('(prefers-color-scheme: dark)')
    const theme = createTheme({
        spacing,
        palette: {
            mode: matches ? 'dark' : 'light',
            primary: {
                main: blue[500],
            },
        },
    })

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
