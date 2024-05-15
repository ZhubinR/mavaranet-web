const MenuOverlay = ({ onClick, isOpen }) => {
    return (
        <div
            className={`mainOverlay ${isOpen ? 'active' : ''}`}
            onClick={onClick}
        >
        </div>
    )
}

export default MenuOverlay