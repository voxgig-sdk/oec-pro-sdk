# ProjectName SDK exists test

import pytest
from oecpro_sdk import OecProSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = OecProSDK.test(None, None)
        assert testsdk is not None
