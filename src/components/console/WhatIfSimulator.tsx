import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function WhatIfSimulator() {
  const [datasetSize, setDatasetSize] = useState(100);
  const [modelComplexity, setModelComplexity] = useState(50);
  const [noise, setNoise] = useState(10);

  // Simulate performance based on parameters
  const accuracy = Math.min(
    95,
    Math.max(
      50,
      70 + (datasetSize / 100) * 20 - (noise / 100) * 15 + (modelComplexity / 100) * 5
    )
  );

  const latency = Math.max(10, 50 + (modelComplexity / 100) * 150 - (datasetSize / 100) * 20);

  const cost = Math.max(1, (datasetSize / 100) * 50 + (modelComplexity / 100) * 100);

  // Generate performance curve
  const performanceData = Array.from({ length: 10 }, (_, i) => {
    const x = (i + 1) * 10;
    return {
      size: x,
      accuracy: Math.min(95, 50 + (x / 100) * 30 - (noise / 100) * 10),
    };
  });

  const getInsight = () => {
    if (datasetSize < 30) {
      return "⚠️ Underfitting zone. Model lacks data to learn patterns effectively.";
    } else if (datasetSize > 80 && modelComplexity > 80) {
      return "⚠️ Overfitting risk. High complexity + large data = memorization.";
    } else if (noise > 50) {
      return "⚠️ High noise degrades performance. Consider data cleaning.";
    } else if (accuracy > 85) {
      return "✅ Sweet spot! Good balance of data, complexity, and noise.";
    }
    return "📊 Experiment with parameters to find optimal configuration.";
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-3">
          <span className="gradient-text">What-If Simulator</span>
        </h2>
        <p className="text-dark-300">
          Explore how different parameters affect model performance. Adjust sliders to see real-time impact.
        </p>
      </div>

      {/* Controls */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="card">
          <label className="block text-sm font-mono text-dark-300 mb-2">
            Dataset Size
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={datasetSize}
            onChange={(e) => setDatasetSize(Number(e.target.value))}
            className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-primary-500"
          />
          <div className="flex justify-between text-xs text-dark-400 mt-2">
            <span>Small</span>
            <span className="text-primary-400 font-mono font-bold">{datasetSize}%</span>
            <span>Large</span>
          </div>
        </div>

        <div className="card">
          <label className="block text-sm font-mono text-dark-300 mb-2">
            Model Complexity
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={modelComplexity}
            onChange={(e) => setModelComplexity(Number(e.target.value))}
            className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-accent-500"
          />
          <div className="flex justify-between text-xs text-dark-400 mt-2">
            <span>Simple</span>
            <span className="text-accent-400 font-mono font-bold">{modelComplexity}%</span>
            <span>Complex</span>
          </div>
        </div>

        <div className="card">
          <label className="block text-sm font-mono text-dark-300 mb-2">
            Data Noise
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={noise}
            onChange={(e) => setNoise(Number(e.target.value))}
            className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-violet-500"
          />
          <div className="flex justify-between text-xs text-dark-400 mt-2">
            <span>Clean</span>
            <span className="text-violet-400 font-mono font-bold">{noise}%</span>
            <span>Noisy</span>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="card border-l-4 border-success-500">
          <div className="text-sm text-dark-400 mb-1">Accuracy</div>
          <div className="text-3xl font-mono font-bold text-success-400">{accuracy.toFixed(1)}%</div>
        </div>

        <div className="card border-l-4 border-primary-500">
          <div className="text-sm text-dark-400 mb-1">Latency</div>
          <div className="text-3xl font-mono font-bold text-primary-400">{latency.toFixed(0)}ms</div>
        </div>

        <div className="card border-l-4 border-accent-500">
          <div className="text-sm text-dark-400 mb-1">Cost</div>
          <div className="text-3xl font-mono font-bold text-accent-400">${cost.toFixed(0)}</div>
        </div>
      </div>

      {/* Insight */}
      <div className="card bg-violet-500/10 border-violet-500/30 mb-8">
        <div className="text-xs text-violet-400 font-mono mb-2">INSIGHT</div>
        <p className="text-dark-200">{getInsight()}</p>
      </div>

      {/* Performance Curve */}
      <div className="card">
        <h3 className="text-lg font-bold mb-4">Performance vs. Dataset Size</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e2837" />
            <XAxis
              dataKey="size"
              stroke="#8b95a8"
              style={{ fontSize: '12px' }}
              label={{ value: 'Dataset Size (%)', position: 'insideBottom', offset: -5, fill: '#8b95a8' }}
            />
            <YAxis
              stroke="#8b95a8"
              style={{ fontSize: '12px' }}
              label={{ value: 'Accuracy (%)', angle: -90, position: 'insideLeft', fill: '#8b95a8' }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#151a24',
                border: '1px solid #1e2837',
                borderRadius: '8px',
                fontSize: '12px',
              }}
            />
            <Line
              type="monotone"
              dataKey="accuracy"
              stroke="#10b981"
              strokeWidth={2}
              dot={{ fill: '#10b981', r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
