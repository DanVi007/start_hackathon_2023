package handlers

import (
	"api/structs"
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
)

func HandleStorage(db *sql.DB) func(w http.ResponseWriter, r *http.Request) {
	return func(w http.ResponseWriter, r *http.Request) {
		switch r.Method {
		case http.MethodGet:
			getAllIngredients(w, r, db)
		default:
			log.Print("No implementation for method " + r.Method)
			http.Error(w, http.StatusText(http.StatusNotImplemented), http.StatusNotImplemented)
		}
	}
}

func getAllIngredients(w http.ResponseWriter, r *http.Request, db *sql.DB) {
	var ingredientsFound []structs.Ingredient
	results, err := db.Query("SELECT ingredients.name, ingredients_in_storage.quantity FROM ingredients_in_storage JOIN ingredients ON ingredients_in_storage.ingredient_id = ingredients.id;")
	if err != nil {
		log.Println(err.Error())
	}

	for results.Next() {
		var ingredient structs.Ingredient
		err = results.Scan(&ingredient.Name, &ingredient.Quantity)
		if err != nil {
			log.Println(err.Error())
		}
		ingredientsFound = append(ingredientsFound, ingredient)
	}
	w.Header().Add("content-type", "application/json")
	jsonEncodedData, err := json.Marshal(ingredientsFound)

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
