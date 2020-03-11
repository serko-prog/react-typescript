export const loadFile: (filePath: string) => string = filePath => {
    let  result: string = "";
    const xmlhttp: XMLHttpRequest = new XMLHttpRequest();
    xmlhttp.open("GET", filePath, false);
    xmlhttp.send();
    if (xmlhttp.status === 200) {
      result = xmlhttp.responseText;
    }
    return result;
  }

