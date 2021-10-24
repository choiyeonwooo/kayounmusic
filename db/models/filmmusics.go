package models

type FilmMusic struct {
	Id         string `bson:"_id" json:"id,omitempty"`
	Title      string `json:"title"`
	YoutubeId  string `json:"youtubeId"`
	Img        string `json:"img"`
	ComingSoon bool   `json:"comingSoon"`
}
