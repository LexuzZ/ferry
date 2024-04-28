<?php

use App\Http\Controllers\Auth\RedirectAuthenticatedUsersController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\JadwalController;
use App\Http\Controllers\JadwalUserController;
use App\Http\Controllers\KapalController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RuteController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
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

Route::get('welcome', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});
Route::get('/', [HomeController::class, 'index']);

Route::group(['middleware' => 'auth'], function () {
    Route::get("/redirectAuthenticatedUsers", [RedirectAuthenticatedUsersController::class, "home"])->name('redirectAuthenticatedUsers');
    Route::group(['middleware' => 'checkRole:admin'], function () {
        Route::inertia('/dashboard', 'Dashboard')->name('dashboard');
        Route::post('/jadwals', [JadwalController::class, 'store'])->name('jadwal.store');
        Route::get('/information', [JadwalController::class, 'info'])->name('information.info');
        Route::get('/jadwals', [JadwalController::class, 'index'])->name('jadwals.index');
        Route::get('/jadwals/create', [JadwalController::class, 'create'])->name('jadwals.create');
        Route::get('/jadwals/edit/{jadwal}', [JadwalController::class, 'edit'])->name('jadwal.edit');
        Route::patch('/jadwals/edit/{jadwal}', [JadwalController::class, 'update'])->name('jadwals.update');
        Route::get('/rute/edit/{rute}', [RuteController::class, 'edit'])->name('rute.edit');
        Route::patch('/rute/edit/{rute}', [RuteController::class, 'update'])->name('rute.update');
        Route::get('/kapal', [KapalController::class, 'index'])->name('kapals.index');
        Route::get('/kapal/create', [KapalController::class, 'create'])->name('kapals.create');
        Route::get('/kapal/edit/{kapal}', [KapalController::class, 'edit'])->name('kapals.edit');
        Route::patch('/kapal/edit/{kapal}', [KapalController::class, 'update'])->name('kapals.update');
        Route::get('/rute', [RuteController::class, 'index'])->name('rute.index');
        Route::get('/rute/create', [RuteController::class, 'create'])->name('rute.create');
        Route::get('/dashboard', [UserController::class, 'index'])->name('user.count');
        Route::get('/user', [UserController::class, 'userlist'])->name('user.store');
        Route::post('/rute', [RuteController::class, 'store'])->name('rutes.store');
        Route::post('/kapal', [KapalController::class, 'store'])->name('kapals.store');
    });

    Route::group(['middleware' => 'checkRole:user'], function () {
        Route::inertia('/userDashboard', 'UserDashboard')->name('userDashboard');
        Route::get('/userJadwal', [JadwalUserController::class, 'index'])->name('jadwal.user');
        Route::get('/pesanan', [JadwalUserController::class, 'index'])->name('jadwal.pesanan');
    });
});


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
