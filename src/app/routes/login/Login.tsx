import { Card, Container } from '@mui/material'
import React from 'react'
import Title from './title/react/Title'
import useThemedStyles from '../../hooks/useThemedStyles'
import Username from './username/react/Username'
import Password from './password/react/Password'
import LoginButton from './loginButton/react/LoginButton'
import CreateAnAcccount from './createAnAccount/react/CreateAnAccount'

export default function Login() {
    const styles = useThemedStyles((theme) => ({
        card: {
            padding: theme.spacing(3),
            marginTop: theme.spacing(3),
            gap: theme.spacing(2),
            display: 'flex',
            flexDirection: 'column',
        },
    }))

    return (
        <Container>
            <Card className={styles.card}>
                <Title />
                <Username />
                <Password />
                <LoginButton />
                <CreateAnAcccount />
            </Card>
        </Container>
    )
}
