BROWSERIFY="node_modules/.bin/browserify"
WATCHIFY="node_modules/.bin/watchify"

all: install
	@ mkdir -p build
	@ $(MAKE) build

install:
	npm install

watch:
	@ $(WATCHIFY) -t [ babelify --presets [ react ] ] main.js -o build/main.js

build:
	@ $(BROWSERIFY) -t [ babelify --presets [ react ] ] main.js -o build/main.js

clean:
	@ rm -rf node_modules
	@ rm -rf build

.PHONY: build watch
