<?php

    class HTTP
    {
        // sending the right status by the http code to the http response
        public static function create($number,$message)
        {
            switch ($number) {
                case '200':
                    $status = 'OK';
                    HTTP::httpResponse($number, $status, $message);
                break;
                
                case '201':
                    $status = 'Created';
                    HTTP::httpResponse($number, $status, $message);
                break;

                case '301':
                    $status = 'Moved Permanently';
                    HTTP::httpResponse($number, $status, $message);
                break;

                case '302':
                    $status = 'Found';
                    HTTP::httpResponse($number, $status, $message);
                break;

                case '400':
                    $status = 'Bad Request';
                    HTTP::httpResponse($number, $status, $message);
                break;

                case '401':
                    $status = 'Unauthorized';
                    HTTP::httpResponse($number, $status, $message);
                break;

                case '404':
                    $status = 'Not Found';
                    HTTP::httpResponse($number, $status, $message);
                break;

                case '409':
                    $status = 'Conflict';
                    HTTP::httpResponse($number, $status, $message);
                break;
                
                default:
                    $status = 'Service Unavailable';
                    HTTP::httpResponse($number, $status, $message);
                    break;
            }

        }

        // response function
        private static function httpResponse($number, $status, $message)
        {
            header( 'Content-Type: application/json' );
            header( 'HTTP/1.0 ' . $number . ' ' . $status );
            die( json_encode( $message ) );
        }
    }
?>