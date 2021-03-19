 #!/bin/bash

dir="$(dirname "$0")"

cd "$dir/.."

cmd="npx lint-staged"

echo backend $cmd && $cmd
