<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::group(['middleware' => 'auth'], function() {
    Route::inertia('/home', 'Home');

    Route::get('/profile', [ProfileController::class, 'index'])->name('profile');
    Route::delete('/profilePhotoDelete', [ProfileController::class, 'deleteProfilePhoto'])->name('profilePhotoDelete');
    Route::put('/profilePhotoUpdate', [ProfileController::class, 'updateProfilePhoto'])->name('profilePhotoUpdate');
    Route::delete('/profileDelete', [ProfileController::class, 'deleteProfile'])->name('profileDelete');

});
