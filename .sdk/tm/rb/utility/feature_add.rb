# OecPro SDK utility: feature_add
module OecProUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
