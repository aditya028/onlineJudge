package apis

import (
	"net/http"

	"github.com/go-chi/chi"
)

func PublicRouter() http.Handler{
	r := chi.NewRouter()

	r.Get("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Welcome to online Judge API!"))
	})
	r.Post("/signin", signin)
	r.Post("/signup", signup)
	r.Get("/problems", problem)
	r.Get("/problem/{id}", problemDescription)
	r.Get("/myaccount", myAccount)
	r.Post("/submit/{id}", submit)
	r.Get("/submission", submission)
	return r 
}