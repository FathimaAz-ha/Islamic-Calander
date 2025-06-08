import React from 'react';
import { format } from 'date-fns';
import { ChevronLeft, ChevronRight, Calendar, Moon } from 'lucide-react';
import { gregorianToHijri, getHijriMonths } from '../utils/hijriCalendar';

interface CalendarHeaderProps {
  currentDate: Date;
  onPreviousMonth: () => void;
  onNextMonth: () => void;
}

export default function CalendarHeader({ currentDate, onPreviousMonth, onNextMonth }: CalendarHeaderProps) {
  const hijriDate = gregorianToHijri(currentDate);
  const hijriMonths = getHijriMonths();

  return (
    <div className="bg-gradient-to-r from-midnight-blue via-midnight-blue/95 to-midnight-blue rounded-2xl p-6 text-white shadow-2xl border border-midnight-blue/20">
      {/* Main header with navigation */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onPreviousMonth}
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-110 border border-white/20"
        >
          <ChevronLeft className="w-6 h-6 text-golden" />
        </button>

        <div className="text-center flex-1 mx-6">
          <div className="flex items-center justify-center space-x-3 mb-2">
            <Moon className="w-8 h-8 text-golden" />
            <h1 className="text-3xl font-bold text-golden">Islamic Calendar</h1>
            <Calendar className="w-8 h-8 text-golden" />
          </div>
          
          {/* Islamic geometric decoration */}
          <div className="flex justify-center space-x-2 opacity-50">
            <div className="w-2 h-2 bg-golden rounded-full"></div>
            <div className="w-3 h-3 bg-golden transform rotate-45"></div>
            <div className="w-2 h-2 bg-golden rounded-full"></div>
          </div>
        </div>

        <button
          onClick={onNextMonth}
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-110 border border-white/20"
        >
          <ChevronRight className="w-6 h-6 text-golden" />
        </button>
      </div>

      {/* Date information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Hijri Date */}
        <div className="text-center md:text-right">
          <div className="text-sm text-golden/80 mb-1">Hijri Calendar</div>
          <div className="text-2xl font-bold text-white mb-1">
            {hijriMonths[hijriDate.month - 1].name} {hijriDate.year}
          </div>
          <div className="text-lg font-arabic text-golden">
            {hijriMonths[hijriDate.month - 1].arabic} {hijriDate.year}
          </div>
        </div>

        {/* Gregorian Date */}
        <div className="text-center md:text-left">
          <div className="text-sm text-golden/80 mb-1">Gregorian Calendar</div>
          <div className="text-2xl font-bold text-white mb-1">
            {format(currentDate, 'MMMM yyyy')}
          </div>
          <div className="text-lg text-golden">
            {format(currentDate, 'EEEE, MMMM do')}
          </div>
        </div>
      </div>

      {/* Islamic pattern border */}
      <div className="mt-6 h-1 bg-gradient-to-r from-transparent via-golden to-transparent rounded-full opacity-50"></div>
    </div>
  );
}