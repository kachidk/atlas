import React from 'react'
import SectionBorder from '@/layouts/partials/SectionBorder'
import DeleteUserForm from './DeleteUserForm'
import UpdatePasswordForm from './UpdatePasswordForm'
import UpdateProfileInformationForm from './UpdateProfileInformationForm'
import Layout from '@/layouts/Layout'
import UpdateProfilePhoto from './UpdateProfilePhoto'


function Show() {
    return (
        <div>
          <Layout>
            <div className="header">
              <h1 className="header-text">
                Profile
              </h1>
            </div>

            <div className="mx-auto max-w-7xl">
              <UpdateProfilePhoto/>
                <SectionBorder/>
              <UpdateProfileInformationForm/>
                <SectionBorder/>
              <UpdatePasswordForm/>
                <SectionBorder/>
              <DeleteUserForm />
            </div>
          </Layout>
        </div>
    )
}

export default Show
