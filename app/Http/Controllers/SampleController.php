<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SampleController extends Controller
{
    public function doEndpoint(Request $request)
    {
        return response()->json(['data' => [1, 2, 3]]);
    }
}
