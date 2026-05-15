<?php
declare(strict_types=1);

// OecPro SDK utility: feature_add

class OecProFeatureAdd
{
    public static function call(OecProContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
