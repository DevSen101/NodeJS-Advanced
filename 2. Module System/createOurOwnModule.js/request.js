const REQUEST_TIMEOUT = 500;

function encrypt(data){
 return 'encrypted data';
}

/*export.*/function send(url, data){  //we can directly add export. which i want to export.
const encryptedData = encrypt(data);
console.log(`sending ${encryptedData} to ${url}`);

}
// export { REQUEST_TIMEOUT, send }  // if use import keyword
module.exports = {
 REQUEST_TIMEOUT,   //If request is not completed in 500ms, it will automatically get aborted.
 send
}