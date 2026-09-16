# OecPro SDK feature factory

from oecpro_sdk.feature.base_feature import OecProBaseFeature
from oecpro_sdk.feature.ratelimit_feature import OecProRatelimitFeature
from oecpro_sdk.feature.retry_feature import OecProRetryFeature
from oecpro_sdk.feature.test_feature import OecProTestFeature
from oecpro_sdk.feature.timeout_feature import OecProTimeoutFeature


_FEATURES = {
    "base": lambda: OecProBaseFeature(),
    "ratelimit": lambda: OecProRatelimitFeature(),
    "retry": lambda: OecProRetryFeature(),
    "test": lambda: OecProTestFeature(),
    "timeout": lambda: OecProTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
