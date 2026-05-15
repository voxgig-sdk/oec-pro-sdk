<?php
declare(strict_types=1);

// OecPro SDK utility: prepare_body

class OecProPrepareBody
{
    public static function call(OecProContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
