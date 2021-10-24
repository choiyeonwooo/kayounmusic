package models

type Score struct {
	Id            string `bson:"_id" json:"id,omitempty"`
	Title         string `json:"title"`
	Description   string `json:"description"`
	PreviewFile   string `json:"previewFile"`
	Category      string `json:"category"`
	Date          bool   `json:"date"`
	SoundCloudUrl string `json:"soundCloudUrl"`
	Img           string `json:"img"`
	YoutubeId     string `json:"youtubeId"`
}
