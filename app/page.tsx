'use client'

import React, { useState, CSSProperties } from 'react'
import { Button, Modal, Layout, Space, Col, Row, Form, Input, Checkbox, Typography, Select } from 'antd'
import './page.css'

const { Content } = Layout

const { Text, Link, Title } = Typography

const { Option } = Select

const modalCss: CSSProperties = {
  minWidth: '50%'
}

const Home: React.FC = () => {
  const [modalLoading, setModalLoading] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [form] = Form.useForm()

  const showModal = () => {
    setModalOpen(true)
  };

  const handleOk = () => {
    setModalLoading(true)
    setTimeout(() => {
      setModalLoading(false)
      setModalOpen(false)
    }, 3000)
  }

  const handleCancel = () => {
    setModalOpen(false)
  }

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values)
  }

  const prefixSelector = (
    <Form.Item name="prefix" noStyle initialValue={'1'}>
      <Select style={{ width: 70 }}>
        <Option value="1">+1</Option>
      </Select>
    </Form.Item>
  );

  return (
    <Space
      direction="vertical"
      size="middle"
      align="center"
      className="page-container"
    >
      <Content>
        <Button type="primary" onClick={showModal} size="large">
          JUST CLICK IT
        </Button>

        <Modal
          open={modalOpen}
          onOk={handleOk}
          style={modalCss}
          onCancel={handleCancel}
          centered
          footer={null}
          wrapClassName="modal-wrapper"
        >
          <Row>
            <Col
              xs={24} sm={24} md={12} lg={12} xl={12}
              className="modal-infographics"
            >

              <svg width="97" height="177" viewBox="0 0 97 177" fill="none" xmlns="http://www.w3.org/2000/svg" className='cylinder-shape'>
              <mask id="mask0_1672_8" maskUnits="userSpaceOnUse" x="0" y="0" width="97" height="177">
              <rect width="97" height="177" fill="#D9D9D9"/>
              </mask>
              <g mask="url(#mask0_1672_8)">
              <rect x="8" y="120.137" width="160" height="60" rx="30" transform="rotate(-45 8 120.137)" fill="url(#paint0_linear_1672_8)"/>
              </g>
              <defs>
              <linearGradient id="paint0_linear_1672_8" x1="11.2789" y1="135.641" x2="132.901" y2="195.038" gradientUnits="userSpaceOnUse">
              <stop stop-color="#47CEEE"/>
              <stop offset="1" stop-color="#4CD305"/>
              </linearGradient>
              </defs>
              </svg>

              <Space direction="vertical" size="large">
                <Text className="modal-title">Talk to a career expert</Text>
                <Title>Schedule 1:1 free counselling</Title>
                <Title level={4} style={{ maxWidth: "70%" }}>
                  Start your journey to becoming a Full-Stack Developer!
                </Title>
                <ul>
                  <li>Experience Outcome-based Immersive Learning</li>
                  <li>
                    Globally Recognized Accredidations, Case Studies and
                    Real-World Simulations
                  </li>
                  <li>Training by Renowned Industry Experts</li>
                </ul>
              </Space>
            </Col>
            <Col
              xs={24} sm={24} md={12} lg={12} xl={12}
              className="modal-form-container"
            >
              <Form form={form} id='signup-form' name="signup-form" onFinish={onFinish}>
                <Space direction="vertical" size="large">
                  <Row gutter={12}>
                    <Space size='small'>
                      <Col>
                        <Input type="string" placeholder="First Name*"></Input>
                      </Col>
                      <Col>
                        <Input type="string" placeholder="Last Name*"></Input>
                      </Col>
                    </Space>
                  </Row>
                  <Row>
                    <Col>
                      <Input type="email" placeholder="Email*"></Input>
                    </Col>
                  </Row>
                  <Form.Item
                    name="phone"
                    rules={[
                      {
                        required: true,
                        message: "Phone number is required.",
                      },
                    ]}
                  >
                    <Input
                      addonBefore={prefixSelector}
                      style={{ width: "100%" }}
                      type='phone'
                    />
                  </Form.Item>
                  <Form.Item>
                    <Checkbox
                      style={{
                        fontSize: '12px',
                        color: '#969696'
                      }}
                      checked
                    >
                      I want to receive updates directly on WhatsApp.
                    </Checkbox>
                  </Form.Item>
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      style={{
                        height: '3.5rem',
                        background: 'linear-gradient(to right, #b132bc 0%, #e4753b 100%'
                      }}
                      size='large'
                      block
                    >
                      Submit
                    </Button>
                  </Form.Item>
                  <Text
                    style={{
                      fontSize: '12px',
                      textAlign: 'center',
                      color: '#969696'
                    }}
                  >
                    By tapping submit, you agree to KnowledgeHut{' '}
                    <Link href='' target='_blank' style={{ fontSize: '12px' }}>Privacy Policy</Link>{' '}
                    and{' '}
                    <Link href='' target='_blank' style={{ fontSize: '12px' }}>Terms & Conditions</Link>
                  </Text>
                </Space>
              </Form>
            </Col>
          </Row>
        </Modal>
      </Content>
    </Space>
  );
}

export default Home
