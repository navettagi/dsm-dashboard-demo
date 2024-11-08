"use client";
import React from 'react';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { Activity, AlertTriangle, TrendingUp, Search, Calendar, Users, FileText } from 'lucide-react';

const CoreDashboard = () => {
  // Dati per il trend disturbi
  const trendData = [
    { month: 'Gen', disturbiUmore: 402, schizofrenia: 348, disturbiAnsia: 275 },
    { month: 'Feb', disturbiUmore: 415, schizofrenia: 352, disturbiAnsia: 282 },
    { month: 'Mar', disturbiUmore: 425, schizofrenia: 360, disturbiAnsia: 290 },
    { month: 'Apr', disturbiUmore: 438, schizofrenia: 365, disturbiAnsia: 295 }
  ];

  // Dati per la distribuzione disturbi
  const distributionData = [
    { name: 'Disturbi Umore', value: 438, color: '#3b82f6' },
    { name: 'Schizofrenia', value: 365, color: '#6366f1' },
    { name: 'Disturbi Ansia', value: 295, color: '#8b5cf6' },
    { name: 'Disturbi Personalità', value: 150, color: '#a855f7' },
    { name: 'Altri', value: 72, color: '#d946ef' }
  ];

  // Dati per severità
  const severityData = [
    { name: 'Lieve', value: 423 },
    { name: 'Moderato', value: 512 },
    { name: 'Grave', value: 312 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">DSM Analytics Hub</h1>
            <Link 
              href="/" 
              className="px-4 py-1.5 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors flex items-center gap-2 text-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
              Menu
            </Link>
            <p className="text-gray-500">Monitoraggio e Analisi Disturbi</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Calendar className="h-4 w-4" />
            <span>Ultimo aggiornamento: 04 Nov 2024, 09:30</span>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-white">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                Pazienti Totali
              </CardTitle>
              <Users className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,320</div>
              <p className="text-xs text-green-500">+3.2% vs mese precedente</p>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                Nuovi Casi
              </CardTitle>
              <Activity className="h-4 w-4 text-purple-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">87</div>
              <p className="text-xs text-gray-500">Ultimo mese</p>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                Casi Critici
              </CardTitle>
              <AlertTriangle className="h-4 w-4 text-amber-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-amber-600">28</div>
              <p className="text-xs text-red-500">+4 nell'ultima settimana</p>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                Tasso Miglioramento
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">76%</div>
              <p className="text-xs text-green-500">+2.1% vs media annuale</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Trend Chart */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-blue-500" />
                Trend Disturbi
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={trendData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="disturbiUmore" 
                      name="Disturbi Umore"
                      stroke="#3b82f6" 
                      strokeWidth={2}
                      dot={{ r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="schizofrenia" 
                      name="Schizofrenia"
                      stroke="#6366f1" 
                      strokeWidth={2}
                      dot={{ r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="disturbiAnsia" 
                      name="Disturbi Ansia"
                      stroke="#8b5cf6" 
                      strokeWidth={2}
                      dot={{ r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Distribution Pie */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-purple-500" />
                Distribuzione Disturbi
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={distributionData}
                      cx="50%"
                      cy="50%"
                      outerRadius={130}
                      innerRadius={85}
                      dataKey="value"
                      label={({
                        cx,
                        cy,
                        midAngle,
                        innerRadius,
                        outerRadius,
                        value,
                        index
                      }) => {
                        const RADIAN = Math.PI / 180;
                        const radius = 25 + innerRadius + (outerRadius - innerRadius);
                        const x = cx + radius * Math.cos(-midAngle * RADIAN);
                        const y = cy + radius * Math.sin(-midAngle * RADIAN);

                        return (
                          <text
                            x={x}
                            y={y}
                            fill={distributionData[index].color}
                            textAnchor={x > cx ? 'start' : 'end'}
                            dominantBaseline="central"
                            className="text-xs"
                          >
                            {distributionData[index].name} ({value})
                          </text>
                        );
                      }}
                    >
                      {distributionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Query IA Section */}
        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5 text-blue-500" />
              Query Assistita IA
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Es: 'Mostra trend disturbi dell'umore negli ultimi 3 mesi...'"
                  className="flex-1 p-2 border rounded-lg text-sm"
                />
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600">
                  Cerca
                </button>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-500">Query Recenti:</p>
                <div className="space-y-2">
                  <div className="p-2 bg-gray-50 rounded-lg text-sm">
                    "Distribuzione età pazienti con disturbi d'ansia"
                  </div>
                  <div className="p-2 bg-gray-50 rounded-lg text-sm">
                    "Tasso di ricaduta per tipologia disturbo ultimo trimestre"
                  </div>
                  <div className="p-2 bg-gray-50 rounded-lg text-sm">
                    "Efficacia trattamenti nei casi di depressione maggiore"
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Severity Distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <Card className="bg-white lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-green-500" />
                Distribuzione Severità
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={severityData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#3b82f6">
                      {severityData.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`} 
                          fill={index === 0 ? '#4ade80' : index === 1 ? '#facc15' : '#ef4444'} 
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-red-500" />
                Alert Clinici
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 bg-red-50 rounded-lg">
                  <div className="font-medium text-red-700">Priorità Alta</div>
                  <div className="text-sm text-red-600">
                    8 pazienti richiedono revisione urgente
                  </div>
                </div>
                
                <div className="p-3 bg-amber-50 rounded-lg">
                  <div className="font-medium text-amber-700">Monitoraggio</div>
                  <div className="text-sm text-amber-600">
                    15 pazienti in fase di stabilizzazione
                  </div>
                </div>
                
                <div className="p-3 bg-blue-50 rounded-lg">
                  <div className="font-medium text-blue-700">Follow-up</div>
                  <div className="text-sm text-blue-600">
                    23 visite programmate questa settimana
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

export default CoreDashboard;
