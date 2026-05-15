<?php
declare(strict_types=1);

// OecPro SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class OecProFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new OecProBaseFeature();
            case "test":
                return new OecProTestFeature();
            default:
                return new OecProBaseFeature();
        }
    }
}
