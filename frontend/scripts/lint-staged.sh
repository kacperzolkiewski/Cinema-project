 #!/bin/bash

dir="$(dirname "$0")"

cd "$dir/.."

cmd="npx lint-staged"

echo ui $cmd && $cmd
