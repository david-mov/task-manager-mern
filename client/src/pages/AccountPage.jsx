import * as React from 'react';
import {Container, Row, Col, Button, Card} from 'react-bootstrap';
import useAuth from '../hooks/useAuth'

export default function AccountPage() {
    const {user} = useAuth()

    return (
        <Container>
            <Row className="mt-4 d-flex justify-content-center">
                <Col xs={12} className="text-center">
                    <img 
                        src="/img/male_avatar.svg" 
                        alt="profile" 
                        style={{
                            width: '200px',
                            height: '200px',
                            borderRadius: '50%',
                            objectFit: 'cover'
                        }}
                    />
                </Col>
                <Col xs={12} sm={8} md={6} lg={4} className='mt-4'>
                    <Card className='mw-50 p-3 text-center'>
                        <p><b>Name: </b>{user.name}</p>
                        <p><b>Email: </b>{user.email}</p>
                        <p><b>Rol: </b>{user.role}</p>

                        <div>
                            <Button>Edit account</Button>
                        </div>
                        <Button variant="link" className="mt-3">Change password</Button>
                        <Button variant="link" className="my-2 text-danger">Delete account</Button>

                    </Card>
                </Col>
            </Row>
        </Container>
    )
}