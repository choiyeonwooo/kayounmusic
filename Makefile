build:
		mkdir	-p functions
		GOBIN=${PWD}/functions go install ./...
		npm run build