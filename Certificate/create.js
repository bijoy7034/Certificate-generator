function createPdf(){

    var date1 = document.querySelector("#validationDefault01").value;
    var date2 = document.querySelector("#validationDefault02").value;
    var namesArr = [];
    var eventname =[];

    Papa.parse(document.querySelector('#formFile').files[0],
    {
        download : true,
        header : true,
        skipEmpty: true,
        complete : function(results){
            for(i =0 ; i < results.data.length;i++){
                namesArr.push(results.data[i].FullName);
                eventname.push(results.data[i].Event);
            }
            console.log(namesArr[2]);
            for(j=0; j<namesArr.length;j++){
                generatePDF(String(namesArr[j]),date1 + " to " + date2,String(eventname[j]));
            }
            
        }
    });




    const generatePDF= async (name,deptname,eventname)=>{
        const {PDFDocument, rgb} = PDFLib;
        const exBytes = await fetch ("5.pdf").then((res) =>{
            return res.arrayBuffer();
        });
    
        const exFont = await fetch ("Roboto-Bold.ttf").then(res => {
            return res.arrayBuffer()
        });
        const PDFDoc = await PDFDocument.load(exBytes);
    
        // PDFDoc.registerFontkit(fontKit);
        // const myFont = await PDFDoc.embedFont(exFont);
    
        const pages = PDFDoc.getPages();
        const firstPg = pages[0];
        firstPg.drawText(name,{
            x: 246,
            y:342,
            size: 17,
        });
        firstPg.drawText(deptname,{
            x: 136,
            y:258,
            size:17,
        });
        firstPg.drawText(eventname,{
            x: 146,
            y:313,
            size:17,
        });
        
    
    
        const uri = await PDFDoc.saveAsBase64({dataUri : true});
        // document.querySelector("#myPdf").src = uri;
        saveAs(uri, "Certificate.pdf", {autoBom : true})
        
    };
    
    // generatePDF(name1);
}




















// const generatePDF= async (name)=>{
//     const {PDFDocument, rgb} = PDFLib;
//     const exBytes = await fetch ("saint' .pdf").then((res) =>{
//         return res.arrayBuffer();
//     });

//     const exFont = await fetch ("Roboto-Bold.ttf").then(res => {
//         return res.arrayBuffer()
//     });
//     const PDFDoc = await PDFDocument.load(exBytes);

//     // PDFDoc.registerFontkit(fontKit);
//     // const myFont = await PDFDoc.embedFont(exFont);

//     const pages = PDFDoc.getPages();
//     const firstPg = pages[0];
//     firstPg.drawText(name,{
//         x: 446,
//         y:790,
//         size: 30,
//     });


//     const uri = await PDFDoc.saveAsBase64({dataUri : true});
//     // document.querySelector("#myPdf").src = uri;
//     saveAs(uri, "Certificate.pdf", {autoBom : true})
// };


// generatePDF(document.querySelector("#validationDefault03").value);