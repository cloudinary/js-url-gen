let fs = require ('fs');


function capitalize(str) {
  return str.toUpperCase()[0] + str.slice(1);
}


/**
 *
 * @param dir
 */
function createPackages(dir, currentDir = null) {
  let files = fs.readdirSync(dir);

  // Create actions
  fs.mkdirSync(`dist/actions`);
  files.forEach((name) => {
    const stat = fs.lstatSync(`${dir}/${name}`);

    if (stat.isDirectory()) {
      fs.mkdirSync(`dist/actions/${name}`);
      fs.writeFileSync(`dist/actions/${name}/package.json`, JSON.stringify({
        "types": `../../types/actions/${name}/${capitalize(name)}.d.ts`,
        "main": `../../esm/actions/${name}/${capitalize(name)}.js`,
      }, '\t'))
    }
  });

  // create umd
  fs.writeFileSync(`dist/bundles/umd/package.json`, JSON.stringify({
    "types": `../../types/index.d.ts`,
    "main": `./base.js`,
  }, null, '\t'))
}

let projectJson = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));
delete projectJson.scripts;
delete projectJson.dependencies;
delete projectJson.devDependencies;
projectJson.main = './esm/index.js';


fs.writeFileSync('./dist/package.json', JSON.stringify(projectJson, null,'\t'));


createPackages('src/actions');
