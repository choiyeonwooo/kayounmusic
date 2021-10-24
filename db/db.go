package db

import (
	"context"
	"log"
	"os"
	"time"

	"github.com/bymi15/kayounmusic/db/models"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type MongoDbClient struct {
	db                   *mongo.Database
	FilmMusicsCollection *mongo.Collection
	WorksCollection      *mongo.Collection
	ScoresCollection     *mongo.Collection
}

func InitMongoClient() MongoDbClient {
	uri := os.Getenv("CONNECTION_URI")
	clientOptions := options.Client().ApplyURI(uri)
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	client, err := mongo.Connect(ctx, clientOptions)
	if err != nil {
		log.Fatal(err)
	}

	db := client.Database(os.Getenv("DB_NAME"))
	return MongoDbClient{
		db:                   db,
		FilmMusicsCollection: db.Collection("filmmusics"),
		WorksCollection:      db.Collection("works"),
		ScoresCollection:     db.Collection("scores"),
	}

}

func (client MongoDbClient) GetFilmMusics() ([]models.FilmMusic, error) {
	var filmMusic models.FilmMusic
	var filmMusics []models.FilmMusic

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	cursor, err := client.FilmMusicsCollection.Find(ctx, bson.D{})
	if err != nil {
		defer cursor.Close(ctx)
		return filmMusics, err
	}

	for cursor.Next(ctx) {
		err := cursor.Decode(&filmMusic)
		if err != nil {
			return filmMusics, err
		}
		filmMusics = append(filmMusics, filmMusic)
	}

	return filmMusics, nil
}

func (client MongoDbClient) GetFilmMusicById(id string) (models.FilmMusic, error) {
	var filmMusic models.FilmMusic

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	objectId, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return filmMusic, err
	}

	err = client.FilmMusicsCollection.FindOne(ctx, bson.D{{"_id", objectId}}).Decode(&filmMusic)
	if err != nil {
		return filmMusic, err
	}
	return filmMusic, nil

}

func (client MongoDbClient) GetWorks() ([]models.Work, error) {
	var work models.Work
	var works []models.Work

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	cursor, err := client.WorksCollection.Find(ctx, bson.D{})
	if err != nil {
		defer cursor.Close(ctx)
		return works, err
	}

	for cursor.Next(ctx) {
		err := cursor.Decode(&work)
		if err != nil {
			return works, err
		}
		works = append(works, work)
	}

	return works, nil
}

func (client MongoDbClient) GetWorkById(id string) (models.Work, error) {
	var work models.Work

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	objectId, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return work, err
	}

	err = client.WorksCollection.FindOne(ctx, bson.D{{"_id", objectId}}).Decode(&work)
	if err != nil {
		return work, err
	}
	return work, nil

}

func (client MongoDbClient) GetScores() ([]models.Score, error) {
	var score models.Score
	var scores []models.Score

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	cursor, err := client.FilmMusicsCollection.Find(ctx, bson.D{})
	if err != nil {
		defer cursor.Close(ctx)
		return scores, err
	}

	for cursor.Next(ctx) {
		err := cursor.Decode(&score)
		if err != nil {
			return scores, err
		}
		scores = append(scores, score)
	}

	return scores, nil
}

func (client MongoDbClient) GetScoreById(id string) (models.Score, error) {
	var score models.Score

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	objectId, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return score, err
	}

	err = client.FilmMusicsCollection.FindOne(ctx, bson.D{{"_id", objectId}}).Decode(&score)
	if err != nil {
		return score, err
	}
	return score, nil

}
