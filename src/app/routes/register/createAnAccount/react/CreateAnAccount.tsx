import React from 'react'
import { Box, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import useThemedStyles from '../../../../hooks/useThemedStyles'
import useCreateAnAccountPresenter from './useCreateAnAccountPresenter'

const LinkButton = Button as any

export default function CreateAnAcccount() {
    const { getText, getLink } = useCreateAnAccountPresenter()
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
