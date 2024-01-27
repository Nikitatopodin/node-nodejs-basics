const parseEnv = () => {
  const obj = process.env;
  for (let propName in obj) {
    if (propName.startsWith('RSS_'))
      console.log(`${propName}=${obj[propName]}`);
  }
};

parseEnv();