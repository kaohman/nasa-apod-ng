const fs = require('fs');
const dotenv = require('dotenv');

// Configure Angular `environment.ts` file path
const targetPath = './src/environments/environment.ts';

// Load node modules
const colors = require('colors');
dotenv.config();

// `environment.ts` file structure
const envConfigFile = `export const environment = {
   apiBaseUrl: '${process.env.API_BASE_URL}',
   apiUrl: '${process.env.API_URL}',
   appName: '${process.env.APP_NAME}',
   awsPubKey: '${process.env.AWSKEY}',
   nodeEnv: '${process.env.NODE_ENV}',
   production: '${process.env.PRODUCTION}',
   nasaApiKey: '${process.env.NASA_API_KEY}'
};
`;
console.log(colors.magenta('The file `environment.ts` will be written with the following content: \n'));
console.log(colors.grey(envConfigFile));
fs.writeFile(targetPath, envConfigFile, function (err) {
  if (err) {
    throw console.error(err);
  } else {
    console.log(colors.magenta(`Angular environment.ts file generated correctly at ${targetPath} \n`));
  }
});