<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeControlller extends Controller
{
    public function index(){
        return view("frontend.home.index");
    }

    public function nationalNews(){
        return view('frontend.national-news.national_news');
    }
}
