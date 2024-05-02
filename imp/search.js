const fs = require("fs");
const { text } = require("stream/consumers");

const searcheWord = (directorio, word) => {
  const folders = fs.readdirSync(directorio);

  folders.forEach((file) => {
    const path = `${directorio}/${file}`;
    const stats = fs.statSync(path);

    if (stats.isDirectory()) {
      searcheWord(path, word);
    }
    if (stats.isFile()) {
      const content = fs.readFileSync(path, "utf8");
      if (content.includes(word)) {
        console.log(path);
      }
    }
  });
};

const ROOT_PATH = "../imp-react-ts/src";
searcheWord(ROOT_PATH, ".TELEFONOFIJO");

/*

${t.

    setObject("username", values.username);
    setObject("token", "token");
    navigate(navigationPath);
    return;

.then(({ data }) => (data))
.catch((error) => console.error(error));

Rules Sonar
typescript:S6747

npm install --registry https://registry.npmjs.org


          rules={[
            { required: true, message: t.rules.required },
            { pattern: regExp.cellPhone, message: t.rules.required },
          ]}

*/

const xml = `
<?xml version="1.0" encoding="UTF-8"?>
<java version="11.0.3" class="java.beans.XMLDecoder">
 <object class="co.com.nutresa.utilidades.agrupacionobjeto.AgrupacionObjeto">
  <void property="condicionObjeto">
   <string>{$referencia}=&quot;1038976&quot;</string>
  </void>
  <void property="descripcion">
   <string>Excluido Chocolisto</string>
  </void>
  <void property="objetoList">
   <object class="java.util.ArrayList"/>
  </void>
  <void property="uuid">
   <string>8ECEE9F974F92140F80A1803343F233F</string>
  </void>
 </object>
</java>
`

// console.log(/>{\$referencia}=&quot;(\d+)&quot;</g.exec(xml))