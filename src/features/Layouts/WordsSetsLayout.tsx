import { useState, useEffect, useRef } from 'react';
import WordSetsCarousel from '../Main/WordsSet/WordSetsCarousel';

const WordsSetsLayout = () => {
  const [visibleElements, setVisibleElements] = useState(3);

  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (!listRef.current) return;

      if (listRef.current?.offsetWidth < 650) {
        setVisibleElements(2);
      }

      if (listRef.current?.offsetWidth > 650) {
        setVisibleElements(3);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <WordSetsCarousel visibleElements={visibleElements} ref={listRef} />
    </div>
  );
};

export default WordsSetsLayout;
