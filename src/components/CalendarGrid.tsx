import React from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, getDay, isSameDay, isSameMonth } from 'date-fns';
import { gregorianToHijri, getIslamicEvents, IslamicEvent } from '../utils/hijriCalendar';
import { Star, Moon } from 'lucide-react';

interface CalendarGridProps {
  currentDate: Date;
  today: Date;
  onDateClick: (date: Date) => void;
}

interface CalendarDay {
  date: Date;
  isCurrentMonth: boolean;
  isToday: boolean;
  hijriDate: { year: number; month: number; day: number; monthName: string; monthNameArabic: string };
  events: IslamicEvent[];
}

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const WEEKDAYS_ARABIC = ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];

export default function CalendarGrid({ currentDate, today, onDateClick }: CalendarGridProps) {
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const calendarStart = new Date(monthStart);
  const startDay = getDay(monthStart);
  
  // Adjust calendar start to show complete weeks
  calendarStart.setDate(calendarStart.getDate() - startDay);
  
  const calendarEnd = new Date(monthEnd);
  const endDay = getDay(monthEnd);
  calendarEnd.setDate(calendarEnd.getDate() + (6 - endDay));
  
  const calendarDays = eachDayOfInterval({
    start: calendarStart,
    end: calendarEnd
  });

  const days: CalendarDay[] = calendarDays.map(date => {
    const hijriDate = gregorianToHijri(date);
    const events = getIslamicEvents(hijriDate.month, hijriDate.day);
    
    return {
      date,
      isCurrentMonth: isSameMonth(date, currentDate),
      isToday: isSameDay(date, today),
      hijriDate,
      events
    };
  });

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 border border-amber-100">
      {/* Weekday headers */}
      <div className="grid grid-cols-7 mb-4 gap-2">
        {WEEKDAYS.map((day, index) => (
          <div key={day} className="text-center py-3">
            <div className="text-midnight-blue font-semibold text-sm">{day}</div>
            <div className="text-islamic-green text-xs mt-1 font-arabic">
              {WEEKDAYS_ARABIC[index]}
            </div>
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-2">
        {days.map((day, index) => (
          <CalendarDayCard
            key={index}
            day={day}
            onClick={() => onDateClick(day.date)}
          />
        ))}
      </div>
    </div>
  );
}

interface CalendarDayCardProps {
  day: CalendarDay;
  onClick: () => void;
}

function CalendarDayCard({ day, onClick }: CalendarDayCardProps) {
  const hasEvents = day.events.length > 0;
  const hasMajorEvent = day.events.some(event => event.type === 'major');

  return (
    <div
      onClick={onClick}
      className={`
        relative p-3 rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg
        min-h-[100px] sm:min-h-[120px] border-2
        ${day.isToday 
          ? 'bg-gradient-to-br from-golden to-golden/80 border-golden text-midnight-blue shadow-lg' 
          : day.isCurrentMonth
            ? 'bg-cream border-cream hover:border-golden/50 text-midnight-blue'
            : 'bg-gray-50 border-gray-100 text-gray-400 hover:bg-gray-100'
        }
        ${hasEvents ? 'ring-2 ring-islamic-green/30' : ''}
      `}
    >
      {/* Gregorian date */}
      <div className={`text-lg font-bold ${day.isToday ? 'text-midnight-blue' : ''}`}>
        {format(day.date, 'd')}
      </div>
      
      {/* Hijri date */}
      <div className={`text-sm mt-1 ${day.isToday ? 'text-midnight-blue/80' : 'text-islamic-green'}`}>
        <div className="font-semibold">{day.hijriDate.day}</div>
        <div className="text-xs opacity-75 font-arabic">
          {day.hijriDate.monthNameArabic}
        </div>
      </div>

      {/* Event indicators */}
      {hasEvents && (
        <div className="absolute top-2 right-2 flex space-x-1">
          {hasMajorEvent ? (
            <Star className="w-4 h-4 text-golden fill-current" />
          ) : (
            <Moon className="w-3 h-3 text-islamic-green" />
          )}
        </div>
      )}

      {/* Event tooltip on hover */}
      {hasEvents && (
        <div className="absolute bottom-full right-0 mb-2 opacity-0 hover:opacity-100 transition-opacity duration-200 z-10">
          <div className="bg-midnight-blue text-white text-xs rounded-lg p-2 shadow-lg min-w-[150px]">
            {day.events.map((event, index) => (
              <div key={index} className="mb-1 last:mb-0">
                <div className="font-semibold">{event.name}</div>
                <div className="opacity-75 font-arabic">{event.nameArabic}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Islamic geometric pattern overlay */}
      {day.isToday && (
        <div className="absolute inset-0 opacity-10 rounded-xl">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <pattern id="islamic-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M10,0 L20,10 L10,20 L0,10 Z" fill="currentColor" opacity="0.3"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#islamic-pattern)" />
          </svg>
        </div>
      )}
    </div>
  );
}