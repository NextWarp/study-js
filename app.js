const filename = process.env.npm_config_filename || '1';

try {
    require(`./src/${filename}.js`)
} catch (error) {
    console.error(error);
    console.log('Maybe there is no such file.');
}
