package models

type Work struct {
	Id       string `bson:"_id,omitempty" json:"id,omitempty"`
	Title    string `json:"title"`
	Url      string `json:"url"`
	Category string `json:"category"`
}

// Constructor for initialising default values
func NewWork() Work {
	instance := Work{}
	instance.Title = ""
	instance.Url = ""
	instance.Category = ""
	return instance
}
