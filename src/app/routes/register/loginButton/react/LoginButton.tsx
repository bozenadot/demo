import { Box, Button } from '@mui/material'
import React from 'react'
import useLoginButtonPresenter from './useLoginButtonPresenter'
import useThemedStyles from '../../../../hooks/useThemedStyles'

export default function LoginButton() {
    const { getText, onClick } = useLoginButtonPresenter()
    const styles = useThemedStyles(() => ({
        box: {
            margin: 'auto',
        },
    }))

    return (
        <Box className={styles.box}>
            <Button variant="contained" onClick={onClick}>
                {getText()}
            </Button>
        </Box>
    )
}
