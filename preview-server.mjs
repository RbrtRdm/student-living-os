import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
const port=Number(process.env.PORT||3002);
const server=http.createServer(async(_req,res)=>{try{const html=await readFile(resolve('preview.html'));res.writeHead(200,{'content-type':'text/html; charset=utf-8','cache-control':'no-store'});res.end(html);}catch{res.writeHead(500);res.end('No se pudo cargar la vista previa.');}});
server.listen(port,'0.0.0.0',()=>console.log(`STUDENT LIVING OS: http://localhost:${port}`));
