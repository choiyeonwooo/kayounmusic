package models

type FilmMusic struct {
	Id         string `bson:"_id,omitempty" json:"id,omitempty"`
	Title      string `json:"title"`
	YoutubeId  string `json:"youtubeId"`
	Img        string `json:"img"`
	ComingSoon bool   `json:"comingSoon"`
	Category   string `json:"category"`
	Order      int    `json:"order"`
}

// Constructor for initialising default values
func NewFilmMusic() FilmMusic {
	instance := FilmMusic{}
	instance.Title = ""
	instance.YoutubeId = ""
	instance.Img = ""
	instance.ComingSoon = false
	instance.Category = ""
	instance.Order = 1
	return instance
}
