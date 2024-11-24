import React, { useState } from 'react';
import '../assets/css/LungCancerDetection.css';

const API_URL = process.env.API_URL;
const API_KEY = process.env.API_KEY;

const LungCancerDetection = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState('');
  const [isDragActive, setIsDragActive] = useState(false);

  const handleFile = (selectedFile) => {
    if (selectedFile) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onload = (e) => setPreview(e.target.result);
      reader.readAsDataURL(selectedFile);
      setError('');
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragActive(false);
    const droppedFile = e.dataTransfer.files[0];
    handleFile(droppedFile);
  };

  const clearImage = () => {
    setFile(null);
    setPreview('');
    setResults(null);
    setError('');
  };

  const analyzeImage = async () => {
    if (!file) return;

    setLoading(true);
    setError('');
    setResults(null);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch(`${API_URL}/api/v1/predict`, {
        method: 'POST',
        headers: {
          'X-API-Key': API_KEY
        },
        body: formData
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || 'An error occurred during analysis');
      }

      setResults(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-8">
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h2 className="card-title h4 mb-4">Upload CT Scan Image <a href="/"> - Back to Home</a></h2>
              
              <div className="mb-4">
                <div className="upload-area" onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}>
                  {preview ? (
                    <img src={preview} alt="Preview" className="preview-image" />
                  ) : (
                    <label htmlFor="ct-scan" className={`drop-zone ${isDragActive ? 'drop-zone-active' : ''}`}>
                      <div className="text-center">
                        <svg className="upload-icon mb-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                        </svg>
                        <p className="mb-2"><strong>Click to upload</strong> or drag and drop</p>
                        <p className="text-muted small">CT Scan image (PNG or JPG)</p>
                      </div>
                      <input
                        id="ct-scan"
                        type="file"
                        className="d-none"
                        accept="image/*,.dcm"
                        onChange={(e) => handleFile(e.target.files[0])}
                      />
                    </label>
                  )}
                </div>

                {preview && (
                  <button onClick={clearImage} className="btn btn-link text-danger btn-sm p-0">
                    Clear Image
                  </button>
                )}

                <div className="text-end mt-4">
                  <button
                    onClick={analyzeImage}
                    disabled={!file || loading}
                    className="btn btn-primary"
                  >
                    Analyze Image
                  </button>
                </div>
              </div>
            </div>
          </div>

          {(loading || results || error) && (
            <div className="card shadow-sm">
              <div className="card-body">
                {loading && (
                  <div className="text-center py-4">
                    <div className="spinner-border text-primary me-2" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    <span className="text-muted">Analyzing image...</span>
                  </div>
                )}

                {results && (
                  <div>
                    <h3 className="h5 mb-4">Analysis Results</h3>
                    <div className="bg-light rounded p-4 mb-4">
                      <div className="row">
                        <div className="col-6">
                          <p className="text-muted mb-1">Prediction</p>
                          <p className="h6">{results.prediction}</p>
                        </div>
                        <div className="col-6">
                          <p className="text-muted mb-1">Confidence</p>
                          <p className="h6">{(results.confidence * 100).toFixed(2)}%</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="h6 text-muted mb-2">Additional Details</h4>
                      <div className="bg-light rounded p-4">
                        <pre className="mb-0 details-pre">
                          {JSON.stringify(results.details || {}, null, 2)}
                        </pre>
                      </div>
                    </div>
                  </div>
                )}

                {error && (
                  <div className="alert alert-danger d-flex align-items-center" role="alert">
                    <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:">
                      <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                    </svg>
                    <div>
                      {error}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LungCancerDetection;
