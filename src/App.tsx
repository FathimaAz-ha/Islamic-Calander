import React, { useState, useEffect } from 'react';
import { addMonths, subMonths } from 'date-fns';
import CalendarHeader from './components/CalendarHeader';
import CalendarGrid from './components/CalendarGrid';
import EventsSidebar from './components/EventsSidebar';

function App() {
  const [today] = useState(new Date());
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Update current time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      // Force re-render to update "today" highlighting
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const handlePreviousMonth = () => {
    setCurrentDate(prev => subMonths(prev, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(prev => addMonths(prev, 1));
  };

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-white to-amber-50">
      {/* Islamic geometric background pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <defs>
            <pattern id="islamic-bg-pattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M5,0 L10,5 L5,10 L0,5 Z M2.5,2.5 L7.5,2.5 L7.5,7.5 L2.5,7.5 Z" 
                    fill="currentColor" className="text-islamic-green" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#islamic-bg-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <CalendarHeader
            currentDate={currentDate}
            onPreviousMonth={handlePreviousMonth}
            onNextMonth={handleNextMonth}
          />
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Calendar */}
          <div className="lg:col-span-3">
            <CalendarGrid
              currentDate={currentDate}
              today={today}
              onDateClick={handleDateClick}
            />
          </div>

          {/* Events sidebar */}
          <div className="lg:col-span-1">
            <EventsSidebar selectedDate={selectedDate} />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-4 bg-white/50 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-golden rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-islamic-green rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="w-2 h-2 bg-midnight-blue rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
            <p className="text-sm text-midnight-blue/70 font-medium">
              Islamic Calendar • Built with precision and beauty
            </p>
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-midnight-blue rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
              <div className="w-2 h-2 bg-islamic-green rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
              <div className="w-2 h-2 bg-golden rounded-full animate-pulse" style={{ animationDelay: '2.5s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;