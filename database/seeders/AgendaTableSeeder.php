<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class AgendaTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create('pt_BR');
    
        for ($i=0; $i < 20; $i++) { 
            $horas = $this->create_time_range('15:30', '18:30', '30 mins', '24');
            \DB::table('agendas')
                ->insert([
                    'pet_id' => rand(1, 4),
                    'servico_id' => rand(1, 6),
                    'data' => $faker->dateTimeInInterval('-2 days', '+2 days'),
                    'hora' => $horas
                ]);
        }
    }

    function create_time_range($start, $end, $interval = '30 mins', $format = '12') {
        $startTime = strtotime($start); 
        $endTime   = strtotime($end);
        $returnTimeFormat = ($format == '12')?'g:i:s A':'G:i:s';
    
        $current   = time(); 
        $addTime   = strtotime('+'.$interval, $current); 
        $diff      = $addTime - $current;
    
        $times = array(); 
        while ($startTime < $endTime) { 
            $times[] = date($returnTimeFormat, $startTime); 
            $startTime += $diff; 
        } 
        $times[] = date($returnTimeFormat, $startTime); 

        $horas = array_rand($times, 2);
        
        return $times[$horas[0]];
    }
}
