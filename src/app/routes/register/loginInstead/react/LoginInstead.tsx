import React from 'react'
import { Box, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import useThemedStyles from '../../../../hooks/useThemedStyles'
import useLoginInsteadPresenter from './useLoginInsteadPresenter'

const LinkButton = Button as any

export default function LoginInstead() {
    const { getText, getLink } = useLoginInsteadPresenter()
    const styles = useThemedStyles(() => ({
        box: {
            margin: 'auto',
        },
    }))

    return (
        <Box className={styles.box}>
            <LinkButton color="secondary" LinkComponent={Link} to={getLink()}>
                {getText()}
            </LinkButton>
        </Box>
    )
}
