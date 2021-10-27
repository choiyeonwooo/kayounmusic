build:
		npm install --no-audit
		npm run build
		mkdir	-p functions
		GOBIN=${PWD}/functions go install ./functions/...