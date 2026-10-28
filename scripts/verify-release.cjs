const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '../release-site');
for (const file of ['index.html', '404.html', '_headers', '_redirects', 'hizmet-bolgeleri/index.html']) {
  if (!fs.statSync(path.join(root, file)).isFile()) throw new Error(`Missing release file: ${file}`);
}
console.log('Kutal Drone v13 static release verified.');
