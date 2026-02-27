const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src', 'components');

const replacements = [
  { regex: /text-gray-900/g, replacement: 'text-foreground' },
  { regex: /text-gray-[4-8]00/g, replacement: 'text-muted-foreground' },
  { regex: /text-black(?!\/)/g, replacement: 'text-foreground' },
  { regex: /bg-black(?!\/)/g, replacement: 'bg-foreground' },
  { regex: /bg-white(?!\/)/g, replacement: 'bg-card' },
  { regex: /text-white(?!\/)/g, replacement: 'text-background' },
  { regex: /border-black(?!\/)/g, replacement: 'border-foreground' },
  { regex: /border-gray-[2-3]00/g, replacement: 'border-border' },
];

function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      processDirectory(filePath);
    } else if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;

      replacements.forEach(({ regex, replacement }) => {
        if (regex.test(content)) {
          content = content.replace(regex, replacement);
          modified = true;
        }
      });

      if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated: ${filePath}`);
      }
    }
  });
}

processDirectory(directoryPath);
console.log('Finished refactoring colors.');
