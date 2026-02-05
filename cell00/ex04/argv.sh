cd ex04
mkdir argv.sh
nano argv.sh
if [ $# -eq 0 ]
then
    echo "No arguments supplied"
else
    for arg in "$@"
    do
        echo "$arg"
    done
fi
chmod +x argv.sh
./argv.sh
No arguments supplied
./argv.sh 2 40 42
2
40
42
