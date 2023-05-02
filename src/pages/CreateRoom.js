import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Layout from '../components/Layout'
import Input from '../components/Input'
import Title from '../components/Title'
import Button from '../components/Button'
import TextButton from '../components/TextButton'

const CreateRoom = () => {
  const navigate = useNavigate()
  const [roomName, setRoomName] = useState('')

  const handleSubmit = () => {
    if (!roomName) {
      return
    }

    navigate(`/chat-room/${roomName}`)
  }

  return (
    <Layout>
      <Title classes="move-in-bottom my-40" title="สร้างห้องใหม่" />
      <Input
        classes="move-in-bottom mb-40"
        autoFocus
        onChange={(e) => setRoomName(e.target.value)}
      />
      <div className="button-container move-in-bottom">
        <TextButton
          classes="mr-50"
          text="กลับ"
          onClick={() => navigate('/detail')}
        />
        <Button text="ยืนยัน" onClick={handleSubmit} />
      </div>
    </Layout>
  )
}

export default CreateRoom