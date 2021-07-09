import React, {useState,useRef} from 'react'
import Modal from './components/Modal'
import { Inertia } from '@inertiajs/inertia';
import {usePage} from '@inertiajs/inertia-react';

function DeleteUserForm() {
  const [modal, setModal] = useState(false);
  const [passwordForm, setPasswordForm] = useState();
  const password = useRef();

  const errors = usePage().props.errors;

  function confirmUserDelete(){
    setModal(true)
    setTimeout(() => password.current.focus(), 250)
  }

  function deleteUser(e){
    e.preventDefault()
    Inertia.post('/profileDelete', {
      _method: 'delete',
      password: passwordForm,
      preserveScroll: true,
    },{
      onError: () => password.current.focus(),
    })
  }
  return (
    <div>
        <div className="mt-10 md:grid md:grid-cols-3 md:gap-6 sm:mt-0">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium text-gray-900"> Delete Account </h3>
              <p className="mt-1 text-sm text-gray-600"> Permanently delete your account. </p>
            </div>
          </div>
        <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="px-4 py-5 bg-white shadow sm:p-6 sm:rounded-lg">
              <div className="max-w-xl text-sm text-gray-600">
                Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain.
              </div>
              <div className="mt-5">
                <button type="button"
                  onClick={confirmUserDelete}
                  className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase bg-red-600 border border-transparent rounded-md hover:bg-red-500">
                  Delete Account
                  </button>
              </div>

                {/* delete account confirmation modal */}
              <Modal show={modal} setShow={setModal} title='Delete Account'>
                <form>
                <div>Are you sure you want to delete your account? Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account.</div>
                <div className="mt-4">
                      <input id="name" type="password" placeholder="Password"
                        ref={password}
                        onChange={(e) => setPasswordForm(e.target.value)}
                        className="block w-full h-10 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      />
                      {errors.password &&
                       <div className="mt-2 text-sm text-red-500">{ errors.password }</div>
                      }
                </div>
                <div className="flex items-center justify-end mt-4">
                    <button type="submit"
                      onClick={deleteUser}
                      className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase bg-red-600 border border-transparent rounded-md hover:bg-red-500">
                      Delete Account
                    </button>
                </div>
                </form>
              </Modal>
            </div>
          </div>
        </div>
    </div>
  )
}

export default DeleteUserForm
