import { Box, InputAdornment, TextField } from '@mui/material'
import React from 'react'
import AccountCircle from '@mui/icons-material/AccountCircle'
import useUsernamePresenter from './useUsernamePresenter'
import useThemedStyles from '../../../../hooks/useThemedStyles'

export default function Username() {
    const { getLabel } = useUsernamePresenter()
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
                            <AccountCircle />
                        </InputAdornment>
                    ),
                }}
                variant="standard"
            />
        </Box>
    )
}
