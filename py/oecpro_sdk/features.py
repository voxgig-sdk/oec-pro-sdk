# OecPro SDK feature factory

from oecpro_sdk.feature.base_feature import OecProBaseFeature
from oecpro_sdk.feature.test_feature import OecProTestFeature


def _make_feature(name):
    features = {
        "base": lambda: OecProBaseFeature(),
        "test": lambda: OecProTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
