<?php 
   /* Handle CORS */

// Specify domains from which requests are allowed
header('Access-Control-Allow-Origin: *');

// Specify which request methods are allowed
header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');

// Additional headers which may be sent along with the CORS request
header('Access-Control-Allow-Headers: X-Requested-With,Authorization,Content-Type');


    $url = "https://www.youtube.com/watch?v=aLrIQ-MEKoE";

    $ch_session = curl_init();

    curl_setopt($ch_session, CURLOPT_URL, $url);
   
    curl_setopt($ch_session, CURLOPT_RETURNTRANSFER, true);

    $result_url = curl_exec($ch_session);

    curl_close($ch_session);

    preg_match_all('!"viewCount":\\{"simpleText":"(.*?)"\\}!', $result_url, $data);

    // print_r($data[1][0]);
    // preg_match_all('!\d+!', $data[1][0], $numberData);
    $int_var = (int)filter_var($data[1][0], FILTER_SANITIZE_NUMBER_INT);

    $countViewData = array("YTViewData"=>number_format($int_var));


    // print_r(number_format($int_var));

    echo json_encode($countViewData);




?>