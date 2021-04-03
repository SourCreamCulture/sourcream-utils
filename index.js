process.env.YTDL_NO_UPDATE = true

module.exports = {
    Extractors: require('./src/Extractors/Extractor'),
    Player: require('./src/Player'),
    Queue: require('./src/Queue'),
    Random: require('./src/Random'),
    Track: require('./src/Track'),
    Util: require('./src/Util'),
    version: require('./package.json').version
}