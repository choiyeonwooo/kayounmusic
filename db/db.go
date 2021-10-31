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
	var filmMusics []models.FilmMusic

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	cursor, err := client.FilmMusicsCollection.Find(ctx, bson.D{})
	if err != nil {
		defer cursor.Close(ctx)
		return filmMusics, err
	}

	for cursor.Next(ctx) {
		filmMusic := models.NewFilmMusic()
		err := cursor.Decode(&filmMusic)
		if err != nil {
			return filmMusics, err
		}
		filmMusics = append(filmMusics, filmMusic)
	}

	return filmMusics, nil
}

func (client MongoDbClient) GetFilmMusicById(id string) (models.FilmMusic, error) {
	filmMusic := models.NewFilmMusic()

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

func (client MongoDbClient) CreateFilmMusic(filmMusic models.FilmMusic) error {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	_, err := client.FilmMusicsCollection.InsertOne(ctx, filmMusic)
	if err != nil {
		return err
	}
	return nil
}

func (client MongoDbClient) UpdateFilmMusic(id string, filmMusic models.FilmMusic) error {
	objectId, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return err
	}

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	var data bson.M
	bytes, err := bson.Marshal(filmMusic)
	if err != nil {
		return err
	}
	err = bson.Unmarshal(bytes, &data)
	if err != nil {
		return err
	}
	_, err = client.FilmMusicsCollection.UpdateOne(
		ctx,
		bson.D{{"_id", objectId}},
		bson.D{{"$set", data}},
	)
	return err
}

func (client MongoDbClient) DeleteFilmMusic(id string) error {
	objectId, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return err
	}

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	_, err = client.FilmMusicsCollection.DeleteOne(ctx, bson.D{{"_id", objectId}})
	if err != nil {
		return err
	}
	return nil
}

func (client MongoDbClient) GetWorks() ([]models.Work, error) {
	var works []models.Work

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	cursor, err := client.WorksCollection.Find(ctx, bson.D{})
	if err != nil {
		defer cursor.Close(ctx)
		return works, err
	}

	for cursor.Next(ctx) {
		work := models.NewWork()
		err := cursor.Decode(&work)
		if err != nil {
			return works, err
		}
		works = append(works, work)
	}

	return works, nil
}

func (client MongoDbClient) GetWorkById(id string) (models.Work, error) {
	work := models.NewWork()

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

func (client MongoDbClient) CreateWork(work models.Work) error {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	_, err := client.WorksCollection.InsertOne(ctx, work)
	if err != nil {
		return err
	}
	return nil
}

func (client MongoDbClient) UpdateWork(id string, work models.Work) error {
	objectId, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return err
	}

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	var data bson.M
	bytes, err := bson.Marshal(work)
	if err != nil {
		return err
	}
	err = bson.Unmarshal(bytes, &data)
	if err != nil {
		return err
	}
	_, err = client.WorksCollection.UpdateOne(
		ctx,
		bson.D{{"_id", objectId}},
		bson.D{{"$set", data}},
	)
	return err
}

func (client MongoDbClient) DeleteWork(id string) error {
	objectId, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return err
	}

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	_, err = client.WorksCollection.DeleteOne(ctx, bson.D{{"_id", objectId}})
	if err != nil {
		return err
	}
	return nil
}

func (client MongoDbClient) GetScores() ([]models.Score, error) {
	var scores []models.Score

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	cursor, err := client.ScoresCollection.Find(ctx, bson.D{})
	if err != nil {
		defer cursor.Close(ctx)
		return scores, err
	}

	for cursor.Next(ctx) {
		score := models.NewScore()
		err := cursor.Decode(&score)
		if err != nil {
			return scores, err
		}
		scores = append(scores, score)
	}

	return scores, nil
}

func (client MongoDbClient) GetScoreById(id string) (models.Score, error) {
	score := models.NewScore()

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	objectId, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return score, err
	}

	err = client.ScoresCollection.FindOne(ctx, bson.D{{"_id", objectId}}).Decode(&score)
	if err != nil {
		return score, err
	}
	return score, nil

}

func (client MongoDbClient) CreateScore(score models.Score) error {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	_, err := client.ScoresCollection.InsertOne(ctx, score)
	if err != nil {
		return err
	}
	return nil
}

func (client MongoDbClient) UpdateScore(id string, score models.Score) error {
	objectId, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return err
	}

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	var data bson.M
	bytes, err := bson.Marshal(score)
	if err != nil {
		return err
	}
	err = bson.Unmarshal(bytes, &data)
	if err != nil {
		return err
	}
	_, err = client.ScoresCollection.UpdateOne(
		ctx,
		bson.D{{"_id", objectId}},
		bson.D{{"$set", data}},
	)
	return err
}

func (client MongoDbClient) DeleteScore(id string) error {
	objectId, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return err
	}

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	_, err = client.ScoresCollection.DeleteOne(ctx, bson.D{{"_id", objectId}})
	if err != nil {
		return err
	}
	return nil
}
