// Hijri Calendar Utilities
export interface HijriDate {
  year: number;
  month: number;
  day: number;
  monthName: string;
  monthNameArabic: string;
}

export interface IslamicEvent {
  hijriMonth: number;
  hijriDay: number;
  name: string;
  nameArabic: string;
  type: 'major' | 'minor';
}

const HIJRI_MONTHS = [
  { name: 'Muharram', arabic: 'مُحَرَّم' },
  { name: 'Safar', arabic: 'صَفَر' },
  { name: "Rabi' ul-Awwal", arabic: 'رَبِيع الأَوَّل' },
  { name: "Rabi' ul-Aakhir", arabic: 'رَبِيع الثَّانِي' },
  { name: 'Jumada ul-Awwal', arabic: 'جُمَادَىٰ الأُولَىٰ' },
  { name: 'Jumada ul-Aakhir', arabic: 'جُمَادَىٰ الثَّانِيَة' },
  { name: 'Rajab', arabic: 'رَجَب' },
  { name: "Sha'ban", arabic: 'شَعْبَان' },
  { name: 'Ramadan', arabic: 'رَمَضَان' },
  { name: 'Shawwal', arabic: 'شَوَّال' },
  { name: "Dhu al-Qa'dah", arabic: 'ذُو الْقِعْدَة' },
  { name: 'Dhu al-Hijjah', arabic: 'ذُو الْحِجَّة' },
];

const ISLAMIC_EVENTS: IslamicEvent[] = [
  {
    hijriMonth: 1,
    hijriDay: 1,
    name: 'Islamic New Year',
    nameArabic: 'رأس السنة الهجرية',
    type: 'major',
  },
  {
    hijriMonth: 1,
    hijriDay: 10,
    name: 'Day of Ashura',
    nameArabic: 'يوم عاشوراء',
    type: 'major',
  },
  {
    hijriMonth: 3,
    hijriDay: 12,
    name: 'Mawlid an-Nabi',
    nameArabic: 'المولد النبوي',
    type: 'major',
  },
  {
    hijriMonth: 7,
    hijriDay: 27,
    name: "Isra and Mi'raj",
    nameArabic: 'الإسراء والمعراج',
    type: 'major',
  },
  {
    hijriMonth: 8,
    hijriDay: 15,
    name: "Laylat al-Bara'at",
    nameArabic: 'ليلة البراءة',
    type: 'minor',
  },
  {
    hijriMonth: 9,
    hijriDay: 1,
    name: 'Start of Ramadan',
    nameArabic: 'بداية رمضان',
    type: 'major',
  },
  {
    hijriMonth: 9,
    hijriDay: 27,
    name: 'Laylat al-Qadr',
    nameArabic: 'ليلة القدر',
    type: 'major',
  },
  {
    hijriMonth: 10,
    hijriDay: 1,
    name: 'Eid al-Fitr',
    nameArabic: 'عيد الفطر',
    type: 'major',
  },
  {
    hijriMonth: 12,
    hijriDay: 10,
    name: 'Eid al-Adha',
    nameArabic: 'عيد الأضحى',
    type: 'major',
  },
];

// Simplified Hijri conversion (approximation)
// In a production app, you'd use a more accurate conversion library
export function gregorianToHijri(gregorianDate: Date): HijriDate {
  // This is a simplified approximation - real conversion requires complex calculations
  // Starting from a known reference point
  const referenceGregorian = new Date(2024, 6, 7); // July 7, 2024
  const referenceHijri = { year: 1446, month: 1, day: 1 }; // 1 Muharram 1446

  const daysDiff = Math.floor(
    (gregorianDate.getTime() - referenceGregorian.getTime()) /
      (1000 * 60 * 60 * 24)
  );

  // Average Hijri year is about 354.37 days
  const hijriYearLength = 354.37;
  const hijriMonthLength = 29.53; // Average month length

  let hijriDay = referenceHijri.day + daysDiff;
  let hijriMonth = referenceHijri.month;
  let hijriYear = referenceHijri.year;

  while (hijriDay > hijriMonthLength) {
    hijriDay -= hijriMonthLength;
    hijriMonth++;
    if (hijriMonth > 12) {
      hijriMonth = 1;
      hijriYear++;
    }
  }

  while (hijriDay < 1) {
    hijriMonth--;
    if (hijriMonth < 1) {
      hijriMonth = 12;
      hijriYear--;
    }
    hijriDay += hijriMonthLength;
  }

  hijriDay = Math.floor(hijriDay);
  if (hijriDay < 1) hijriDay = 1;
  if (hijriDay > 30) hijriDay = 30;

  return {
    year: hijriYear,
    month: hijriMonth,
    day: hijriDay,
    monthName: HIJRI_MONTHS[hijriMonth - 1].name,
    monthNameArabic: HIJRI_MONTHS[hijriMonth - 1].arabic,
  };
}

export function getIslamicEvents(
  hijriMonth: number,
  hijriDay: number
): IslamicEvent[] {
  return ISLAMIC_EVENTS.filter(
    (event) => event.hijriMonth === hijriMonth && event.hijriDay === hijriDay
  );
}

export function getHijriMonths(): typeof HIJRI_MONTHS {
  return HIJRI_MONTHS;
}
