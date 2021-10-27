package models

import "time"

type Score struct {
	Id            string `bson:"_id" json:"id,omitempty"`
	Title         string `json:"title"`
	Description   string `json:"description"`
	PreviewFile   string `json:"previewFile"`
	FullFile      string `json:"fullFile"`
	Category      string `json:"category"`
	Date          string `json:"date"`
	SoundCloudUrl string `json:"soundCloudUrl"`
	Img           string `json:"img"`
	YoutubeId     string `json:"youtubeId"`
}

// Constructor for initialising default values
func NewScore() Score {
	instance := Score{}
	instance.Title = ""
	instance.Description = ""
	instance.PreviewFile = ""
	instance.FullFile = ""
	instance.Category = ""
	instance.Date = time.Now().Format("2006-01-02")
	instance.SoundCloudUrl = ""
	instance.Img = ""
	instance.YoutubeId = ""
	return instance
}
