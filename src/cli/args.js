const parseArgs = () => {
    let result = '';
    const argvArr = process.argv;
    argvArr.forEach((arg, index) => {
        if (index > 1 && arg.startsWith('--')) {
            result += (`${arg.substring(2)} is ${argvArr[index + 1]}, `);
        }
    })
    console.log(result.slice(0, result.length - 2));
};

parseArgs();