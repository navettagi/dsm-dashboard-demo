'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Search, Brain, Clock, FileText, AlertTriangle, Activity, TrendingUp, Users } from 'lucide-react';

const AIQueryDashboard = () => {
  const [queryInput, setQueryInput] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const suggestedQueries = [
    {
      category: "Analisi Trend",
      queries: [
        "Mostra trend disturbi dell'umore negli ultimi 6 mesi",
        "Confronta tassi di ricaduta tra reparti",
        "Analizza efficacia trattamenti per fasce d'età"
      ]
    },
    {
      category: "Pattern Clinici",
      queries: [
        "Trova correlazioni tra disturbi e stagionalità",
        "Identifica pattern comuni nei casi resistenti",
        "Analizza comorbidità più frequenti"
      ]
    },
    {
      category: "Gestione Risorse",
      queries: [
        "Calcola occupazione media per reparto",
        "Prevedi necessità personale prossimo mese",
        "Analizza durata media ricoveri per patologia"
      ]
    }
  ];

  const recentQueries = [
    {
      query: "Analizza correlazione tra aderenza terapeutica e ricadute ultimo trimestre",
      timestamp: "2 ore fa",
      status: "completed"
    },
    {
      query: "Confronta efficacia trattamenti tra gruppi età 18-25 e 26-35",
      timestamp: "4 ore fa",
      status: "completed"
    },
    {
      query: "Identifica pazienti a rischio ricaduta prossimi 30 giorni",
      timestamp: "6 ore fa",
      status: "completed"
    }
  ];

  // Dati simulati per il risultato della query
  const queryResults = {
    chartData: [
      { month: 'Giu', aderenza: 85, ricadute: 12 },
      { month: 'Lug', aderenza: 82, ricadute: 15 },
      { month: 'Ago', aderenza: 78, ricadute: 18 },
      { month: 'Set', aderenza: 75, ricadute: 22 },
      { month: 'Ott', aderenza: 72, ricadute: 25 },
      { month: 'Nov', aderenza: 70, ricadute: 28 }
    ],
    insights: [
      {
        type: 'correlation',
        description: 'Forte correlazione negativa (-0.92) tra aderenza terapeutica e tasso di ricadute',
        confidence: 94
      },
      {
        type: 'pattern',
        description: 'Identificato pattern ciclico nelle ricadute con picchi ogni 3 mesi',
        confidence: 88
      },
      {
        type: 'prediction',
        description: 'Previsto aumento ricadute del 15% se trend aderenza continua',
        confidence: 85
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-gray-900">AI Query Assistant</h1>
            <Link 
              href="/" 
              className="px-4 py-1.5 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors flex items-center gap-2 text-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
              Menu
            </Link>
            <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
              Natural Language
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Brain className="h-4 w-4" />
            <span>AI Model: GPT-4 Enhanced Medical</span>
          </div>
        </div>

        {/* Query Input Section */}
        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5 text-blue-500" />
              Interroga i Dati in Linguaggio Naturale
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="relative">
                {/* Query Example */}
              <div className="p-4 bg-blue-50 rounded-lg mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Search className="h-4 w-4 text-blue-500" />
                  <span className="font-medium text-blue-700">
                    "Qual è l'andamento dei disturbi dell'umore negli ultimi 6 mesi, diviso per fasce d'età?"
                  </span>
                </div>
              </div>

              {/* AI Response */}
              <div className="p-4 bg-white border rounded-lg">
                <div className="flex items-start gap-2 mb-4">
                  <Brain className="h-5 w-5 text-purple-500 mt-1" />
                  <div className="space-y-3">
                    <p className="text-gray-700">
                      Dall'analisi degli ultimi 6 mesi emerge un pattern significativo nella distribuzione dei disturbi dell'umore:
                    </p>
                    
                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                      <li><span className="font-medium">Fascia 18-30 anni:</span> Incremento del 28% (245 → 314 casi)</li>
                      <li><span className="font-medium">Fascia 31-50 anni:</span> Aumento moderato del 15% (380 → 437 casi)</li>
                      <li><span className="font-medium">Over 50:</span> Relativa stabilità +5% (290 → 305 casi)</li>
                    </ul>

                    <div className="p-3 bg-purple-50 rounded mt-4">
                      <p className="text-sm text-purple-700">
                        <strong>Insight AI:</strong> Il marcato incremento nella fascia giovane (18-30) 
                        correla significativamente con fattori stagionali e stress accademico/lavorativo 
                        (confidenza: 92%)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Trend Chart */}
                <div className="h-64 mt-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={[
                      { month: 'Giu', '18-30': 245, '31-50': 380, 'Over 50': 290 },
                      { month: 'Lug', '18-30': 258, '31-50': 395, 'Over 50': 292 },
                      { month: 'Ago', '18-30': 275, '31-50': 410, 'Over 50': 295 },
                      { month: 'Set', '18-30': 292, '31-50': 422, 'Over 50': 298 },
                      { month: 'Ott', '18-30': 305, '31-50': 430, 'Over 50': 302 },
                      { month: 'Nov', '18-30': 314, '31-50': 437, 'Over 50': 305 }
                    ]}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="18-30" name="18-30 anni" stroke="#3b82f6" strokeWidth={2} />
                      <Line type="monotone" dataKey="31-50" name="31-50 anni" stroke="#8b5cf6" strokeWidth={2} />
                      <Line type="monotone" dataKey="Over 50" name="Over 50" stroke="#6366f1" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                {/* Actions Suggestions */}
                <div className="mt-4 p-3 bg-blue-50 rounded">
                  <p className="text-sm font-medium text-blue-700">Azioni Suggerite:</p>
                  <ul className="mt-2 space-y-1 text-sm text-blue-600">
                    <li>• Potenziare supporto psicologico per fascia 18-30</li>
                    <li>• Valutare programmi prevenzione stress in ambito universitario</li>
                    <li>• Monitoraggio ravvicinato casi giovani per prevenzione ricadute</li>
                  </ul>
                </div>
              </div>

                {/* Query Suggestions */}
                {showSuggestions && (
                  <div className="absolute z-10 mt-1 w-full bg-white rounded-lg shadow-lg border p-4">
                    <div className="space-y-4">
                      {suggestedQueries.map((category, idx) => (
                        <div key={idx}>
                          <h3 className="text-sm font-medium text-gray-700 mb-2">{category.category}</h3>
                          <div className="space-y-2">
                            {category.queries.map((query, qIdx) => (
                              <div
                                key={qIdx}
                                className="p-2 text-sm bg-gray-50 rounded hover:bg-blue-50 cursor-pointer"
                                onClick={() => setQueryInput(query)}
                              >
                                {query}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Query Results */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Chart Result */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-purple-500" />
                  Analisi Correlazione
                </div>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                  94% confidence
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={queryResults.chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="month" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip />
                    <Legend />
                    <Line 
                      yAxisId="left"
                      type="monotone" 
                      dataKey="aderenza" 
                      name="Aderenza (%)" 
                      stroke="#3b82f6" 
                      strokeWidth={2}
                    />
                    <Line 
                      yAxisId="right"
                      type="monotone" 
                      dataKey="ricadute" 
                      name="Ricadute" 
                      stroke="#ef4444" 
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* AI Insights */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-blue-500" />
                Insights AI
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {queryResults.insights.map((insight, index) => (
                  <div key={index} className={`p-4 rounded-lg ${
                    insight.type === 'correlation' ? 'bg-blue-50' :
                    insight.type === 'pattern' ? 'bg-purple-50' :
                    'bg-amber-50'
                  }`}>
                    <div className="flex items-start gap-3">
                      {insight.type === 'correlation' && <TrendingUp className="h-5 w-5 text-blue-500 mt-1" />}
                      {insight.type === 'pattern' && <Activity className="h-5 w-5 text-purple-500 mt-1" />}
                      {insight.type === 'prediction' && <AlertTriangle className="h-5 w-5 text-amber-500 mt-1" />}
                      <div>
                        <p className="text-sm text-gray-700">{insight.description}</p>
                        <div className="mt-2 text-xs text-gray-500">
                          Confidence: {insight.confidence}%
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Queries */}
        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-gray-500" />
              Query Recenti
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentQueries.map((query, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2">
                      <Search className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-700">{query.query}</span>
                    </div>
                    <span className="text-xs text-gray-500">{query.timestamp}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Query Tips */}
        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-green-500" />
              Suggerimenti per Query Efficaci
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-medium text-blue-700 mb-2">Analisi Temporali</h3>
                <p className="text-sm text-blue-600">
                  "Analizza trend ultimi 6 mesi..."
                  "Confronta periodi..."
                  "Mostra variazioni stagionali..."
                </p>
              </div>
              
              <div className="p-4 bg-purple-50 rounded-lg">
                <h3 className="font-medium text-purple-700 mb-2">Pattern Clinici</h3>
                <p className="text-sm text-purple-600">
                  "Trova correlazioni tra..."
                  "Identifica pazienti simili a..."
                  "Cerca pattern comuni in..."
                </p>
              </div>
              
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-medium text-green-700 mb-2">Previsioni</h3>
                <p className="text-sm text-green-600">
                  "Prevedi andamento..."
                  "Stima risorse necessarie..."
                  "Calcola probabilità di..."
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AIQueryDashboard;