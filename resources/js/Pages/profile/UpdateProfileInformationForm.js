import React,{useState, useEffect, useRef} from 'react';
import{usePage} from '@inertiajs/inertia-react';
import {Inertia} from '@inertiajs/inertia';

function UpdateProfileInformationForm() {
  const [nameForm, setNameForm] = useState()
  const [emailForm, setEmailForm] = useState()
  const initialName = useRef();
  const initialEmail = useRef();

  const auth = usePage().props;
  const errors = usePage().props.errors;


  function handleSubmit(e) {
    e.preventDefault()
    Inertia.post('user/profile-information', {
        _method: 'put',
        name: nameForm,
        email: emailForm
    })
  }

  useEffect(() => {
    initialName.current.value = auth.user.name;
    setNameForm(auth.user.name);
    initialEmail.current.value = auth.user.email;
    setEmailForm(auth.user.email);

  }, [])


    return (
        <div>
        <div className="md:grid md:grid-cols-3 md:gap-6">
            {/* left side */}
            <div className="md:col-span-1">
              <h3 className="text-lg font-medium text-gray-900"> Profile Information </h3>
              <p className="mt-1 text-sm text-gray-600"> Update your account's profile information and email address. </p>
            </div>
            {/* right side */}
            <div className="mt-5 md:mt-0 md:col-span-2">
              <form>
                <div className="px-4 py-5 bg-white shadow sm:p-6 sm:rounded-tl-md sm:rounded-tr-md">
                  <div className="grid grid-cols-6 gap-6">

                    {/* name */}
                    <div className="col-span-6 sm:col-span-4">
                      <label className="block text-sm font-medium text-gray-700" htmlFor="name">
                        <span>Name</span>
                      </label>
                      <input id="name" type="text"
                        ref={initialName}
                        onChange={(e) => setNameForm(e.target.value)}
                        className="block w-full h-10 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      />
                      {errors.updateProfileInformation &&
                       <div className="text-sm text-red-500">{ errors.updateProfileInformation.name }</div>
                      }
                    </div>

                    {/* email */}
                    <div className="col-span-6 mb-3 sm:col-span-4">
                      <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                        <span>Email</span>
                      </label>
                      <input id="email" type="email"
                        ref={initialEmail}
                        onChange={(e) => setEmailForm(e.target.value)}
                        className="block w-full h-10 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      />
                      {errors.updateProfileInformation &&
                       <div className="text-sm text-red-500">{ errors.updateProfileInformation.email }</div>
                      }
                    </div>

                  </div>
                </div>
                {/* actions */}
                <div className="flex items-center justify-end px-4 py-3 text-right border-t shadow bg-gray-50 sm:px-6 sm:rounded-bl-md sm:rounded-br-md">
                    <button type="submit"
                      onClick={handleSubmit}
                      className="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase bg-gray-800 border border-transparent rounded-md hover:bg-gray-700">
                      save
                    </button>
                </div>
              </form>
            </div>
          </div>

        </div>
    )
}

export default UpdateProfileInformationForm

