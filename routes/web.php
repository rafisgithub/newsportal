<?php

use App\Http\Controllers\HomeControlller;
use Illuminate\Support\Facades\Route;


// user route

Route::get('/',[HomeControlller::class,'index'])->name('index');
Route::get('/national-news',[HomeControlller::class,'nationalNews'])->name('national-news');

//admin route

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return view('dashboard');
    })->name('dashboard');
});
