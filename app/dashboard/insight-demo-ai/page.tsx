"use client";
"import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Brain, Activity, AlertTriangle, TrendingUp, Search, Calendar, Users, FileText } from 'lucide-react';

const InsightDashboard = () => {
  // Dati predittivi per rischio ricadute
  const riskPredictionData = [
    { date: 'Nov 04', actual: 12, predicted: 14 },
    { date: 'Nov 05', actual: null, predicted: 16 },
    { date: 'Nov 06', actual: null, predicted: 19 },
    { date: 'Nov 07', actual: null, predicted: 22 },
    { date: 'Nov 08', actual: null, predicted: 18 },
    { date: 'Nov 09', actual: null, predicted: 15 },
    { date: 'Nov 10', actual: null, predicted: 13 }
  ];

  // Pattern identificati dall'AI
  const aiPatterns = [
    {
      type: 'critical',
      title: 'Rischio Elevato Ricaduta',
      description: 'Identificati 8 pazienti con pattern comportamentali simili pre-ricaduta',
      confidence: 92,
      trend: 'increasing'
    },
    {
      type: 'warning',
      title: 'Aderenza Terapia in Calo',
      description: '15 pazienti mostrano segnali di discontinuità terapeutica',
      confidence: 87,
      trend: 'stable'
    },
    {
      type: 'info',
      title: 'Stagionalità Disturbi',
      description: 'Previsto aumento 28% disturbi dell\'umore prossimo mese',
      confidence: 85,
      trend: 'predicted'
    }
  ];

  // Previsioni occupazione reparti
  const occupancyPrediction = [
    { reparto: 'Trapani', attuale: 85, prevista: 92, criticità: 'alta' },
    { reparto: 'Marsala', attuale: 78, prevista: 85, criticità: 'media' },
    { reparto: 'Mazara', attuale: 72, prevista: 75, criticità: 'bassa' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header con badge AI */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-gray-900">Insight AI Hub</h1>
            <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
              Powered by AI
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Brain className="h-4 w-4" />
            <span>Modelli aggiornati: 04 Nov 2024, 09:30</span>
          </div>
        </div>

        {/* AI Insights Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {aiPatterns.map((pattern, index) => (
            <Card key={index} className={`bg-white border-l-4 ${
              pattern.type === 'critical' ? 'border-l-red-500' :
              pattern.type === 'warning' ? 'border-l-amber-500' :
              'border-l-blue-500'
            }`}>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex justify-between">
                  {pattern.title}
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    pattern.type === 'critical' ? 'bg-red-100 text-red-700' :
                    pattern.type === 'warning' ? 'bg-amber-100 text-amber-700' :
                    'bg-blue-100 text-blue-700'
                  }`}>
                    {pattern.confidence}% confidence
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{pattern.description}</p>
                <div className="mt-2 flex items-center gap-2">
                  <Activity className="h-4 w-4 text-gray-400" />
                  <span className="text-xs text-gray-500">
                    {pattern.trend === 'increasing' ? 'Trend in aumento' :
                     pattern.trend === 'stable' ? 'Trend stabile' :
                     'Previsione AI'}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Predictive Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-purple-500" />
                  Previsione Ricadute
                </div>
                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                  AI Prediction
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={riskPredictionData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="actual" 
                      name="Casi Effettivi"
                      stroke="#3b82f6" 
                      strokeWidth={2}
                      dot={{ r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="predicted" 
                      name="Previsione AI"
                      stroke="#8b5cf6" 
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      dot={{ r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-amber-500" />
                  Previsione Occupazione Reparti
                </div>
                <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full">
                  7 giorni forecast
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {occupancyPrediction.map((reparto, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{reparto.reparto}</span>
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          reparto.criticità === 'alta' ? 'bg-red-100 text-red-700' :
                          reparto.criticità === 'media' ? 'bg-amber-100 text-amber-700' :
                          'bg-green-100 text-green-700'
                        }`}>
                          {reparto.criticità.toUpperCase()}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex-1">
                        <div className="h-2 bg-gray-200 rounded">
                          <div 
                            className="h-2 rounded bg-blue-500" 
                            style={{ width: `${reparto.attuale}%` }}
                          />
                        </div>
                        <div className="mt-1 flex justify-between text-xs text-gray-500">
                          <span>Attuale: {reparto.attuale}%</span>
                          <span>Prevista: {reparto.prevista}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Early Warning System */}
        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-blue-500" />
                Sistema di Early Warning AI
              </div>
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                Real-time Analysis
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-red-50 rounded-lg">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-500 mt-1" />
                  <div>
                    <h3 className="font-medium text-red-700">Pattern Critico Identificato</h3>
                    <p className="text-sm text-red-600 mt-1">
                      3 pazienti mostrano indicatori di rischio suicidario crescente nelle ultime 48h.
                      Confidence: 94%
                    </p>
                    <div className="mt-2 text-xs text-red-500">
                      Azioni Suggerite: Valutazione urgente, intensificazione monitoraggio, revisione terapia
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-amber-50 rounded-lg">
                <div className="flex items-start gap-3">
                  <Activity className="h-5 w-5 text-amber-500 mt-1" />
                  <div>
                    <h3 className="font-medium text-amber-700">Trend Emergente</h3>
                    <p className="text-sm text-amber-600 mt-1">
                      Cluster di 7 pazienti con sintomi simili suggerisce possibile correlazione ambientale.
                      Confidence: 87%
                    </p>
                    <div className="mt-2 text-xs text-amber-500">
                      Azioni Suggerite: Analisi fattori ambientali, revisione anamnesi recenti
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 text-blue-500 mt-1" />
                  <div>
                    <h3 className="font-medium text-blue-700">Previsione Risorse</h3>
                    <p className="text-sm text-blue-600 mt-1">
                      Previsto picco accessi (+45%) nel weekend. Necessario incremento personale.
                      Confidence: 91%
                    </p>
                    <div className="mt-2 text-xs text-blue-500">
                      Azioni Suggerite: Riorganizzazione turni, attivazione reperibilità extra
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InsightDashboard;
