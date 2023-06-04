import { Typography } from '@mui/material'
import React from 'react'
import useTitlePresenter from './useTitlePresenter'
import useThemedStyles from '../../../../hooks/useThemedStyles'

export default function Title() {
    const { getTitle } = useTitlePresenter()
    const styles = useThemedStyles((theme) => ({
        title: {
            textAlign: 'center',
        },
    }))

    return (
        <Typography variant="h4" className={styles.title}>
            {getTitle()}
        </Typography>
    )
}
