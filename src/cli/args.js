const parseArgs = () => {
  let result = '';
  const argvArr = process.argv.slice(2);

  if (argvArr.length > 0) {
    argvArr.forEach((arg, index) => {
      if (arg.startsWith('--')) {
        result += (`${arg.substring(2)} is ${argvArr[index + 1]}, `);
      }
    })
  }
  console.log(result.slice(0, result.length - 2));
};

parseArgs();