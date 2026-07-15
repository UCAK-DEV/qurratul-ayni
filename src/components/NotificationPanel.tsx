'use client';

import React from 'react';
import { useNotifications } from '@/context/NotificationContext';

export const NotificationPanel = () => {
  const {
    notifications: inAppNotifications,
    permission: notificationPermission,
    markAllAsRead: markAllNotificationsAsRead,
    clearAll: clearNotifications,
    requestPermission: requestNotificationPermission,
  } = useNotifications();

  return (
    <>
      <div className="flex justify-between items-center pb-2 border-b mb-3" style={{ borderColor: 'var(--border-subtle)' }}>
        <h4 className="text-xs font-semibold text-gold">Notifications</h4>
        <div className="flex gap-2.5 text-[10px]">
          <button onClick={markAllNotificationsAsRead} className="text-white/40 hover:text-gold transition-colors">Tout lire</button>
          <button onClick={clearNotifications} className="text-white/40 hover:text-gold transition-colors">Effacer</button>
        </div>
      </div>
      <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
        {inAppNotifications.length === 0 ? (
          <p className="text-xs text-white/40 italic text-center py-4">Aucune notification.</p>
        ) : (
          inAppNotifications.map(notification => (
            <div key={notification.id}
              className="p-2.5 rounded-xl border transition-all"
              style={{
                background: notification.read ? 'transparent' : 'rgba(212, 175, 55, 0.05)',
                borderColor: notification.read ? 'var(--border-subtle)' : 'var(--border-gold)',
              }}>
              <div className="flex justify-between items-start gap-2 mb-1">
                <h5 className="text-[10px] font-bold text-white uppercase tracking-wider">{notification.title}</h5>
                <span className="text-[9px] text-white/40 whitespace-nowrap">{notification.time}</span>
              </div>
              <p className="text-xs text-white/70 leading-relaxed font-reading">{notification.body}</p>
            </div>
          ))
        )}
      </div>
      {notificationPermission === 'default' && (
        <button
          onClick={requestNotificationPermission}
          className="mt-3 w-full py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-gold transition-all"
          style={{ background: 'rgba(212, 175, 55, 0.1)', border: '1px solid var(--border-gold)' }}
        >
          Activer les alertes
        </button>
      )}
    </>
  );
};

export default NotificationPanel;
