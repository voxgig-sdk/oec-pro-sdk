<?php
declare(strict_types=1);

// OecPro SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class OecProMakeContext
{
    public static function call(array $ctxmap, ?OecProContext $basectx): OecProContext
    {
        return new OecProContext($ctxmap, $basectx);
    }
}
