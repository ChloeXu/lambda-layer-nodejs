cd build
mkdir nodejs
cp -R ../node_modules nodejs/
zip -r ../lambda_layer_pkg.zip .
rm -r -f nodejs
