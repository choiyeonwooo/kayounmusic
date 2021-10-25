package main

import (
	"log"
	"time"

	"github.com/bymi15/kayounmusic/db"
	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Print("Failed to load .env file")
	}

	start := time.Now()
	client := db.InitMongoClient()
	filmMusics, err := client.GetWorks()
	if err != nil {
		log.Fatal(err)
	}
	elapsed := time.Since(start)
	log.Printf("Time elapsed %s", elapsed)
	log.Print(filmMusics)
}
