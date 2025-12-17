import {useState, useRef, useEffect} from 'react';

function DraggableWindow({ children, initialX, initialY, title }: { children: React.ReactNode, initialX: string, initialY: string, title: string }) {
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const windowRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!windowRef.current) return;
    
    const rect = windowRef.current.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
    setIsDragging(true);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      
      setPosition({
        x: `${e.clientX - dragOffset.x}px`,
        y: `${e.clientY - dragOffset.y}px`
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragOffset]);

  return (
    <div 
      ref={windowRef}
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        border: '3px solid rgba(0, 0, 252, 0.3)',
        borderRadius: '10px',
        backgroundColor: '#f0f5fa',
        padding: '0',
        width: 'auto',
        minWidth: '300px'
      }}
    >
      <div 
        onMouseDown={handleMouseDown}
        style={{
          backgroundColor: 'rgba(0, 0, 252, 0.3)',
          padding: '8px 12px',
          borderTopLeftRadius: '8px',
          borderTopRightRadius: '8px',
          cursor: 'move',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          userSelect: 'none'
        }}
      >
        <span style={{ color: 'white', fontWeight: 'bold', fontSize: '14px' }}>{title}</span>
        <span style={{color: 'white'}}>x</span>
      </div>
      <div style={{ padding: '20px' }}>
        {children}
      </div>
    </div>
  );
}

export default DraggableWindow;
