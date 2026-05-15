<?php
declare(strict_types=1);

// OecPro SDK base feature

class OecProBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(OecProContext $ctx, array $options): void {}
    public function PostConstruct(OecProContext $ctx): void {}
    public function PostConstructEntity(OecProContext $ctx): void {}
    public function SetData(OecProContext $ctx): void {}
    public function GetData(OecProContext $ctx): void {}
    public function GetMatch(OecProContext $ctx): void {}
    public function SetMatch(OecProContext $ctx): void {}
    public function PrePoint(OecProContext $ctx): void {}
    public function PreSpec(OecProContext $ctx): void {}
    public function PreRequest(OecProContext $ctx): void {}
    public function PreResponse(OecProContext $ctx): void {}
    public function PreResult(OecProContext $ctx): void {}
    public function PreDone(OecProContext $ctx): void {}
    public function PreUnexpected(OecProContext $ctx): void {}
}
