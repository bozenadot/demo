import { Box, InputAdornment, TextField } from '@mui/material'
import React from 'react'
import Lock from '@mui/icons-material/Lock'
import usePasswordPresenter from './usePasswordPresenter'
import useThemedStyles from '../../../../hooks/useThemedStyles'

export default function Password() {
    const { getLabel } = usePasswordPresenter()
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
