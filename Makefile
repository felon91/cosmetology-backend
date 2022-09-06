.PHONY: install
install:
	npm i

.PHONY: ci
ci:
	GIT_SSH_COMMAND="ssh" npm ci --also=dev

# run the development server
.PHONY: dev
dev:
	npm run dev

# create an optimized production build
.PHONY: build
build:
	npm run build

# start prod server
.PHONY: start
start:
	npm start

.PHONY: restart
restart:
	pm2 restart next --update-env

# prettier + eslint + tsc
.PHONY: lint
lint:
	npm run format
	npm run lint
	npm run type-check

# run git-cz
.PHONY: commit
commit:
	npm run commit

# run ci-install & lint code
.PHONY: ci-lint
ci-lint: ci lint

# run build
.PHONY: ci-build
ci-build:
	UPLOAD_SOURCE_MAPS=true make build

# run jest tests
.PHONY: hosts
hosts:
	sudo ./bin/hosts.sh

.PHONY: check-todo
check-todo:
	npx code-notes --git-ignore .gitignore -x *.svg -x *.woff2 -x *.woff

.PHONY: clean-branches
clean-branches:
	git-sweep cleanup --origin=local --skip=master --master=dev --force

.PHONY: release
release:
	npm run release

.PHONY: find-unused
find-unused:
	npm run find-unused

.PHONY: check-updates
check-updates:
	npx npm-check-updates
