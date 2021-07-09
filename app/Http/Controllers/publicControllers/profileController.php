<?php

namespace App\Http\Controllers\publicControllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class profileController extends Controller
{
    public function index()
    {
        return Inertia::render('profile/Show');
    }

    public function updateProfilePhoto(Request $request)
    {
        if($request->hasFile('photo')){
            $photo = $request->file('photo');
            $filename = auth()->user()->id . '.' . $photo->getClientOriginalExtension();
            if($photo->getClientOriginalExtension() !== 'jpg'){

                return inertia('profile/Show', [
                    'photoMessage' => 'Only upload .jpg files'
                ]);
             }

            $this->deleteOldImage();

            Storage::putFileAs('public/profilePhotos', $photo, $filename );
            auth()->user()->update([
                'photo_name' => $filename
            ]);

            return redirect()->route('profile');
        }
    }

    protected function deleteOldImage()
    {
        if(auth()->user()->photo_name)  {
          Storage::delete('public/profilePhotos/'.auth()->user()->photo_name );
        }
    }

    public function deleteProfilePhoto()
    {

        if(auth()->user()->photo_name){

            Storage::delete('public/profilePhotos/'.auth()->user()->photo_name );
            auth()->user()->update([
                'photo_name' => null
            ]);
        }

        return back(303);
    }
    public function deleteProfile(Request $request)
    {
        $request->validate([
            'password' => 'required|string|password',
        ]);

        $user = User::find(Auth::user()->id);

        if(Auth::user()->photo_name){
            Storage::delete('public/profilePhotos/'.auth()->user()->photo_name );
            auth()->user()->update([
                'photo_name' => null
            ]);
        }

        Auth::logout();

        $user->delete();

        return redirect('/');
    }
}
