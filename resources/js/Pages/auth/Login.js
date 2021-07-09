import React, {useState} from 'react'
import backgroundImage from './assets/images/auth-image.jpg';
import {Inertia} from '@inertiajs/inertia';
import{InertiaLink, usePage} from '@inertiajs/inertia-react';

function Login() {
    const [form, setForm] = useState({
        email: "",
        password: "",
      })

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value;
        setForm(form => ({
            ...form,
            [key]: value,
        }));
      }

    function handleSubmit(e) {
        e.preventDefault()
        Inertia.post('/login', {
            email: form.email,
            password: form.password,
        })
      }
      const errors = usePage().props.errors;
    return (
        <div>
            <div className="flex flex-wrap w-full">

                {/* Login Section  */}
                <div className="flex flex-col w-full md:w-1/2">

                    <div className="flex justify-center pt-12 md:justify-start md:pl-12 md:-mb-24">
                        <InertiaLink href="/" className="p-4 text-xl font-bold text-white bg-black">Logo</InertiaLink>
                    </div>

                    <div className="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
                        <p className="text-3xl text-center">Welcome.</p>
                        <form className="flex flex-col pt-3 md:pt-8" onSubmit={handleSubmit}>
                            <div className="flex flex-col pt-4">
                                <label htmlFor="email" className="text-lg">Email</label>
                                <input type="email" id="email" placeholder="your@email.com"
                                value={form.email}
                                onChange={handleChange}
                                className="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"/>
                                {errors.email && <div className="text-sm text-red-500">{errors.email}</div>}
                            </div>

                            <div className="flex flex-col pt-4">
                                <label htmlFor="password" className="text-lg">Password</label>
                                <input type="password" id="password" placeholder="Password"
                                value={form.password}
                                onChange={handleChange}
                                className="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
                                {errors.password && <div className="text-sm text-red-500">{errors.password}</div>}
                            </div>

                            <input type="submit" value="Log In" className="p-2 mt-8 text-lg font-bold text-white bg-black hover:bg-gray-700" />
                        </form>
                        <div className="pt-12 pb-12 text-center">
                            <p>Don't have an account? <InertiaLink href="/register" className="font-semibold underline">Register here.</InertiaLink></p>
                        </div>
                    </div>

                </div>

                {/* Image Section */}
                <div className="w-1/2 shadow-2xl">
                    <img className="hidden object-cover w-full h-screen md:block" src={backgroundImage} />
                </div>
            </div>
        </div>
    )
}

export default Login
