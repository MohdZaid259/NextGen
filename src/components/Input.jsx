import {forwardRef} from 'react'

function Input({
  type='text',
  placeholder='',
  className='',
  ...props
},ref) {

  return (
      <input
        type={type}
        ref={ref}
        className={` ${className}`}
        {...props}
        placeholder={placeholder}
      />
  )
}

export default forwardRef(Input)