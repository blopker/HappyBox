BROWSERIFY="node_modules/browserify/bin/cmd.js"
WATCHIFY="node_modules/watchify/bin/cmd.js"

all: install
	@ mkdir -p build
	@ $(MAKE) build

install:
	npm install

watch:
	@ $(WATCHIFY) -t reactify -o build/main.js main.js

build:
	@ $(BROWSERIFY) -t reactify -o build/main.js main.js

clean:
	@ rm -rf node_modules
	@ rm -rf build

.PHONY: build watch
