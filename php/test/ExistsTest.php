<?php
declare(strict_types=1);

// OecPro SDK exists test

require_once __DIR__ . '/../oecpro_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = OecProSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
