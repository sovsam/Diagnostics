var Excel = require('exceljs')
var workbook = new Excel.Workbook();
var worksheet;
var row;


workbook.csv.readFile('C:\\Workspaces\\DiagnosticsTest\\testData\\loginTestData.csv')
     .then(function () {
      worksheet=workbook.getWorksheet(1);
      row = worksheet.getRow(1)
      let option = row.getCell(val).value;
      return option
     })