set -e

# TEST
npm test

# BUILD
TARBALL=`npm pack`
echo "Builded $TARBALL"

# PUBLICATION
npm publish $TARBALL --access public