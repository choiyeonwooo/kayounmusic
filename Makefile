build:
		npm install --no-audit --force
		npm run build
		# mkdir	-p functions
		# GOBIN=${PWD}/functions go install ./functions/...