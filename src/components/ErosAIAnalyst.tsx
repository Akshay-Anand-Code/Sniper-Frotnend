import React, { useState } from 'react';
import { analyzeImage } from '../services/openaiService';

const ErosAIAnalyst: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);
  const [analysis, setAnalysis] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
      setAnalysis('');
      setError('');
    }
  };

  const handleClear = () => {
    setImage(null);
    setAnalysis('');
    setError('');
  };

  const handleAnalyze = async () => {
    if (!image) return;
    setLoading(true);
    setError('');
    setAnalysis('');
    try {
      const result = await analyzeImage(image);
      setAnalysis(result);
    } catch (err) {
      setError('Failed to analyze image.');
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 w-full min-h-[60vh] py-12">
      {/* Upload Panel */}
      <div className="flex-1 bg-card border border-accent2 rounded-xl p-8 flex flex-col items-center justify-center min-h-[350px]">
        <div className="w-full h-full flex flex-col items-center justify-center border-2 border-dashed border-accent2 rounded-lg p-8 mb-6">
          {!image ? (
            <>
              <div className="text-5xl mb-4">☁️</div>
              <div className="text-lg font-semibold mb-2">Drop your image here</div>
              <div className="text-sm text-muted mb-2">Upload Chart images up to 5MB with max aspect ratio 2:1</div>
              <div className="text-xs text-muted mb-4">Or paste from clipboard (Ctrl+V)</div>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                id="ai-analyst-upload"
                onChange={handleImageChange}
              />
              <label htmlFor="ai-analyst-upload">
                <span className="border-2 border-accent2 text-heading-white bg-transparent px-5 py-2 rounded-lg font-bold cursor-pointer transition hover:border-accent3 hover:text-accent3">Choose File</span>
              </label>
            </>
          ) : (
            <>
              <img
                src={URL.createObjectURL(image)}
                alt="Uploaded chart"
                className="max-h-40 mb-4 rounded shadow"
              />
              <div className="text-sm text-muted mb-2">{image.name}</div>
            </>
          )}
        </div>
        <div className="flex w-full gap-4 justify-center">
          <button
            className="border-2 border-accent2 text-heading-white bg-transparent px-4 py-2 rounded font-bold transition hover:border-accent3 hover:text-accent3"
            onClick={handleClear}
            disabled={!image || loading}
          >
            &gt; CLEAR_DATA
          </button>
          <button
            className="border-2 border-accent2 text-heading-white bg-transparent px-4 py-2 rounded font-bold transition hover:border-accent3 hover:text-accent3"
            onClick={handleAnalyze}
            disabled={!image || loading}
          >
            {loading ? 'Analyzing...' : '> EXECUTE_ANALYSIS'}
          </button>
        </div>
      </div>
      {/* Analysis Output */}
      <div className="flex-1 bg-card border border-accent3 rounded-xl p-8 min-h-[350px]">
        <div className="text-accent3 font-mono text-lg mb-4">&gt; ANALYSIS_RESULTS</div>
        <div className="bg-background rounded-lg p-4 min-h-[200px] text-sm whitespace-pre-wrap text-muted">
          {error && <span className="text-red-500">{error}</span>}
          {!error && loading && <span>Analyzing image, please wait...</span>}
          {!error && !loading && !analysis && <span>&gt; Awaiting image input for analysis...</span>}
          {!error && !loading && analysis && <span>{analysis}</span>}
        </div>
      </div>
    </div>
  );
};

export default ErosAIAnalyst; 