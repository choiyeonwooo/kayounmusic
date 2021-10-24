build:
		npm run build
		mkdir	-p functions
		GOBIN=${PWD}/functions go install ./...