import { Box, InputAdornment, TextField } from '@mui/material'
import React from 'react'
import Lock from '@mui/icons-material/Lock'
import useRepeatPasswordPresenter from './useRepeatPasswordPresenter'
import useThemedStyles from '../../../../hooks/useThemedStyles'

export default function RepeatPassword() {
    const { getLabel } = useRepeatPasswordPresenter()
    const styles = useThemedStyles(() => ({
        box: {
            margin: 'auto',
        },
    }))

    return (
        <Box className={styles.box}>
            <TextField
                label={getLabel()}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Lock />
                        </InputAdornment>
                    ),
                }}
                type="password"
                variant="standard"
            />
        </Box>
    )
}
