package structs


type Recipe struct {
	Id int `json:"id"`
	Name string `json:"name"`
	MealTime string `json:"mealTime"`
	Information string `json:"information"`
	Image string `json:"image"`
	TimeItTakes string `json:"time_it_takes"`
	RoastingTime string `json:"roasting_time"`
	RestTime string `json:"rest_time"`
	Rating string `json:"rating"`
	Difficulty string `json:"difficulty"`
}


type Ingredient struct {
	Name string `json:"name"`
	Quantity int `json:"quantity"`
}