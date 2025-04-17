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
        placeholder={placeholder}
        {...props}
      />
  )
}

export default forwardRef(Input)