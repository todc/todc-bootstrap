DIST_DIR = dist
CSS_FILE = ${DIST_DIR}/todc-bootstrap.css
BOOTSTRAP_DIR = bootstrap
BOOTSTRAP_URL = https://github.com/twitter/bootstrap.git
BOOTSTRAP_VERSION = v2.3.0

build:
	@test -d $(BOOTSTRAP_DIR) || $(MAKE) checkout_bootstrap

	@mkdir -p ${DIST_DIR}
	lessc less/todc-bootstrap.less > ${CSS_FILE}

checkout_bootstrap:
	git clone ${BOOTSTRAP_URL} ${BOOTSTRAP_DIR}
	cd ${BOOTSTRAP_DIR} && git checkout tags/${BOOTSTRAP_VERSION}

#
# For @todc
#
docs:
	@rm -rf ./docs/
	@$(MAKE) build

	@cp less/variables.less ${BOOTSTRAP_DIR}/less/
	@$(MAKE) --directory=${BOOTSTRAP_DIR}

	@cp -r bootstrap/docs ./docs
	@cp ${CSS_FILE} docs/assets/css/
	@cp js/*.js ./docs/assets/js/
	@cp img/* ./docs/assets/img/

	@sed -i '' 's|</head>|<link href="assets/css/todc-bootstrap.css" rel="stylesheet"></head>|g' ./docs/*.html
	@sed -i '' 's|<script src="assets/js/application.js"></script>|<script src="assets/js/google-select-dropdown.js"></script><script src="assets/js/google-select.js"></script><script src="assets/js/application.js"></script>|g' ./docs/*.html
	@sed -i '' 's|window.prettyPrint \&\& prettyPrint()|window.prettyPrint \&\& prettyPrint(); $$("select:not([multiple])").gSelect() |' ./docs/assets/js/application.js

	@rm -rf docs/build
	@rm -rf docs/templates

.PHONY: build docs checkout_bootstrap
