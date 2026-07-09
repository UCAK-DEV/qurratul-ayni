export interface PrayerTimes {
  fajr: string;
  sunrise: string;
  dhuhr: string;
  asr: string;
  maghrib: string;
  isha: string;
}

// Coordinate of Dakar, Senegal (Center of reference for Senegal muridism & general times)
const DAKAR_LAT = 14.6937;
const DAKAR_LNG = -17.4479;
const DAKAR_TZ = 0;

function degreesToRadians(deg: number): number {
  return (deg * Math.PI) / 180;
}

function radiansToDegrees(rad: number): number {
  return (rad * 180) / Math.PI;
}

// Standard Astronomical calculations for Prayer Times
export function getDakarPrayerTimes(date: Date = new Date()): PrayerTimes {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  // 1. Calculate Julian Date
  let y = year;
  let m = month;
  if (m <= 2) {
    y -= 1;
    m += 12;
  }
  const A = Math.floor(y / 100);
  const B = 2 - A + Math.floor(A / 4);
  const JD = Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + day + B - 1524.5;

  // 2. Solar Declination & Equation of Time
  const d = JD - 2451545.0;
  const g = 357.529 + 0.98560028 * d; // Mean anomaly
  const q = 280.459 + 0.98564736 * d; // Mean longitude
  const L = q + 1.915 * Math.sin(degreesToRadians(g)) + 0.020 * Math.sin(degreesToRadians(2 * g)); // Ecliptic longitude

  const R = 1.00014 - 0.01671 * Math.cos(degreesToRadians(g)) - 0.00014 * Math.cos(degreesToRadians(2 * g));
  const e = 23.439 - 0.00000036 * d; // Obliquity of the ecliptic

  const RA = radiansToDegrees(Math.atan2(Math.cos(degreesToRadians(e)) * Math.sin(degreesToRadians(L)), Math.cos(degreesToRadians(L)))) / 15;
  const EqT = q / 15 - RA; // Equation of time

  const declination = radiansToDegrees(Math.asin(Math.sin(degreesToRadians(e)) * Math.sin(degreesToRadians(L))));

  // 3. Dhuhr (Midday)
  const Dhuhr = 12 + DAKAR_TZ - DAKAR_LNG / 15 - EqT;

  // Helper for Hour Angle calculation
  const calculateHourAngle = (angle: number, sign: 'positive' | 'negative'): number => {
    const latRad = degreesToRadians(DAKAR_LAT);
    const decRad = degreesToRadians(declination);
    const angRad = degreesToRadians(angle);

    const cosH = (Math.sin(angRad) - Math.sin(latRad) * Math.sin(decRad)) / (Math.cos(latRad) * Math.cos(decRad));
    if (cosH > 1 || cosH < -1) return 0; // Out of bounds
    
    const H = radiansToDegrees(Math.acos(cosH));
    return (sign === 'positive' ? H : -H) / 15;
  };

  // Fajr: Angle is 18 degrees below horizon
  const Fajr = Dhuhr + calculateHourAngle(-18.0, 'negative');

  // Sunrise: Angle is 0.833 degrees below horizon (refraction & disk size)
  const Sunrise = Dhuhr + calculateHourAngle(-0.833, 'negative');

  // Asr: Standard Maliki/Shafii shadow ratio of 1
  const latRad = degreesToRadians(DAKAR_LAT);
  const decRad = degreesToRadians(declination);
  const acotAsrVal = Math.tan(Math.abs(latRad - decRad)) + 1; // standard shadow ratio = 1
  const AsrAngle = radiansToDegrees(Math.atan(1 / acotAsrVal));
  const Asr = Dhuhr + calculateHourAngle(AsrAngle, 'positive');

  // Maghrib: Angle is 0.833 degrees below horizon
  const Maghrib = Dhuhr + calculateHourAngle(-0.833, 'positive');

  // Isha: Angle is 17 degrees below horizon
  const Isha = Dhuhr + calculateHourAngle(-17.0, 'positive');

  // Helper to format decimal hours into "HH:MM"
  const formatTime = (decimalHours: number): string => {
    if (isNaN(decimalHours)) return "12:00";
    let hours = Math.floor(decimalHours);
    let minutes = Math.round((decimalHours - hours) * 60);
    
    if (minutes === 60) {
      hours += 1;
      minutes = 0;
    }
    
    hours = (hours + 24) % 24;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  };

  return {
    fajr: formatTime(Fajr),
    sunrise: formatTime(Sunrise),
    dhuhr: formatTime(Dhuhr),
    asr: formatTime(Asr),
    maghrib: formatTime(Maghrib),
    isha: formatTime(Isha),
  };
}
