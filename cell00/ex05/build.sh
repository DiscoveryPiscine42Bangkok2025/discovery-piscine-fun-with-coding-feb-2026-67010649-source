cd ex05
touch build.sh
nano build.sh
if [ $# -eq 0 ]
then
    echo "No arguments supplied"
else
    for arg in "$@"
    do
        mkdir "ex$arg"
    done
fi
chmod +x build.sh
./build.sh
No arguments supplied
./build.sh 00
ls
ex00
