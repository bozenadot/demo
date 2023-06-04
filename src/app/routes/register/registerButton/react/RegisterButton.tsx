import { Box, Button } from '@mui/material'
import React from 'react'
import useRegisterButtonPresenter from './useRegisterButtonPresenter'
import useThemedStyles from '../../../../hooks/useThemedStyles'

export default function RegisterButton() {
    const { getText, onClick } = useRegisterButtonPresenter()
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
