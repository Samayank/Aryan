const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\Samayank\\Videos\\Aryan Sinks Website';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html') || f.endsWith('.js') || f.endsWith('.css'));

const baseURL = 'https://raw.githubusercontent.com/Samayank/Aryan/main/';

let updatedCount = 0;

files.forEach(file => {
    let original = fs.readFileSync(path.join(dir, file), 'utf8');
    let content = original;

    // Fix already manually typed blob URLs to raw URLs so they render properly
    // GitHub's blob/main/ URLs return HTML wrapper pages, not raw image bytes.
    content = content.replace(/https:\/\/github\.com\/Samayank\/Aryan\/blob\/main\//g, baseURL);

    // Replace all flat image file names in single quotes
    content = content.replace(/'(?!http)([^'/]+\.(?:png|jpg|jpeg|svg|ico))'/gi, `'${baseURL}$1'`);
    
    // Replace all flat image file names in double quotes
    content = content.replace(/"(?!http)([^"/]+\.(?:png|jpg|jpeg|svg|ico))"/gi, `"${baseURL}$1"`);

    if (content !== original) {
        fs.writeFileSync(path.join(dir, file), content, 'utf8');
        updatedCount++;
        console.log(`Updated ${file}`);
    }
});

console.log(`Total files updated: ${updatedCount}`);
