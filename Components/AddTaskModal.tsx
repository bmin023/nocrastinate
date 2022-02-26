import React, { useState } from 'react'
import { Activity } from '../types/schoolTypes'
import { Modal } from './modal';

interface AddTaskModalProps {
  onSubmit: (activit: Activity) => void
  onClose: () => void
  open: boolean
}

export const AddTaskModal: React.FC<AddTaskModalProps> = ({open,onSubmit,onClose}) => {
  
  return (
    <Modal title='Add a Task!' open={true} onSubmit={() => { }} onClose={onClose}>
  </Modal> 
  );
}