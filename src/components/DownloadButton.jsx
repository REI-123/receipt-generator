import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const DownloadButton = () => {
  const downloadPDF = async () => {
    const receipt = document.getElementById("receipt");

    if (!receipt) return;

    const canvas = await html2canvas(receipt, {
      scale: 2,
      useCORS: true,
      scrollY: -window.scrollY,
      windowWidth: document.documentElement.scrollWidth,
      windowHeight: receipt.scrollHeight,
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const margin = 10;
    const maxWidth = pdfWidth - margin * 2;
    const maxHeight = pdfHeight - margin * 2;

    const ratio = Math.min(
      maxWidth / canvas.width,
      maxHeight / canvas.height
    );

    const imgWidth = canvas.width * ratio;
    const imgHeight = canvas.height * ratio;

    const x = (pdfWidth - imgWidth) / 2;
    const y = margin;

    pdf.addImage(imgData, "PNG", x, y, imgWidth, imgHeight);

    pdf.save("receipt.pdf");
  };

  const printReceipt = () => {
    window.print();
  };

  return (
    <div className="d-flex gap-3 mt-4">
      <button
        className="btn btn-success"
        onClick={downloadPDF}
      >
        Download PDF
      </button>

      <button
        className="btn btn-primary"
        onClick={printReceipt}
      >
        Print Receipt
      </button>
    </div>
  );
};

export default DownloadButton;