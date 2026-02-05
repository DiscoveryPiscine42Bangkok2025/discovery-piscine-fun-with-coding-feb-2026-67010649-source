cd ex03
mkdir count_files.sh
nano count_files.sh
find . -maxdepth 1 \( -type f -o -type d \) | wc -l 
chmod +x count_files.sh
./count_files.sh | cat -e
