'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Search, Brain, Clock, FileText, AlertTriangle, Activity, TrendingUp, Users } from 'lucide-react';

// Type definitions
interface SuggestedQueryCategory {
  category: string;
  queries: string[];
}

interface RecentQuery {
  query: string;
  timestamp: string;
  status: string;
}

interface QueryInsight {
  type: 'correlation' | 'pattern' | 'prediction';
  description: string;
  confidence: number;
}

interface QueryResults {
  chartData: Array<{
    month: string;
    aderenza: number;
    ricadute: number;
  }>;
  insights: QueryInsight[];
}

const AIQueryDashboard = () => {
  const [queryInput, setQueryInput] = useState<string>('');
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);

  const suggestedQueries: SuggestedQueryCategory[] = [
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

  const recentQueries: RecentQuery[] = [
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
  const queryResults: QueryResults = {
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

  // Handler function for setting query input
  const handleSetQueryInput = (query: string) => {
    setQueryInput(query);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-gray-900">AI Query Assistant</h1>
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
                {/* Rest of the existing JSX remains the same until the Query Suggestions section */}
                
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
                                onClick={() => handleSetQueryInput(query)}
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
                
                {/* Rest of the component remains the same */}
                
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Rest of the component code remains unchanged */}
        
      </div>
    </div>
  );
};

export default AIQueryDashboard;