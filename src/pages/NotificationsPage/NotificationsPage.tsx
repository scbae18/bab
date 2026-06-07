import { useNavigate } from 'react-router-dom'
import { EmptyState } from '../../components/EmptyState/EmptyState'
import { Icon } from '../../components/Icon/Icon'
import { useApp } from '../../context/AppContext'
import { formatRelativeTime } from '../../utils/format'
import {
  backButton,
  header,
  list,
  markAllButton,
  notifContent,
  notifIcon,
  notifItem,
  notifMessage,
  notifTime,
  notifTitle,
  notifUnread,
  pageTitle,
} from './NotificationsPage.css'

const NOTIF_ICONS = {
  apply: 'users' as const,
  confirm: 'check' as const,
  reminder: 'clock' as const,
  system: 'info' as const,
}

export function NotificationsPage() {
  const { notifications, markNotificationRead, markAllNotificationsRead } =
    useApp()
  const navigate = useNavigate()

  const handleClick = (id: number, postId?: number) => {
    markNotificationRead(id)
    if (postId) navigate(`/post/${postId}`)
  }

  return (
    <div>
      <button className={backButton} onClick={() => navigate(-1)}>
        <Icon name="arrowLeft" size={16} />
        돌아가기
      </button>

      <div className={header}>
        <h1 className={pageTitle}>알림</h1>
        {notifications.some((n) => !n.read) && (
          <button
            type="button"
            className={markAllButton}
            onClick={markAllNotificationsRead}
          >
            모두 읽음
          </button>
        )}
      </div>

      <div className={list}>
        {notifications.length === 0 ? (
          <EmptyState
            icon={<Icon name="bell" size={24} />}
            titleText="알림이 없어요"
          />
        ) : (
          notifications.map((notif) => (
            <div
              key={notif.id}
              className={`${notifItem}${!notif.read ? ` ${notifUnread}` : ''}`}
              onClick={() => handleClick(notif.id, notif.postId)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleClick(notif.id, notif.postId)
              }}
            >
              <div className={notifIcon}>
                <Icon name={NOTIF_ICONS[notif.type]} size={18} />
              </div>
              <div className={notifContent}>
                <p className={notifTitle}>{notif.title}</p>
                <p className={notifMessage}>{notif.message}</p>
                <p className={notifTime}>{formatRelativeTime(notif.time)}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
