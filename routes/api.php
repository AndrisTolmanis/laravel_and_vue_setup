<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['middleware' => 'api'], function () {
    Route::group(['prefix' => 'example-api'], function () {
        Route::get('do-request', 'SampleController@doEndpoint');
    });

    Route::apiResource('users', 'UserController');
    Route::get('users/{user}/permissions', 'UserController@permissions');

});
