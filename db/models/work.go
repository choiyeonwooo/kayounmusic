package models

import "time"

type Work struct {
	Id       string `bson:"_id" json:"id,omitempty"`
	Title    string `json:"title"`
	Url      string `json:"url"`
	Category string `json:"category"`
	Date     string `json:"date"`
}

// Constructor for initialising default values
func NewWork() Work {
	instance := Work{}
	instance.Title = ""
	instance.Url = ""
	instance.Category = ""
	instance.Date = time.Now().Format("2006-01-02")
	return instance
}
