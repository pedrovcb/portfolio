function Folder({ project, isFirst, isOpen, onToggle, zIndex, index, openIndex, offset, folderRef }) {
  const getTransform = () => {
    if (openIndex === null) return 'translateY(0)'
    
    if (index === openIndex) {
      return `translateY(${offset}px)`
    } else if (index < openIndex) {
      return `translateY(${-offset}px)`
    } else {
      return `translateY(${offset}px)`
    }
  }

  return (
    <div
      ref={folderRef}
      onClick={onToggle}
      onMouseEnter={(e) => {
        if (!isOpen && openIndex === null) {
          e.currentTarget.style.transform = 'translateY(-6px)'
        }
      }}
      onMouseLeave={(e) => {
        if (!isOpen && openIndex === null) {
          e.currentTarget.style.transform = 'translateY(0)'
        }
      }}
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: isOpen ? '0.8 / 1' : undefined,
        height: isOpen ? undefined : '14vw',
        marginTop: isFirst ? 0 : '-4vw',
        backgroundImage: `url(${project.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'height 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        zIndex,
        transform: getTransform(),
      }}
    >
      {isOpen && project.textRegions.map((region, i) => (
        <p
          key={i}
          style={{
            position: 'absolute',
            top: region.top,
            left: region.left,
            width: region.width,
            height: region.height,
            textAlign: region.align,
            fontFamily: "'Special Elite', monospace",
            fontSize: region.size === 'small' ? 'clamp(10px, 1.2vw, 14px)' : 'clamp(12px, 1.5vw, 16px)',
            lineHeight: 1.5,
            color: '#2c2c2c',
            whiteSpace: 'pre-line',
            margin: 0,
            overflow: 'hidden',
          }}
        >
          {region.text}
        </p>
      ))}
    </div>
  )
}

export default Folder
