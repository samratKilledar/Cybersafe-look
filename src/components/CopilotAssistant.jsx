import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateMessage } from '../features/copilot/copilotSlice'

function CopilotAssistant() {
  const dispatch = useDispatch()
  const message = useSelector((state) => state.copilot.message)

  return (
    <div className="p-4 bg-gray-900 text-white">
      <h2 className="text-xl font-bold mb-2">AI Copilot</h2>
    
    </div>
  )
}

export default CopilotAssistant
