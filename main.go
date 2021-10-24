package main

import (
	"log"

	"github.com/bymi15/kayounmusic/db"
	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Print("Failed to load .env file")
	}

	client := db.InitMongoClient()
	filmMusics, err := client.GetFilmMusicById("6175dbf3b06f572ef5ca2737")
	if err != nil {
		log.Fatal(err)
	}
	log.Print(filmMusics)
}
