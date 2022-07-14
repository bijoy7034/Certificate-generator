function createPdf(){
    var namesArr = [];
    var deptname =[];

    Papa.parse(document.querySelector('#formFile').files[0],
    {
        download : true,
        header : true,
        skipEmpty: true,
        complete : function(results){
            console.log(results.data[1].Deptname);
            for(i =0 ; i < results.data.length;i++){
                namesArr.push(results.data[i].FullName);
                deptname.push(results.data[i].Deptname);
            }
            console.log(namesArr[2]);
            for(j=0; j<namesArr.length;j++){
                generatePDF(String(namesArr[j]),String(deptname[j]));
            }
            
        }
    });




    const generatePDF= async (name,deptname)=>{
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
            y:398,
            size: 15,
        });
        firstPg.drawText(deptname,{
            x: 166,
            y:378,
            size:15,
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