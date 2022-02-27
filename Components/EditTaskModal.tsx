import React, { useRef, useState } from 'react'
import { Activity } from '../types/schoolTypes'
import { Modal } from './modal'

interface EditTaskModalProps {
  onSubmit: () => void
  activity: Activity
  onClose: () => void
}

export const EditTaskModal: React.FC<EditTaskModalProps> = ({
  onSubmit,
  onClose,
  activity,
}) => {
  const form = useRef<HTMLFormElement>(null)

  const onSubmitHandler = () => {
    if (form.current) {
      const formData = new FormData(form.current)
      if (
        !formData.get('date') ||
        (formData.get('name')?.toString() as string).length < 1
      ) {
        return
      }
      activity = {
        name: formData.get('name') as string,
        dueDate: new Date(formData.get('date')?.toString() as string) as Date,
        subject: formData.get('category') as string,
        priority: formData.get('priority') as 'low' | 'medium' | 'high',
      }
      onSubmit()
    }
  }

  return (
    <Modal
      title="Edit a Task!"
      open={true}
      onSubmit={onSubmitHandler}
      onClose={onClose}
    >
      <form ref={form}>
        <div className="flex flex-col space-y-1">
          <div className="flex w-full">
            <label
              htmlFor="name"
              className="my-auto mr-2 block text-sm font-medium leading-5 text-gray-700"
            >
              Name:
            </label>
            <input
              placeholder="Task name"
              name="name"
              className="ml-2 w-full rounded-md border-b-2 border-gray-300 p-1 shadow"
            />
          </div>
          <div className="flex w-full">
            <label
              htmlFor="date"
              className="my-auto mr-2 block text-sm font-medium leading-5 text-gray-700"
            >
              Due Date:
            </label>
            <input
              name="date"
              type="datetime-local"
              className="ml-2 w-full rounded-md border-b-2 border-gray-300 p-1 shadow"
            />
          </div>
          <div className="flex w-full">
            <label
              htmlFor="category"
              className="my-auto mr-2 block text-sm font-medium leading-5 text-gray-700"
            >
              Category:
            </label>
            <input
              placeholder="Category"
              name="category"
              className="ml-2 w-full rounded-md border-b-2 border-gray-300 p-1 shadow"
            />
          </div>
          <div className="flex w-full">
            <label
              htmlFor="priority"
              className="my-auto mr-2 block text-sm font-medium leading-5 text-gray-700"
            >
              Priority:
            </label>
            <select
              name="priority"
              id="priority"
              className="shadow my-1 rounded-md border-b-2 border-gray-300 text-center"
            >
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
        </div>
      </form>
    </Modal>
  )
}
