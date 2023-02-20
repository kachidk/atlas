import React from "react";
import SectionBorder from "./components/SectionBorder";
import DeleteUserForm from "./components/DeleteUserForm";
import UpdatePasswordForm from "./components/UpdatePasswordForm";
import UpdateProfileInformationForm from "./components/UpdateProfileInformationForm";
import Layout from "../../layouts/Layout";
import UpdateProfilePhoto from "./components/UpdateProfilePhoto";

function Profile() {
  return (
    <div>
      <Layout>
        <div className="header">
          <h1 className="header-text">Profile</h1>
        </div>

        <div className="mx-auto max-w-7xl">
          <UpdateProfilePhoto />
          <SectionBorder />
          <UpdateProfileInformationForm />
          <SectionBorder />
          <UpdatePasswordForm />
          <SectionBorder />
          <DeleteUserForm />
        </div>
      </Layout>
    </div>
  );
}

export default Profile;
