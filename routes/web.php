<?php

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
Route::prefix('json')->group(function () {
    Route::get('/home', 'PageController@index');
});
Route::view('/{path?}', 'welcome')
    ->where('path', '.*')
    ->name('react');

