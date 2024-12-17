.PHONY: *

dev:
	npm run dev

install:
	npm install

build:
	@npm run build

clean:
	@rm -rf node_modules
	@rm -rf build
