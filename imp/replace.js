const fs = require("fs");

const replaceWords = (directorio, regExp, value) => {
  const folders = fs.readdirSync(directorio);

  folders.forEach((file) => {
    const path = directorio + "/" + file;
    const stats = fs.statSync(path);

    if (stats.isDirectory()) {
      replaceWords(path, regExp, value);
    } else if (stats.isFile()) {
      const content = fs.readFileSync(path, "utf8");
      const newContent = content.replaceAll(regExp, value);
      fs.writeFileSync(path, newContent, "utf8");
    }
  });
};

const ROOT_PATH = "../imp-react-ts/src";

const words = [
  ['t.placeholders', 't.home.placeholders'],
  ['t.rules', 't.home.rules'],
  ['t.labels', 't.home.labels'],
  // ["`${t.constants.CAMPOOBLIGATORIO}`", "t.rules.required"],
  // ["t.constants.CAMPOOBLIGATORIO", "t.rules.required"],
  // [
  //   'import Constants from "~utils/constants";',
  //   'import t from "~hooks/initialState";',
  // ],
  // [
  //   'import Constants from "~utils/constants";',
  //   'import { usePrismic } from "~hooks/usePrismic";',
  // ],
  // ["Constants.", "t.constants."],
  // [".CAMPOINVALIDO(", '.CAMPOINVALIDO.replace("${0}",'],
  // ['id: {', 'uuid: {'],
  // ['/:id', '/:uuid'],
  // ['{id}', '{uuid}'],
  // ['(id)', '(uuid)']
];

words.forEach(([regExp, value]) => {
  replaceWords(ROOT_PATH, regExp, value);
});
