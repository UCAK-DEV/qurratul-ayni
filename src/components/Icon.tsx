'use client';

import React from 'react';
import ArrowBack from '@mui/icons-material/ArrowBack';
import ArrowForward from '@mui/icons-material/ArrowForward';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import AutoAwesome from '@mui/icons-material/AutoAwesome';
import AutoStories from '@mui/icons-material/AutoStories';
import BookmarkAdd from '@mui/icons-material/BookmarkAdd';
import BookmarkAdded from '@mui/icons-material/BookmarkAdded';
import Bookmark from '@mui/icons-material/Bookmark';
import CalendarMonth from '@mui/icons-material/CalendarMonth';
import Check from '@mui/icons-material/Check';
import CheckCircle from '@mui/icons-material/CheckCircle';
import Close from '@mui/icons-material/Close';
import CloudOff from '@mui/icons-material/CloudOff';
import Delete from '@mui/icons-material/Delete';
import ExpandMore from '@mui/icons-material/ExpandMore';
import FormatLineSpacing from '@mui/icons-material/FormatLineSpacing';
import History from '@mui/icons-material/History';
import Home from '@mui/icons-material/Home';
import Info from '@mui/icons-material/Info';
import LibraryMusic from '@mui/icons-material/LibraryMusic';
import Lightbulb from '@mui/icons-material/Lightbulb';
import List from '@mui/icons-material/List';
import MenuBook from '@mui/icons-material/MenuBook';
import MoreVert from '@mui/icons-material/MoreVert';
import MusicNote from '@mui/icons-material/MusicNote';
import Notifications from '@mui/icons-material/Notifications';
import OpenInNew from '@mui/icons-material/OpenInNew';
import Quiz from '@mui/icons-material/Quiz';
import Refresh from '@mui/icons-material/Refresh';
import Repeat from '@mui/icons-material/Repeat';
import Save from '@mui/icons-material/Save';
import School from '@mui/icons-material/School';
import Search from '@mui/icons-material/Search';
import Settings from '@mui/icons-material/Settings';
import SkipNext from '@mui/icons-material/SkipNext';
import SkipPrevious from '@mui/icons-material/SkipPrevious';
import Speed from '@mui/icons-material/Speed';
import Star from '@mui/icons-material/Star';
import Style from '@mui/icons-material/Style';
import Sync from '@mui/icons-material/Sync';
import TaskAlt from '@mui/icons-material/TaskAlt';
import TextFields from '@mui/icons-material/TextFields';
import Tune from '@mui/icons-material/Tune';
import VerticalAlignTop from '@mui/icons-material/VerticalAlignTop';
import VolumeOff from '@mui/icons-material/VolumeOff';
import PauseCircle from '@mui/icons-material/PauseCircle';
import PlayCircle from '@mui/icons-material/PlayCircle';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import ChevronRight from '@mui/icons-material/ChevronRight';
import Pause from '@mui/icons-material/Pause';
import PlayArrow from '@mui/icons-material/PlayArrow';
import ErrorIcon from '@mui/icons-material/Error';
import LightMode from '@mui/icons-material/LightMode';
import DarkMode from '@mui/icons-material/DarkMode';
import Payments from '@mui/icons-material/Payments';
import CleanHands from '@mui/icons-material/CleanHands';
import Assignment from '@mui/icons-material/Assignment';
import WbSunny from '@mui/icons-material/WbSunny';
import AirlineSeatFlat from '@mui/icons-material/AirlineSeatFlat';
import AccountBalance from '@mui/icons-material/AccountBalance';
import Brightness3 from '@mui/icons-material/Brightness3';
import Explore from '@mui/icons-material/Explore';
import FamilyRestroom from '@mui/icons-material/FamilyRestroom';
import Gavel from '@mui/icons-material/Gavel';
import Storefront from '@mui/icons-material/Storefront';
import Restaurant from '@mui/icons-material/Restaurant';
import HistoryEdu from '@mui/icons-material/HistoryEdu';
import Shield from '@mui/icons-material/Shield';
import Balance from '@mui/icons-material/Balance';
import Psychology from '@mui/icons-material/Psychology';
import Cached from '@mui/icons-material/Cached';

// Dynamic Database mapped icons
import Person from '@mui/icons-material/Person';
import BrightnessHigh from '@mui/icons-material/BrightnessHigh';
import Spa from '@mui/icons-material/Spa';
import Mosque from '@mui/icons-material/Mosque';
import PersonalInjury from '@mui/icons-material/PersonalInjury';
import Nightlight from '@mui/icons-material/Nightlight';
import VolunteerActivism from '@mui/icons-material/VolunteerActivism';
import NightsStay from '@mui/icons-material/NightsStay';
import DirectionsWalk from '@mui/icons-material/DirectionsWalk';
import HeartBroken from '@mui/icons-material/HeartBroken';
import Rule from '@mui/icons-material/Rule';
import ContentCut from '@mui/icons-material/ContentCut';
import SelfImprovement from '@mui/icons-material/SelfImprovement';
import ListAlt from '@mui/icons-material/ListAlt';
import WaterDrop from '@mui/icons-material/WaterDrop';
import Waves from '@mui/icons-material/Waves';
import Landscape from '@mui/icons-material/Landscape';
import CleaningServices from '@mui/icons-material/CleaningServices';
import ChildCare from '@mui/icons-material/ChildCare';
import NotificationsActive from '@mui/icons-material/NotificationsActive';
import Schedule from '@mui/icons-material/Schedule';
import Groups from '@mui/icons-material/Groups';
import FlightTakeoff from '@mui/icons-material/FlightTakeoff';
import AccessibilityNew from '@mui/icons-material/AccessibilityNew';
import Celebration from '@mui/icons-material/Celebration';
import Opacity from '@mui/icons-material/Opacity';
import Church from '@mui/icons-material/Church';
import AccountBalanceWallet from '@mui/icons-material/AccountBalanceWallet';
import Savings from '@mui/icons-material/Savings';
import Agriculture from '@mui/icons-material/Agriculture';
import Pets from '@mui/icons-material/Pets';
import Redeem from '@mui/icons-material/Redeem';
import HowToReg from '@mui/icons-material/HowToReg';
import Loyalty from '@mui/icons-material/Loyalty';
import Favorite from '@mui/icons-material/Favorite';
import PregnantWoman from '@mui/icons-material/PregnantWoman';
import MedicalServices from '@mui/icons-material/MedicalServices';
import HourglassEmpty from '@mui/icons-material/HourglassEmpty';
import Festival from '@mui/icons-material/Festival';
import Block from '@mui/icons-material/Block';
import TrendingDown from '@mui/icons-material/TrendingDown';
import HealthAndSafety from '@mui/icons-material/HealthAndSafety';

// Map Google Material Symbols names to MUI SVG Icon components
const iconMap: Record<string, React.ComponentType<any>> = {
  arrow_back: ArrowBack,
  arrow_forward: ArrowForward,
  arrow_forward_ios: ArrowForwardIos,
  auto_awesome: AutoAwesome,
  auto_stories: AutoStories,
  bookmark_add: BookmarkAdd,
  bookmark_added: BookmarkAdded,
  bookmark_heart: Bookmark,
  calendar_month: CalendarMonth,
  check: Check,
  check_circle: CheckCircle,
  close: Close,
  cloud_off: CloudOff,
  delete: Delete,
  expand_more: ExpandMore,
  format_line_spacing: FormatLineSpacing,
  history: History,
  home: Home,
  info: Info,
  library_music: LibraryMusic,
  lightbulb: Lightbulb,
  list: List,
  menu_book: MenuBook,
  more_vert: MoreVert,
  music_note: MusicNote,
  notifications: Notifications,
  open_in_new: OpenInNew,
  progress_activity: Cached,
  quiz: Quiz,
  refresh: Refresh,
  repeat: Repeat,
  save: Save,
  school: School,
  search: Search,
  settings: Settings,
  skip_next: SkipNext,
  skip_previous: SkipPrevious,
  speed: Speed,
  star: Star,
  style: Style,
  sync: Sync,
  task_alt: TaskAlt,
  text_fields: TextFields,
  tune: Tune,
  vertical_align_top: VerticalAlignTop,
  volume_off: VolumeOff,
  pause_circle: PauseCircle,
  play_circle: PlayCircle,
  visibility: Visibility,
  visibility_off: VisibilityOff,
  chevron_right: ChevronRight,
  pause: Pause,
  play_arrow: PlayArrow,
  error: ErrorIcon,
  light_mode: LightMode,
  dark_mode: DarkMode,
  payments: Payments,
  clean_hands: CleanHands,
  clinical_notes: Assignment,
  wb_sunny: WbSunny,
  airline_seat_flat: AirlineSeatFlat,
  account_balance: AccountBalance,
  brightness_3: Brightness3,
  explore: Explore,
  family_restroom: FamilyRestroom,
  gavel: Gavel,
  storefront: Storefront,
  restaurant: Restaurant,
  history_edu: HistoryEdu,
  shield: Shield,
  balance: Balance,
  psychology: Psychology,

  // Database dynamic additions
  person: Person,
  brightness_high: BrightnessHigh,
  spa: Spa,
  mosque: Mosque,
  personal_injury: PersonalInjury,
  nightlight: Nightlight,
  volunteer_activism: VolunteerActivism,
  nights_stay: NightsStay,
  directions_walk: DirectionsWalk,
  heart_broken: HeartBroken,
  rule: Rule,
  cut: ContentCut,
  self_improvement: SelfImprovement,
  list_alt: ListAlt,
  water_drop: WaterDrop,
  waves: Waves,
  landscape: Landscape,
  cleaning_services: CleaningServices,
  child_care: ChildCare,
  notifications_active: NotificationsActive,
  schedule: Schedule,
  assignment: Assignment,
  groups: Groups,
  flight_takeoff: FlightTakeoff,
  accessibility_new: AccessibilityNew,
  celebration: Celebration,
  opacity: Opacity,
  church: Church,
  account_balance_wallet: AccountBalanceWallet,
  savings: Savings,
  agriculture: Agriculture,
  pets: Pets,
  redeem: Redeem,
  person_check: HowToReg,
  error_outline: ErrorIcon,
  how_to_reg: HowToReg,
  loyalty: Loyalty,
  favorite: Favorite,
  pregnant_woman: PregnantWoman,
  medical_services: MedicalServices,
  styler: Style,
  hourglass_empty: HourglassEmpty,
  festival: Festival,
  block: Block,
  trending_down: TrendingDown,
  health_and_safety: HealthAndSafety,
};

interface IconProps {
  name: string;
  className?: string;
  style?: React.CSSProperties;
  suppressHydrationWarning?: boolean;
}

export const Icon: React.FC<IconProps> = ({ 
  name, 
  className = '', 
  style, 
  suppressHydrationWarning 
}) => {
  const IconComponent = iconMap[name.trim()];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in iconMap.`);
    return (
      <Info 
        className={className} 
        style={style} 
        suppressHydrationWarning={suppressHydrationWarning} 
      />
    );
  }

  return (
    <IconComponent 
      className={className} 
      style={style} 
      suppressHydrationWarning={suppressHydrationWarning} 
    />
  );
};

export default Icon;
