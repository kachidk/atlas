import React from 'react';


function Modal(props) {
  return (
    <div>
      { props.show &&
      <div
        onClick={()=>props.setShow(false)}
        className="fixed inset-0 flex justify-center bg-gray-900 bg-opacity-50"
      >
        <div
          onClick={e=>e.stopPropagation()}
          className="fixed flex flex-col w-full overflow-auto bg-gray-100 rounded-md top-1/4 py-7 md:w-3/4 md:px-7 md:py-7"
        >
          <div className="flex justify-between pl-4 mb-5 mr-5 md:pl-0">
            <div className="text-xl font-bold" >{props.title}</div>
            <div onClick={()=> props.setShow(false)}>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            </div>
          </div>
          <div>
            <div className="w-full pl-4 md:pl-0">
              {props.children}
            </div>
          </div>
        </div>
      </div>
      }
    </div>
  )
}

export default Modal
