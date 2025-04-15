'use client';
import clsx from 'clsx';
import { FC } from 'react';

interface PopUpProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string; // классы для контейнера pop-up
  overlayClassName?: string; // классы для фона
  closeButton?: boolean; // показать кнопку закрытия
  closeIcon?: React.ReactNode; // иконка для закрытия
}

const PopUp: FC<PopUpProps> = ({
  isOpen,
  onClose,
  title,
  children,
  className = '',
  overlayClassName = '',
  closeButton = true,
  closeIcon = '×', // по умолчанию крестик
}) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={clsx(
        'fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50',
        overlayClassName
      )}
      onClick={handleOverlayClick}
    >
      <div
        className={clsx('bg-white p-6 rounded-lg shadow-lg relative max-w-lg w-full', className)}
      >
        {title && <h2 className="text-2xl font-semibold mb-4">{title}</h2>}
        {children}

        {closeButton && (
          <button className="absolute top-2 right-2 text-2xl" onClick={onClose}>
            {closeIcon}
          </button>
        )}
      </div>
    </div>
  );
};

export default PopUp;
