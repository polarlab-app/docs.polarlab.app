const fs = require('fs');
const path = require('path');

const directory = './app/polaris/';

function findPageJSXFiles(directory, fileList = []) {
    const files = fs.readdirSync(directory);

    files.forEach((file) => {
        const filePath = path.join(directory, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            findPageJSXFiles(filePath, fileList);
        } else if (file.endsWith('.jsx')) {
            fileList.push(filePath);
        }
    });

    return fileList;
}

// Function to update page.jsx file
function updatePageJSX(filePath) {
    let fileContent = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    if (!fileContent.includes("import ButtonContainer from '@/components/core/buttonContainer'")) {
        fileContent = `import ButtonContainer from '@/components/core/buttonContainer';\n${fileContent}`;
        modified = true;
    }

    if (fileContent.includes("<div className='lastbutton'>")) {
        fileContent = fileContent.replace(/<div\s+className\s*=\s*['"]lastbutton['"][^>]*>[\s\S]*?<\/div>/g, '');
        modified = true;
    }

    if (fileContent.includes("<div className='nextbutton'>")) {
        fileContent = fileContent.replace(/<div\s+className\s*=\s*['"]nextbutton['"][^>]*>[\s\S]*?<\/div>/g, '');

        modified = true;
    }

    if (fileContent.includes("<div className='buttoncontainer'>")) {
        fileContent = fileContent.replace(/<div\s+className\s*=\s*['"]buttoncontainer['"][^>]*>[\s\S]*?<\/div>/g, '');
        modified = true;
    }
    if (fileContent.includes("<div className='spacebox'></div>")) {
        fileContent = fileContent.replace(
            /<div\s+className\s*=\s*['"]spacebox['"][^>]*>[\s\S]*?<\/div>/g,
            '<ButtonContainer />'
        );
        modified = true;
    }

    fs.writeFileSync(filePath, fileContent, 'utf8');

    console.log(`File '${filePath}' updated successfully.`);
}

const pageJSXFiles = findPageJSXFiles(directory);

pageJSXFiles.forEach((filePath) => {
    updatePageJSX(filePath);
});
