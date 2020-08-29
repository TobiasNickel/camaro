
const fastXmlParser= require('fast-xml-parser');

module.exports = (data)=>{
    return fastXmlParser.parse(data);
}
