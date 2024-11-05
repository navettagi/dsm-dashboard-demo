"use client";
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Users, Calendar, AlertTriangle, Activity, FileText, TrendingUp } from 'lucide-react';

const OpsDashboard = () => {
  // Dati occupazione posti letto
  const bedOccupancyData = [
    { time: '08:00', occupati: 45, prenotati: 48, capacità: 52 },
    { time: '10:00', occupati: 47, prenotati: 49, capacità: 52 },
    { time: '12:00', occupati: 48, prenotati: 50, capacità: 52 },
    { time: '14:00', occupati: 50, prenotati: 51, capacità: 52 },
    { time: '16:00', occupati: 49, prenotati: 51, capacità: 52 },
    { time: '18:00', occupati: 48, prenotati: 50, capacità: 52 }
  ];

  // Staff per turno
  const staffSchedule = [
    { ruolo: 'Medici', mattina: 8, pomeriggio: 6, notte: 3, required: 15 },
    { ruolo: 'Infermieri', mattina: 12, pomeriggio: 10, notte: 6, required: 25 },
    { ruolo: 'OSS', mattina: 6, pomeriggio: 5, notte: 3, required: 12 }
  ];

  // Risorse e farmaci
  const resourceStatus = [
    { nome: "Antipsicotici", disponibili: 85, scorta: 100, status: "normal" },
    { nome: "Antidepressivi", disponibili: 42, scorta: 75, status: "warning" },
    { nome: "Stabilizzatori", disponibili: 28, scorta: 50, status: "critical" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">DSM Operations</h1>
            <p className="text-gray-500">Gestione Operativa e Risorse</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Calendar className="h-4 w-4" />
            <span>04 Nov 2024, 14:30</span>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-white">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                Occupazione
              </CardTitle>
              <Activity className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">96%</div>
              <p className="text-xs text-amber-500">50/52 posti occupati</p>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                Staff in Servizio
              </CardTitle>
              <Users className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-gray-500">Turno attuale</p>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                Alert Risorse
              </CardTitle>
              <AlertTriangle className="h-4 w-4 text-amber-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-amber-600">3</div>
              <p className="text-xs text-red-500">Scorte sotto soglia</p>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                Efficiency Rate
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">94%</div>
              <p className="text-xs text-green-500">+2% vs target</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Bed Occupancy Chart */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-blue-500" />
                Occupazione Posti Letto
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={bedOccupancyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="time" />
                    <YAxis domain={[0, 60]} />
                    <Tooltip />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="occupati" 
                      name="Occupati"
                      stroke="#3b82f6" 
                      strokeWidth={2}
                      dot={{ r: 4 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="prenotati" 
                      name="Prenotati"
                      stroke="#8b5cf6" 
                      strokeWidth={2}
                      dot={{ r: 4 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="capacità" 
                      name="Capacità"
                      stroke="#e5e7eb" 
                      strokeWidth={2}
                      strokeDasharray="5 5"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Staff Schedule */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-green-500" />
                Staff per Turno
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={staffSchedule} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis type="number" />
                    <YAxis dataKey="ruolo" type="category" width={80} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="mattina" name="Mattina" fill="#3b82f6" stackId="a" />
                    <Bar dataKey="pomeriggio" name="Pomeriggio" fill="#8b5cf6" stackId="a" />
                    <Bar dataKey="notte" name="Notte" fill="#6366f1" stackId="a" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Resources and Tasks */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Resource Status */}
          <Card className="bg-white lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-purple-500" />
                Stato Risorse
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {resourceStatus.map((resource, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{resource.nome}</span>
                      <span className={`text-sm ${
                        resource.status === 'critical' ? 'text-red-600' :
                        resource.status === 'warning' ? 'text-amber-600' :
                        'text-green-600'
                      }`}>
                        {resource.disponibili}/{resource.scorta}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          resource.status === 'critical' ? 'bg-red-500' :
                          resource.status === 'warning' ? 'bg-amber-500' :
                          'bg-green-500'
                        }`}
                        style={{ width: `${(resource.disponibili/resource.scorta) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-blue-500" />
                Azioni Rapide
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <button className="w-full p-3 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors">
                  Gestione Turni
                </button>
                
                <button className="w-full p-3 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium hover:bg-purple-100 transition-colors">
                  Richieste Farmaci
                </button>
                
                <button className="w-full p-3 bg-green-50 text-green-700 rounded-lg text-sm font-medium hover:bg-green-100 transition-colors">
                  Assegnazione Letti
                </button>

                <div className="mt-6 p-4 bg-amber-50 rounded-lg">
                  <div className="font-medium text-amber-700">Task Urgenti</div>
                  <div className="text-sm text-amber-600 mt-2">
                    • Verifica scorte farmaci<br />
                    • Aggiornamento turni<br />
                    • Riorganizzazione posti letto
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

export default OpsDashboard;
