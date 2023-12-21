<?php 
   /* Handle CORS */
header('Content-Type: application/json');
// Specify domains from which requests are allowed
header('Access-Control-Allow-Origin: *');

// Specify which request methods are allowed
header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');

// Additional headers which may be sent along with the CORS request
header('Access-Control-Allow-Headers: X-Requested-With,Authorization,Content-Type');

//    if (isset($_POST)) {
//       $getData = json_decode(file_get_contents("php://input"), true);

//       $i = 0;

//       $dataArray = array(
//          'introVideo' => null,
//          'secVideo' => array()
//       );

//       while ($i  < count($getData)) {
          
//           $url = "https://www.youtube.com/watch?v=r7Z08hgGfKc";

//           $ch_session = curl_init();

//           curl_setopt($ch_session, CURLOPT_URL, $url);
         
//           curl_setopt($ch_session, CURLOPT_RETURNTRANSFER, true);

//           $result_url = curl_exec($ch_session);

//           curl_close($ch_session);

//           preg_match_all('!"viewCount":\\{"simpleText":"(.*?)"\\}!', $result_url, $data);

//           // print_r($data[1][0]);
//           // preg_match_all('!\d+!', $data[1][0], $numberData);
//           $int_var = (int)filter_var($data[1][0], FILTER_SANITIZE_NUMBER_INT);

//           $countViewData = number_format($int_var);

//           array_push($dataArray['secVideo'], $countViewData);

//           $i++;
//       }

//       $url = "https://www.youtube.com/watch?v=r7Z08hgGfKc";

//        $ch_session = curl_init();

//        curl_setopt($ch_session, CURLOPT_URL, $url);
      
//        curl_setopt($ch_session, CURLOPT_RETURNTRANSFER, true);

//        $result_url = curl_exec($ch_session);

//        curl_close($ch_session);

//        preg_match_all('!"viewCount":\\{"simpleText":"(.*?)"\\}!', $result_url, $data);

//        // print_r($data[1][0]);
//        // preg_match_all('!\d+!', $data[1][0], $numberData);
//        $int_var = (int)filter_var($data[1][0], FILTER_SANITIZE_NUMBER_INT);

//        $countViewData = number_format($int_var);

//        $dataArray['introVideo'] = $countViewData;
      

//        echo json_encode($dataArray);
   

// }

    











    $url = "https://www.youtube.com/watch?v=r7Z08hgGfKc";

    $ch_session = curl_init();

    curl_setopt($ch_session, CURLOPT_URL, $url);
   
    curl_setopt($ch_session, CURLOPT_RETURNTRANSFER, true);

    $result_url = curl_exec($ch_session);

    curl_close($ch_session);

    preg_match_all('!"viewCount":\\{"simpleText":"(.*?)"\\}!', $result_url, $data);

    // print_r($data[1][0]);
    // preg_match_all('!\d+!', $data[1][0], $numberData);
    $int_var = (int)filter_var($data[1][0], FILTER_SANITIZE_NUMBER_INT);

    $countViewData = array(number_format($int_var));

   
    echo json_encode($countViewData);






?>