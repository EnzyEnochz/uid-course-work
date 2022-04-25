<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::query()->delete();
        User::create([
            'name' => 'User 1',
            'email' => 'user@test.com',
            'password' => Hash::make('secret')
        ]);
    }
}
