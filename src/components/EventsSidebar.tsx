import React from 'react';
import { format } from 'date-fns';
import { Star, Moon, Calendar } from 'lucide-react';
import { gregorianToHijri, getIslamicEvents } from '../utils/hijriCalendar';

interface EventsSidebarProps {
  selectedDate: Date;
}

export default function EventsSidebar({ selectedDate }: EventsSidebarProps) {
  const hijriDate = gregorianToHijri(selectedDate);
  const events = getIslamicEvents(hijriDate.month, hijriDate.day);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 border border-amber-100">
      <div className="flex items-center space-x-3 mb-6">
        <Calendar className="w-6 h-6 text-islamic-green" />
        <h2 className="text-xl font-bold text-midnight-blue">Selected Date</h2>
      </div>

      {/* Selected date info */}
      <div className="bg-gradient-to-br from-cream to-amber-50 rounded-xl p-4 mb-6 border border-amber-200">
        <div className="text-center">
          <div className="text-3xl font-bold text-midnight-blue mb-2">
            {format(selectedDate, 'd')}
          </div>
          <div className="text-lg text-islamic-green font-semibold mb-1">
            {format(selectedDate, 'EEEE')}
          </div>
          <div className="text-sm text-midnight-blue/70">
            {format(selectedDate, 'MMMM yyyy')}
          </div>
          
          {/* Hijri date */}
          <div className="mt-4 pt-4 border-t border-amber-200">
            <div className="text-lg font-bold text-islamic-green">
              {hijriDate.day} {hijriDate.monthName} {hijriDate.year}
            </div>
            <div className="text-sm font-arabic text-midnight-blue/70 mt-1">
              {hijriDate.day} {hijriDate.monthNameArabic} {hijriDate.year}
            </div>
          </div>
        </div>
      </div>

      {/* Events */}
      <div>
        <h3 className="text-lg font-semibold text-midnight-blue mb-4 flex items-center space-x-2">
          <Star className="w-5 h-5 text-golden" />
          <span>Islamic Events</span>
        </h3>

        {events.length > 0 ? (
          <div className="space-y-3">
            {events.map((event, index) => (
              <div
                key={index}
                className={`p-4 rounded-xl border-l-4 transition-all duration-300 hover:shadow-md ${
                  event.type === 'major'
                    ? 'bg-gradient-to-r from-golden/10 to-golden/5 border-golden'
                    : 'bg-gradient-to-r from-islamic-green/10 to-islamic-green/5 border-islamic-green'
                }`}
              >
                <div className="flex items-start space-x-3">
                  {event.type === 'major' ? (
                    <Star className="w-5 h-5 text-golden mt-0.5 flex-shrink-0" />
                  ) : (
                    <Moon className="w-5 h-5 text-islamic-green mt-0.5 flex-shrink-0" />
                  )}
                  <div className="flex-1">
                    <div className="font-semibold text-midnight-blue mb-1">
                      {event.name}
                    </div>
                    <div className="text-sm font-arabic text-islamic-green">
                      {event.nameArabic}
                    </div>
                    <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-2 ${
                      event.type === 'major'
                        ? 'bg-golden/20 text-golden'
                        : 'bg-islamic-green/20 text-islamic-green'
                    }`}>
                      {event.type === 'major' ? 'Major Event' : 'Minor Event'}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <Moon className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500">No special events on this date</p>
            <p className="text-sm text-gray-400 mt-1">
              Check other dates for Islamic holidays and observances
            </p>
          </div>
        )}
      </div>

      {/* Islamic quote or blessing */}
      <div className="mt-8 p-4 bg-gradient-to-br from-midnight-blue/5 to-islamic-green/5 rounded-xl border border-midnight-blue/10">
        <div className="text-center">
          <div className="text-sm font-arabic text-islamic-green mb-2">
            بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
          </div>
          <div className="text-xs text-midnight-blue/70">
            In the name of Allah, the Most Gracious, the Most Merciful
          </div>
        </div>
      </div>
    </div>
  );
}