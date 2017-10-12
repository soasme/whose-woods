import React from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import './RecordEditor.css'

export default (props) => {
  const placeholder = props.placeholder || 'Enter a record here.'
  const { input: { onChange  }, defaultValue } = props
  return (
    <div className="RecordEditor">
      <TextareaAutosize id="Content" className="Workspace"
        innerRef={ref => this.textarea = ref}
        defaultValue={defaultValue}
        onChange={onChange}
        placeholder={placeholder} />
    </div>
  )
}
