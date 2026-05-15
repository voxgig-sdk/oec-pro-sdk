package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewCountryEntityFunc func(client *OecProSDK, entopts map[string]any) OecProEntity

var NewProductEntityFunc func(client *OecProSDK, entopts map[string]any) OecProEntity

var NewTradeEntityFunc func(client *OecProSDK, entopts map[string]any) OecProEntity

