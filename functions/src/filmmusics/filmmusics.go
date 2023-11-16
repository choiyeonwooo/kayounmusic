package main

import (
	"encoding/json"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
	"github.com/bymi15/kayounmusic/db"
)

func handler(request events.APIGatewayProxyRequest) (*events.APIGatewayProxyResponse, error) {
	client := db.InitMongoClient()
	defer client.Disconnect()
	filmMusics, err := client.GetFilmMusics()
	if err != nil {
		return &events.APIGatewayProxyResponse{
			StatusCode: 500,
		}, err
	}
	jsonBody, _ := json.Marshal(filmMusics)
	return &events.APIGatewayProxyResponse{
		StatusCode: 200,
		Headers: map[string]string{
			"Content-Type":                 "application/json",
			"Access-Control-Allow-Origin":  "*",
			"Access-Control-Allow-Headers": "Content-Type",
			"Access-Control-Allow-Methods": "GET",
		},
		Body: string(jsonBody),
	}, nil
}

func main() {
	// Make the handler available for Remote Procedure Call by AWS Lambda
	lambda.Start(handler)
}
