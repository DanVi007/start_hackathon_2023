package main

import (
	"api/constants"
	"api/handlers"
	"database/sql"
	"log"
	"net/http"
	"os"

	_ "github.com/go-sql-driver/mysql"
)

func main() {


	dataSourceName := constants.SQL_DATABASE_USER + "@" + constants.SQL_PATH + 
	"/" + constants.SQL_DATABASE_NAME

	db , err := sql.Open("mysql", dataSourceName)
	if err != nil {
		panic(err.Error())
	}
	defer db.Close()

	http.HandleFunc(constants.RECIPE_PATH, handlers.HandleRecipes(db))
	http.HandleFunc(constants.RECIPE_PATH+ "/", handlers.HandleRecipes(db))

	port := os.Getenv("PORT")
	if port == ""  {
		log.Println("$PORT has not been set. Default is 8080.")
		port = "8080"
	}

	log.Println("Server starts on port " + port)
	err = http.ListenAndServe(":"+port, nil)
	if err != nil {
		log.Fatalf("failed to initialize server: %v", err)
	}


	
}