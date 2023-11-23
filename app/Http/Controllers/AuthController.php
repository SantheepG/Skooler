<?php

namespace App\Http\Controllers;

use App\Models\Student;
use App\Models\User;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;


class AuthController extends Controller
{
    public function signup(Request $request)
    {
        $user = User::create([
            'name' => $request->input('name'),
            'student_id' => (int)($request->input('student_id')),
            'mobile_no' => $request->input('mobile_no'),
            'email' => $request->input('email'),
            'password' => Hash::make($request->input('password')),

        ], Response::HTTP_CREATED);
        return $user;
    }

    public function login(Request $request)
    {
        if (!Auth::attempt($request->only('mobile_no', 'password'))) {
            return response([
                'message' => ['These credentials do not match our records.']
            ], Response::HTTP_UNAUTHORIZED);
        }


        $token = $request->user()->createToken('token')->plainTextToken;
        $cookie = cookie('jwt', $token, 60 * 24);
        return response([
            'message' => $token
        ])->withCookie($cookie);
    }

    public function user()
    {
        return Auth::user();
    }


    public function logout()
    {
        $cookie = Cookie::forget('jwt');
        return response([
            'message' => "logged out"
        ])->withCookie($cookie);
    }

    public function AddStudent(Request $request)
    {
        $student = Student::create([
            'name' => $request->input('name'),
            'mobile_no' => $request->input('mobile_no')

        ], Response::HTTP_CREATED);
        return $student;
    }

    public function ViewStudents()
    {
    }
}
