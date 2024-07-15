import React from 'react';
import { Inertia } from '@inertiajs/inertia';

const DownloadButton = () => {
  const handleDownload = () => {
    // Mengarahkan ke route download data di backend
    Inertia.get('/download-data', {}, {
      preserveScroll: true,
      preserveState: true,
      onSuccess: (page) => {
        // Mengambil URL dari response
        const downloadUrl = page.props.url;
        // Membuat link download dan meng-kliknya secara programatik
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = 'data.csv';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    });
  };

  return (
    <button onClick={handleDownload} >
      Download Data
    </button>
  );
};

export default DownloadButton;
