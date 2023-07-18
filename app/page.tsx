'use client'

import React, { useState, CSSProperties } from 'react'
import { Button, Modal, Layout, Space, Col, Row } from 'antd'

const { Content } = Layout

const spaceCss: CSSProperties = {
  display: 'flex',
  minHeight: '100vh',
  alignItems: 'center',
  justifyContent: 'center'
}

const modalCss: CSSProperties = {
  display: 'flex'
}

const Home: React.FC = () => {
  const [modalLoading, setModalLoading] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

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

  return (
    <Space
      direction='vertical'
      size='middle'
      align='center'
      style={spaceCss}
    >
      <Content>

        <Button
          type="primary"
          onClick={showModal}
          size='large'
        >
          JUST CLICK IT
        </Button>

        <Modal
          open={modalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          centered
        >
          <Row>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              col1
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              col2
            </Col>
          </Row>
        </Modal>

      </Content>
    </Space>
  )
}

export default Home
