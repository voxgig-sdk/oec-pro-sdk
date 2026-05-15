<?php
declare(strict_types=1);

// OecPro SDK utility: result_body

class OecProResultBody
{
    public static function call(OecProContext $ctx): ?OecProResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
