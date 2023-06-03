import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { Title } from '../../section-title/Title'

import './contact.style.css'
import Layout from '../../Layout'

export const Contact = () => {
    return (
        <Layout>
            <div id="Contact" className="contact py-5">
                <Container>
                    <Row>
                        <Col>
                            <Title title="Contact" />
                        </Col>
                    </Row>

                    <div className="py-4 d-flex justify-content-around flex-wrap contactLists">
                        <div>
                            <i class="fas fa-phone-square-alt"></i>0410584026
                        </div>

                        <div>
                            <i class="fas fa-envelope-square"></i>
                            nagarkotibezay02@gmail.com
                        </div>
                    </div>
                </Container>
            </div>
        </Layout>
    )
}
