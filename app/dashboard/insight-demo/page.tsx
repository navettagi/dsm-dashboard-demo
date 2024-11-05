"use client";
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, AlertTriangle, Activity, Brain, Calendar } from 'lucide-react';

const InsightDashboard = () => {
  // Dati per previsioni occupazione
  const occupancyPrediction = [
    { day: 'Lun', actual: 85, predicted: 88 },
    { day: 'Mar', actual: 87, predicted: 90 },
    { day: 'Mer', actual: 92, predicted: 93 },
    { day: 'Gio', actual: null, predicted: 95 },
    { day: 'Ven', actual: null, predicted: 91 },
    { day: 'Sab', actual: null, predicted: 88 },
    { day: 'Dom', actual: null, predicted: 86 }
  ];

  // Dati per pattern ricadute
  const relapsePatterns = [
    { month: 'Gen', tasso: 12, previsto: 14 },
    { month: 'Feb', tasso: 15, previsto: 15 },
    { month: 'Mar', tasso: 18, previsto: 17 },
    { month: 'Apr', tasso: 16, previsto: 16 },
    { month: 'Mag', predicted: 19 },
    { month: 'Giu', predicted: 21 }
  ];

  // Dati per outcome trattamenti
  const treatmentOutcomes = [
    { name: 'Antidepressivi', success: 76, partial: 15, resistant: 9 },
    { name: 'Antipsicotici', success: 68, partial: 22, resistant: 10 },
    { name: 'Stabilizzatori', success: 72, partial: 18, resistant: 10 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">DSM Insight Hub</h1>
            <p className="text-gray-500">Analytics Avanzate & Predittive</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Calendar className="h-4 w-4" />
            <span>Proiezioni aggiornate: 04 Nov 2024, 09:30</span>
          </div>
        </div>

        {/* Predictive Alerts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-white">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                Rischio Ricadute
              </CardTitle>
              <AlertTriangle className="h-4 w-4 text-amber-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-amber-600">15%</div>
              <p className="text-xs text-amber-500">+2.3% trend settimanale</p>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                Occupazione Prevista
              </CardTitle>
              <Activity className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">95%</div>
              <p className="text-xs text-blue-500">Picco previsto giovedì</p>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                Efficacia Trattamenti
              </CardTitle>
              <Brain className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">72%</div>
              <p className="text-xs text-green-500">Media ultimi 30 giorni</p>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                Pattern Identificati
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-purple-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-gray-500">Nuovi pattern questa settimana</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Occupancy Prediction */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-blue-500" />
                Previsione Occupazione 7 Giorni
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={occupancyPrediction}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="day" />
                    <YAxis domain={[60, 100]} />
                    <Tooltip />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="actual" 
                      name="Occupazione Reale"
                      stroke="#3b82f6" 
                      strokeWidth={2}
                      dot={{ r: 6 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="predicted" 
                      name="Previsione"
                      stroke="#8b5cf6" 
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      dot={{ r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Treatment Outcomes */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-green-500" />
                Efficacia Trattamenti
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={treatmentOutcomes} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis type="number" domain={[0, 100]} />
                    <YAxis dataKey="name" type="category" width={100} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="success" name="Successo" stackId="a" fill="#22c55e" />
                    <Bar dataKey="partial" name="Parziale" stackId="a" fill="#eab308" />
                    <Bar dataKey="resistant" name="Resistente" stackId="a" fill="#ef4444" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Pattern Recognition */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <Card className="bg-white lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-purple-500" />
                Pattern Ricadute
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={relapsePatterns}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="month" />
                    <YAxis domain={[0, 25]} />
                    <Tooltip />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="tasso" 
                      name="Tasso Reale"
                      stroke="#3b82f6" 
                      strokeWidth={2}
                      dot={{ r: 4 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="previsto" 
                      name="Tasso Previsto"
                      stroke="#8b5cf6" 
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      dot={{ r: 4 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="predicted" 
                      name="Previsione Futura"
                      stroke="#6366f1" 
                      strokeWidth={2}
                      strokeDasharray="3 3"
                      dot={{ r: 3 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Predictive Alerts */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-red-500" />
                Alert Predittivi
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 bg-red-50 rounded-lg">
                  <div className="font-medium text-red-700">Rischio Ricaduta Alto</div>
                  <div className="text-sm text-red-600">
                    5 pazienti mostrano pattern critici
                  </div>
                </div>
                
                <div className="p-3 bg-amber-50 rounded-lg">
                  <div className="font-medium text-amber-700">Picco Occupazione</div>
                  <div className="text-sm text-amber-600">
                    Previsto sovraccarico giovedì (95%)
                  </div>
                </div>
                
                <div className="p-3 bg-blue-50 rounded-lg">
                  <div className="font-medium text-blue-700">Trend Emergente</div>
                  <div className="text-sm text-blue-600">
                    Pattern stagionale disturbi umore
                  </div>
                </div>

                <div className="mt-4 p-2 border-t border-gray-200">
                  <div className="text-xs text-gray-500">
                    Machine Learning Model v2.1
                    <br />
                    Accuratezza previsioni: 89%
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default InsightDashboard;
