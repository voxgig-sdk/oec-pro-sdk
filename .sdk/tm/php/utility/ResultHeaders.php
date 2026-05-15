<?php
declare(strict_types=1);

// OecPro SDK utility: result_headers

class OecProResultHeaders
{
    public static function call(OecProContext $ctx): ?OecProResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
