# OecPro SDK utility: make_context

from core.context import OecProContext


def make_context_util(ctxmap, basectx):
    return OecProContext(ctxmap, basectx)
