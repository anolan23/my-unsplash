import { useRef } from 'react';

function Popup({ show, close, title, children }) {
  const windowRef = useRef(null);
  if (!show) return null;

  const onWindowClick = function (e) {
    if (windowRef.current.contains(e.target)) return;
    close();
  };

  return (
    <div className="popup" onClick={onWindowClick}>
      <div className="popup__window" ref={windowRef}>
        <div className="popup__window__title">{title}</div>
        {children}
      </div>
    </div>
  );
}

export default Popup;
