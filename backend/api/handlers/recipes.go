package handlers

import (
	"api/structs"
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
)

func HandleRecipes(db *sql.DB) func(w http.ResponseWriter, r *http.Request) {
	return func(w http.ResponseWriter, r *http.Request) {
		switch r.Method {
		case http.MethodGet:
			getAllRecipes(w, r, db)
		default:
			log.Print("No implementation for method " + r.Method)
			http.Error(w, http.StatusText(http.StatusNotImplemented), http.StatusNotImplemented)
		}
	}
}

func getAllRecipes(w http.ResponseWriter, r *http.Request, db *sql.DB) {
	var recipesFound []structs.Recipe
	results, err := db.Query("SELECT id, name, mealTime, information FROM recipes;")
	if err != nil {
		log.Println(err.Error())
	}

	for results.Next() {
		var recipe structs.Recipe
		err = results.Scan(&recipe.Id, &recipe.Name, &recipe.MealTime, &recipe.Information)
		if err != nil {
			log.Println(err.Error())
		}
		recipesFound = append(recipesFound, recipe)
	}
	w.Header().Add("content-type", "application/json")
	jsonEncodedData, err := json.Marshal(recipesFound)

	if err != nil {
		http.Error(w, http.StatusText(http.StatusInternalServerError), http.StatusInternalServerError)
		log.Println("failed to encode data: ", err.Error())
	}

	_, err = fmt.Fprint(w, string(jsonEncodedData))
	if err != nil {
		http.Error(w, http.StatusText(http.StatusInternalServerError), http.StatusInternalServerError)
		log.Println("failed to print data: ", err.Error())
	}

}
