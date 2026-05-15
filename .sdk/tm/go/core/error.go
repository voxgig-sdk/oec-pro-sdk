package core

type OecProError struct {
	IsOecProError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewOecProError(code string, msg string, ctx *Context) *OecProError {
	return &OecProError{
		IsOecProError: true,
		Sdk:              "OecPro",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *OecProError) Error() string {
	return e.Msg
}
