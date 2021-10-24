package models

type Work struct {
	Id       string `bson:"_id" json:"id,omitempty"`
	Title    string `json:"title"`
	Url      string `json:"url"`
	Category string `json:"category"`
	Date     string `json:"date"`
}
