const { promisify } = require('util');
const { glob } = require('glob');
const pGlob = promisify(glob);

module.exports = async (Client) => {
  setTimeout(() => console.log(`\n┏━━━━━━━━━━━━━━━━━━━━━━━━━━┫`.white, `Commands`.green.bold, `┣━━━━━━━━━━━━━━━━━━━━━━━━`.white), 2500);

  (await pGlob(`${process.cwd()}/commands/*/*.js`)).map(async (cmdFile) => {
    const cmd = require(cmdFile);

    if(
      
      !cmd.name ||
      !cmd.description ||
      !cmd.category ||
      cmd.ownerOnly == undefined ||
      !cmd.permissions ||
      !cmd.usage ||
      !cmd.examples
      
      )

      return setTimeout(() => console.log(`┃`.white, `[INFORMATIONS]`.red, `┃`.white, `COMMANDS ERRORS`.red, `┃`.white, `${cmdFile}:`.yellow, `${cmd.category} :`.magenta, `Failed`.red.italic.bold), 2000);

    Client.commands.set(cmd.name, cmd);
    setTimeout(() =>
      console.log(`┃`.white, `[INFORMATIONS]`.cyan, `┃`.white, `COMMANDS LOADED`.cyan, `┃`.white, `${cmd.name}`.blue, `|`.white, `${cmd.category}:`.magenta, `Sucess`.green.italic.bold), 2000);
  });
  setTimeout(() => console.log(`┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`.white), 2000);
};


