export const Content = ({className='', id='', children}) => {
  return (
    <div id={id} className='max-w-500 mx-auto'>
      <div className='mx-[8vw]'>
        <div className={className}>
          {children}
        </div>
      </div>
    </div>
  )
}