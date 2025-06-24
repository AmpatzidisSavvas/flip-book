
import HTMLFlipBook from "react-pageflip";

function Book() {
  const imageList = Array.from({ length: 26 }, (_, i) => {
    const number = String(i + 1).padStart(3, '0'); 
    return `Balkanoia1_${number}.webp`;
  });
  
  return (
    
      <HTMLFlipBook 
        width={420}          
        height={595}         
        maxShadowOpacity={0.5}
        size="stretch"       
        minWidth={298}        
        minHeight={420}   
        maxWidth={420}        
        maxHeight={595}    
        drawShadow={true}
        showCover={true}
        
      >
        <div className="page" style={{ background: 'transparent' }}>
          <div className="page-content cover">
            <img 
              src='img/Balkanoia1_000.webp' 
              alt="Cover" 
              className="cover-img"
            />
          </div>
        </div>

        {imageList.map((filename, index) => (
          <div className="page" key={index}>
            <div className="page-content" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
              <img 
                src={`img/${filename}`} 
                alt={filename} 
                style={{ maxWidth: '100%', maxHeight: '100%' }}
              />
            </div>
          </div>
        ))}
      </HTMLFlipBook>
  
  );
}

export default Book