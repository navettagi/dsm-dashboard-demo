'use client';

import React from 'react';

interface CategoryItem {
  category: string;
  queries: string[];
}

const AIQueryDashboard = () => {
  const setQueryInput = useState('');

  const suggestedQueries: CategoryItem[] = [
    {
      category: "Analisi Trend",
      queries: [
        "Mostra trend disturbi dell'umore negli ultimi 6 mesi",
        "Confronta tassi di ricaduta tra reparti",
        "Analizza efficacia trattamenti per fasce d'età"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {suggestedQueries.map((categoryItem, idx) => (
          <div key={idx} className="space-y-2">
            <h3 className="text-sm font-medium text-gray-700 mb-2">
              {categoryItem.category}
            </h3>
            <div className="space-y-2">
              {categoryItem.queries.map((query, qIdx) => {
                // Assicuriamoci che query sia una stringa
                const queryStr = String(query);
                return (
                  <div
                    key={qIdx}
                    className="p-2 text-sm bg-gray-50 rounded hover:bg-blue-50 cursor-pointer"
                    onClick={() => setQueryInput(queryStr)}
                  >
                    {queryStr}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIQueryDashboard;