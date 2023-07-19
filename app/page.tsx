'use client'

import React, { useState, CSSProperties } from 'react'
import {
  Button, Modal, Layout, Space, Col, Row, Form,
  Input, Checkbox, Typography, Select, message
} from 'antd'
import CylinderShape from './components/cylindershape'
import ModalCheckItems from './components/modalcheckitems'
import './page.css'

const { Content } = Layout

const { Text, Link, Title } = Typography

const { Option } = Select

const modalCss: CSSProperties = {
  minWidth: '50%'
}

interface formValues {
  firstName: string
  lastName: string
  email: string
  countryCode: string
  phone: string
  whatsappUpdates: boolean
}

const Home: React.FC = () => {
  const [submitLoading, setSubmitLoading] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [form] = Form.useForm()
  const [messageApi, contextHolder] = message.useMessage()

  const showModal = () => {
    setModalOpen(true)
  }

  const handleCancel = () => {
    setModalOpen(false)
  }

  const randomIntBetween = (min: number, max: number) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
  }

  const onFinish = (values: formValues) => {
    console.log('Received values of form: ', values)
    setSubmitLoading(true)
    setTimeout(() => {
      setSubmitLoading(false)
      setModalOpen(false)

      // 30% chance of randomly failing :)
      randomIntBetween(0, 100) < 70 ? success() : failure()
    }, randomIntBetween(500, 2500))
  }

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Values submitted successfully. Check the console!',
      duration: 5
    })
  }

  const failure = () => {
    messageApi.open({
      type: 'error',
      content: "Oh no! Something very randomly went wrong! And it's ambiguous what it is!",
      duration: 5
    })
  }

  const countryCodeSelector = (
    <Form.Item name="countryCode" noStyle initialValue={'1'}>
      <Select style={{ width: 70 }}>
        <Option value='1'>+1</Option>
      </Select>
    </Form.Item>
  )

  const onSubmit = () => {
    console.log('submitted, waiting 3 sec')
    setSubmitLoading(true)
    setTimeout(() => {
      setSubmitLoading(false)
      setModalOpen(false)
    }, 3000)
  }

  return (
    <Space
      direction="vertical"
      size="middle"
      align="center"
      className="page-container"
    >
      { contextHolder }
      <Content>
        <Button type="primary" onClick={showModal} size="large">
          CLICK ME!
        </Button>

        <Modal
          open={modalOpen}
          style={modalCss}
          onCancel={handleCancel}
          centered
          footer={null}
          wrapClassName="modal-wrapper"
        >
          <Row>
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={24}
              xl={12}
              className="modal-infographics"
            >
              <CylinderShape className="cylinder-shape"></CylinderShape>
              <Space direction="vertical" size="large">
                <Text className="modal-title">Talk to a career expert</Text>
                <Title>Schedule 1:1 free counselling</Title>
                <Title level={4} style={{ maxWidth: "80%" }}>
                  Start your journey to becoming a Full-Stack Developer!
                </Title>
                <ModalCheckItems />
              </Space>
            </Col>
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={24}
              xl={12}
              className="modal-form-container"
            >
              <Form
                form={form}
                id="signup-form"
                name="signup-form"
                onFinish={onFinish}
                scrollToFirstError
              >
                <Row gutter={12}>
                  <Space size="small">
                    <Col>
                      <Form.Item
                        name="firstName"
                        rules={[
                          { type: "string" },
                          {
                            required: true,
                            message: "First name is required.",
                          },
                        ]}
                      >
                        <Input
                          type="string"
                          placeholder="First Name*"
                          required
                        />
                      </Form.Item>
                    </Col>
                    <Col>
                      <Form.Item
                        name="lastName"
                        rules={[
                          { type: "string" },
                          {
                            required: true,
                            message: "Last name is required.",
                          },
                        ]}
                      >
                        <Input type="string" placeholder="Last Name*"></Input>
                      </Form.Item>
                    </Col>
                  </Space>
                </Row>
                <Form.Item
                  name='email'
                  rules={[
                    {
                      type: "email",
                      message: "Please enter a valid email.",
                    },
                    {
                      required: true,
                      message: "Email is required.",
                    },
                  ]}
                >
                  <Input type="email" placeholder="Email*"></Input>
                </Form.Item>
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
                    addonBefore={countryCodeSelector}
                    style={{ width: "100%" }}
                    type="phone"
                  />
                </Form.Item>
                <Form.Item
                  name='whatsappUpdates'
                  valuePropName='checked'
                  initialValue={true}
                >
                  <Checkbox
                    style={{
                      fontSize: "12px",
                      color: "#969696",
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
                      height: "3.5rem",
                      background:
                        "linear-gradient(to right, #b132bc 0%, #e4753b 100%",
                    }}
                    size="large"
                    block
                    loading={submitLoading}
                  >
                    Submit
                  </Button>
                </Form.Item>
                <Text
                  style={{
                    fontSize: "12px",
                    textAlign: "center",
                    color: "#969696",
                  }}
                >
                  By tapping submit, you agree to KnowledgeHut{" "}
                  <Link href="" target="_blank" style={{ fontSize: "12px" }}>
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link href="" target="_blank" style={{ fontSize: "12px" }}>
                    Terms & Conditions
                  </Link>
                </Text>
              </Form>
            </Col>
          </Row>
        </Modal>
      </Content>
    </Space>
  );
}

export default Home
