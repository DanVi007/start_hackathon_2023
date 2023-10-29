package structs

type Recipe struct {
	Id           int    `json:"id"`
	Name         string `json:"name"`
	MealTime     string `json:"mealTime"`
	Information  string `json:"information"`
	Image        string `json:"image"`
	TimeItTakes  int    `json:"time_it_takes"`
	RoastingTime int    `json:"roasting_time"`
	RestTime     int    `json:"rest_time"`
	Rating       int    `json:"rating"`
	Difficulty   string `json:"difficulty"`
}

type Ingredient struct {
	Name string `json:"name"`
	Quantity int `json:"quantity"`
	StorageType string `json:"storageType"`
	QuantityType string `json:"quantitytype"`
}
