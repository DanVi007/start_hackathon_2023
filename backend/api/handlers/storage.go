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
		case http.MethodPost:
			HandleIngredientUpdate(db)(w,r)
		default:
			log.Print("No implementation for method " + r.Method)
			http.Error(w, http.StatusText(http.StatusNotImplemented), http.StatusNotImplemented)
		}
	}
}

func getAllIngredients(w http.ResponseWriter, r *http.Request, db *sql.DB) {
	var ingredientsFound []structs.Ingredient
	results, err := db.Query("SELECT ingredients.name, ingredients_in_storage.quantity, ingredients_in_storage.storage_type FROM ingredients_in_storage JOIN ingredients ON ingredients_in_storage.ingredient_id = ingredients.id;")
	if err != nil {
		log.Println(err.Error())
	}

	for results.Next() {
		var ingredient structs.Ingredient
		err = results.Scan(&ingredient.Name, &ingredient.Quantity, &ingredient.StorageType)
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

func HandleIngredientUpdate(db *sql.DB) func(w http.ResponseWriter, r *http.Request) {
    return func(w http.ResponseWriter, r *http.Request) {
        switch r.Method {
        case http.MethodPost:
            updateIngredientQuantity(w, r, db)
        default:
            log.Print("No implementation for method " + r.Method)
            http.Error(w, http.StatusText(http.StatusNotImplemented), http.StatusNotImplemented)
        }
    }
}

func updateIngredientQuantity(w http.ResponseWriter, r *http.Request, db *sql.DB) {
    var updateData struct {
        IngredientName  string `json:"ingredientName"`
        QuantityChange  int    `json:"quantityChange"`
    }

    decoder := json.NewDecoder(r.Body)
    if err := decoder.Decode(&updateData); err != nil {
        http.Error(w, http.StatusText(http.StatusBadRequest), http.StatusBadRequest)
        log.Println("Failed to decode request data: ", err.Error())
        return
    }

    // Get the ingredient ID based on the ingredient name
    var ingredientID int
    err := db.QueryRow("SELECT id FROM ingredients WHERE name = ?", updateData.IngredientName).Scan(&ingredientID)
    if err != nil {
        http.Error(w, http.StatusText(http.StatusInternalServerError), http.StatusInternalServerError)
        log.Println("Failed to get ingredient ID: ", err.Error())
        return
    }

    // Perform the SQL update to modify the ingredient quantity
    _, err = db.Exec("UPDATE ingredients_in_storage SET quantity = quantity + ? WHERE ingredient_id = ?", updateData.QuantityChange, ingredientID)
    
    if err != nil {
        http.Error(w, http.StatusText(http.StatusInternalServerError), http.StatusInternalServerError)
        log.Println("Failed to update ingredient quantity: ", err.Error())
        return
    }

    w.WriteHeader(http.StatusNoContent)
}
