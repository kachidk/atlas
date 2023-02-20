import React, { useState, useRef, MouseEvent } from "react";
import { usePage, router } from "@inertiajs/react";
import { profilePhoto } from "../../../utils/profilePhoto";

function UpdateProfilePhoto() {
  const [photoPreview, setPhotoPreview] = useState<string | ArrayBuffer | null | undefined>(null);
  const photoForm = useRef<File>();
  const [reRender, setReRender] = useState(false);
  const photo = useRef<HTMLInputElement>(null);

  const auth = usePage().props as any;
  const photoMessage = usePage().props.photoMessage as any;

  function selectNewPhoto(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    photo.current?.click();
  }

  function updatePhotoPreview() {
    const reader = new FileReader();

    reader.onload = (e) => {
      const newValue = e.target?.result;
      setPhotoPreview(newValue);
    };

    if (photo.current?.files?.[0]) {
      reader.readAsDataURL(photo.current.files[0]);
    }
  }

  function deletePhoto(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    router.delete("/profilePhotoDelete", {
      preserveScroll: true,
      onSuccess: () => setPhotoPreview(null),
    });
  }

  function updateProfilePhoto() {
    if (photo.current) {
      photoForm.current = photo.current?.files?.[0];
    }

    router.post(
      "/profilePhotoUpdate",
      {
        _method: "put",
        photo: photoForm.current,
        forceFormData: true,
      },
      {
        onSuccess: () => {
          setReRender(!reRender);
        },
      }
    );
  }

  return (
    <div>
      <div className="mt-10 md:grid md:grid-cols-3 md:gap-6 sm:mt-0">
        {/* left side */}
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium text-gray-900"> Update Profile Photo</h3>
            <p className="mt-1 text-sm text-gray-600">
              Ensure your account is using a long, random password to stay secure.
            </p>
          </div>
        </div>

        {/* right side */}
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="px-4 py-5 bg-white shadow sm:p-6 sm:rounded-tl-md sm:rounded-tr-md">
              <div className="grid grid-cols-6 gap-6">
                {/* profile photo */}
                <div className="col-span-6 sm:col-span-4">
                  {/* profile photo file input */}
                  <input type="file" className="hidden" ref={photo} onChange={updatePhotoPreview} />
                  <label className="block text-sm font-medium text-gray-700" htmlFor="photo">
                    <span>Photo</span>
                  </label>

                  {/* current profile photo */}
                  {!photoPreview && (
                    <div className="mt-2">
                      <img
                        src={
                          auth.user.photo_name
                            ? `/storage/profilePhotos/${auth.user.photo_name}`
                            : profilePhoto(auth.user.name)
                        }
                        alt=""
                        className="object-cover w-20 h-20 rounded-full"
                      />
                    </div>
                  )}

                  {/* new profile photo preview */}
                  {photoPreview && (
                    <div className="mt-2">
                      <span
                        className="block w-20 h-20 rounded-full"
                        style={{
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center center",
                          backgroundImage: `url( "${photoPreview}" )`,
                        }}
                      ></span>
                    </div>
                  )}

                  <button
                    className="inline-flex items-center px-4 py-2 mt-2 mr-2 text-xs font-semibold tracking-widest text-gray-700 uppercase transition bg-white border border-gray-300 rounded-md shadow-sm hover:text-gray-500"
                    onClick={selectNewPhoto}
                  >
                    Select a new photo
                  </button>
                  {
                    // auth.user.profile_photo_path &&
                    <button
                      className="inline-flex items-center px-4 py-2 mt-2 text-xs font-semibold tracking-widest text-gray-700 uppercase transition bg-white border border-gray-300 rounded-md shadow-sm hover:text-gray-500"
                      onClick={deletePhoto}
                    >
                      remove photo
                    </button>
                  }
                  {photoMessage && <div className="mt-4 text-sm text-red-500">{photoMessage}</div>}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end px-4 py-3 text-right border-t shadow bg-gray-50 sm:px-6 sm:rounded-bl-md sm:rounded-br-md">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase transition bg-gray-800 border border-transparent rounded-md hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25"
                onClick={updateProfilePhoto}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateProfilePhoto;
