import { Injectable } from '@angular/core';
import { abort } from 'process';
// import * as AWS from 'aws-sdk/global';
// import * as S3 from 'aws-sdk/clients/s3';
const { BlobServiceClient } = require("@azure/storage-blob");

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor() { }


image : String = null;
  async uploadFile(file) {

    const accountName = "azureappdata";
    const sasString = "?sv=2020-08-04&ss=bfqt&srt=sco&sp=rwdlacupitfx&se=2022-10-01T02:07:54Z&st=2022-04-10T18:07:54Z&spr=https&sig=STN%2FN9UkdtQuldDFyAzhlg1m5w12GrIB5DkeTuhq7Gw%3D";
    const containerName = "file" ;
    
    const blobServiceClient = new BlobServiceClient(`https://${accountName}.blob.core.windows.net${sasString}`);
    console.log(file)
    const account = "azureappdata"
        
    const containerClient = blobServiceClient.getContainerClient(containerName);
    console.log(containerClient)
    const blockBlobClient = containerClient.getBlockBlobClient("bookdeck/"+file.name);
    blockBlobClient.uploadData(file);




    
    // const contentType = file.type;
    // const bucket = new S3(
    //       {
    //           accessKeyId: 'AWS_ACCESS_KEY',
    //           secretAccessKey: 'AWS_SECRET_KEY',
    //           region: 'us-east-1'
    //       }
    //   );
    //   const params = {
    //       Bucket: 'esdbookshelf',
    //       Key: file.name,
    //       Body: file,
    //       ACL: 'public-read',
    //       ContentType: contentType
    //   };
     
    //   bucket.upload(params, (err, data) => {
    //       if (err) {
    //           console.log('There was an error uploading your file: ', err);
    //           return false;
    //       }
    //       console.log('Successfully uploaded file.', data.Location);
    //       // this.image =  bucket.getSignedUrl('getObject', {Key: params.Key});
    //       console.log('returning addres', data.Location);
    //       return data.Location;
    //   });

    
//for upload progress   
/*bucket.upload(params).on('httpUploadProgress', function (evt) {
          console.log(evt.loaded + ' of ' + evt.total + ' Bytes');
      }).send(function (err, data) {
          if (err) {
              console.log('There was an error uploading your file: ', err);
              return false;
          }
          console.log('Successfully uploaded file.', data);
          return true;
      });*/
}




}
