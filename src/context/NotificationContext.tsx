'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { getSetting } from '@/utils/settings';
import { calculateHijriDate } from '@/utils/hijri';
import { getRecommendationForDate } from '@/data/nafilas';

export interface InAppNotification {
  id: string;
  title: string;
  body: string;
  time: string;
  read: boolean;
}

interface NotificationContextType {
  notifications: InAppNotification[];
  unreadCount: number;
  permission: string;
  markAllAsRead: () => void;
  clearAll: () => void;
  requestPermission: () => Promise<void>;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [notifications, setNotifications] = useState<InAppNotification[]>([]);
  const [permission, setPermission] = useState<string>('default');

  useEffect(() => {
    async function initializeNotifications() {
      const offsetStr = await getSetting('hijri_offset', '0');
      const offset = parseInt(offsetStr, 10);

      const hijriDate = calculateHijriDate(offset);
      const dayOfWeek = new Date().getDay();
      const recommendations = getRecommendationForDate(hijriDate.day, hijriDate.month, dayOfWeek);
      const recommendation = recommendations.length > 0 ? recommendations[0] : null;

      setNotifications([
        {
          id: '1',
          title: 'Recommandation du Jour',
          body: recommendation
            ? `Aujourd'hui : ${recommendation.title}. Découvrez la pratique recommandée.`
            : "Découvrez les lectures et wirds recommandés pour aujourd'hui.",
          time: 'Il y a 5 min',
          read: false,
        },
      ]);

      if (typeof window !== 'undefined' && 'Notification' in window) {
        setPermission(Notification.permission);
      }
    }

    initializeNotifications();
  }, []);

  const requestPermission = async () => {
    if (typeof window === 'undefined' || !('Notification' in window)) return;
    try {
      const perm = await Notification.requestPermission();
      setPermission(perm);
      if (perm === 'granted') {
        new Notification('Notifications Activées', {
          body: 'Vous recevrez des rappels quotidiens pour les Nafilas.',
          icon: '/mosque-192.png',
        });
        setNotifications(prev => [
          {
            id: Date.now().toString(),
            title: 'Notifications activées',
            body: 'Les rappels de nafilas sur le bureau sont maintenant fonctionnels.',
            time: 'Maintenant',
            read: false,
          },
          ...prev,
        ]);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const clearAll = () => {
    setNotifications([]);
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <NotificationContext.Provider value={{ notifications, unreadCount, permission, markAllAsRead, clearAll, requestPermission }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (!context) throw new Error('useNotifications must be used within a NotificationProvider');
  return context;
};
