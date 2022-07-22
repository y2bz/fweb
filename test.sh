for file in static/wallpaper/origin/*
do cwebp -q 50 -resize 1000 0 "$file" -o "${${file//origin/webp}%.*}.webp"
done
